package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/j45k4/invertarify/graph/generated"
	gmodels "github.com/j45k4/invertarify/graph/model"
	"github.com/j45k4/invertarify/models"
)

func (r *mutationResolver) CreateItem(ctx context.Context, input gmodels.CreateItem) (*gmodels.CreateItemResponse, error) {
	newItem := models.Item{
		Name: *input.Name,
	}

	r.DB.Create(&newItem)

	return &gmodels.CreateItemResponse{
		Item: &newItem,
	}, nil
}

func (r *mutationResolver) UpdateItem(ctx context.Context, input gmodels.UpdateItem) (*gmodels.UpdateItemResponse, error) {
	item := models.Item{}

	r.DB.Find(&item, input.ItemID)

	item.Name = *input.Name
	item.Metadata = input.Metadata

	r.DB.Save(&item)

	return &gmodels.UpdateItemResponse{
		Item: &item,
	}, r.DB.Error
}

func (r *mutationResolver) AddPictureForItem(ctx context.Context, input gmodels.AddPictureForItem) (*gmodels.AddPictureForItemResponse, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) CreateContainer(ctx context.Context, input gmodels.CreateContainer) (*gmodels.CreateContainerResponse, error) {
	newContainer := models.Container{
		Name: *input.Name,
	}

	r.DB.Create(&newContainer)

	return &gmodels.CreateContainerResponse{
		Container: &newContainer,
	}, nil
}

func (r *mutationResolver) UpdateContainer(ctx context.Context, input gmodels.UpdateContainer) (*gmodels.UpdateContainerRespose, error) {
	container := models.Container{}

	r.DB.Find(&container, input.ContainerID)

	if container.ID == 0 {
		return &gmodels.UpdateContainerRespose{}, nil
	}

	if input.Name != nil {
		container.Name = *input.Name
	}

	r.DB.Save(&container)

	return &gmodels.UpdateContainerRespose{
		Container: &container,
	}, nil
}

func (r *mutationResolver) PlaceItemToContainer(ctx context.Context, input gmodels.PlaceItemToContainer) (*gmodels.PlaceItemToContainerResponse, error) {
	container := models.Container{}

	err := r.DB.Find(&container, input.ContainerID).Error

	if err != nil {
		logError(ctx, err)
		return nil, createError(ctx, InternalServerError)
	}

	if container.ID == 0 {
		return nil, createError(ctx, ContainerDoesNotExist)
	}

	item := models.Item{}

	r.DB.Find(&item, input.ItemID)

	if item.ID == 0 {
		return nil, createError(ctx, ItemDoesNotExist)
	}

	var previousContainer *models.Container = nil

	if item.ContainerID != nil {
		r.DB.Find(&previousContainer, item.ContainerID)
	}

	item.ContainerID = &container.ID

	r.DB.Save(&item)

	return &gmodels.PlaceItemToContainerResponse{
		Container:         &container,
		Item:              &item,
		PreviousContainer: previousContainer,
	}, r.DB.Error
}

func (r *mutationResolver) PlaceContainerToContainer(ctx context.Context, input gmodels.PlaceContainerToContainer) (*gmodels.PlaceContainerToContainerResponse, error) {
	srcContainer := models.Container{}

	r.DB.Find(&srcContainer, input.SrcContainerID)

	if srcContainer.ID == 0 {
		return &gmodels.PlaceContainerToContainerResponse{}, nil
	}

	var previousContainer *models.Container = nil

	if srcContainer.ContainerID != nil {
		r.DB.Find(&previousContainer, srcContainer.ContainerID)
	}

	dstContainer := models.Container{}

	r.DB.Find(&dstContainer, input.DstContainerID)

	if dstContainer.ID == 0 {
		return &gmodels.PlaceContainerToContainerResponse{}, nil
	}

	srcContainer.ContainerID = &dstContainer.ID

	r.DB.Save(srcContainer)

	return &gmodels.PlaceContainerToContainerResponse{
		SrcContainer:      &srcContainer,
		DstContainer:      &dstContainer,
		PreviousContainer: previousContainer,
	}, nil
}

func (r *mutationResolver) ArchiveItem(ctx context.Context, input gmodels.ArchiveItem) (*gmodels.ArchiveItemResponse, error) {
	item := models.Item{}

	r.DB.Find(&item, input.ItemID)

	if item.ID == 0 {
		return &gmodels.ArchiveItemResponse{}, nil
	}

	now := time.Now()

	item.DeletedAt = &now

	r.DB.Save(item)

	return &gmodels.ArchiveItemResponse{
		Item: &item,
	}, nil
}

func (r *mutationResolver) ArchiveContainer(ctx context.Context, input gmodels.ArchiveContainer) (*gmodels.ArchiveContainerResponse, error) {
	tx := r.DB.Begin()

	container := models.Container{}

	tx.Find(&container, input.ContainerID)

	if container.ID == 0 {
		return &gmodels.ArchiveContainerResponse{}, createError(ctx, ContainerDoesNotExist)
	}

	now := time.Now()

	container.DeletedAt = &now

	tx.Save(container)

	childItems := []models.Item{}

	tx.Where("container_id = ?", input.ContainerID).Find(&childItems)

	childContainers := []models.Container{}

	tx.Where("container_id = ?", input.ContainerID).Find(&childContainers)

	if input.ArchiveContent != nil && *input.ArchiveContent {

	} else {
		for _, childItem := range childItems {
			childItem.ContainerID = nil

			tx.Save(childItem)
		}

		for _, chilContainer := range childContainers {
			chilContainer.ContainerID = nil

			tx.Save(chilContainer)
		}
	}

	tx.Commit()

	return &gmodels.ArchiveContainerResponse{
		Container: &container,
	}, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }
