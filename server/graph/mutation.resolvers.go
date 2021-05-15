package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

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
	item.Metadata = *input.Metadata

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

func (r *mutationResolver) PlaceItemToContainer(ctx context.Context, input gmodels.PlaceItemToContainer) (*gmodels.PlaceItemToContainerResponse, error) {
	// container

	// containerID := uniqueIdAsNullableInt(input.ContainerID)

	// container, _ := models.FindContainer(ctx, r.DB, uniqueIdAsInt(input.ContainerID))

	// if container == nil {
	// 	return &gmodels.PlaceItemToContainerResponse{}, nil
	// }

	// item, _ := models.FindItem(ctx, r.DB, uniqueIdAsInt(input.ItemID))

	// item.ContainerID = containerID

	// item.Update(ctx, r.DB, boil.Infer())

	return &gmodels.PlaceItemToContainerResponse{}, nil
}

func (r *mutationResolver) PlaceContainerToContainer(ctx context.Context, input gmodels.PlaceContainerToContainer) (*gmodels.PlaceContainerToContainerResponse, error) {
	// dstContainer, _ := models.FindContainer(ctx, r.DB, uniqueIdAsInt(input.DstContainerID))

	// if dstContainer == nil {
	// 	return &gmodels.PlaceContainerToContainerResponse{}, nil
	// }

	// srcContainer, _ := models.FindContainer(ctx, r.DB, uniqueIdAsInt(input.SrcContainerID))

	// if srcContainer == nil {
	// 	return &gmodels.PlaceContainerToContainerResponse{}, nil
	// }

	// srcContainer.ContainerID = uniqueIdAsNullableInt(input.DstContainerID)

	// srcContainer.Update(ctx, r.DB, boil.Infer())

	return &gmodels.PlaceContainerToContainerResponse{}, nil
}

func (r *mutationResolver) ArchiveItem(ctx context.Context, input gmodels.ArchiveItem) (*gmodels.ArchiveItemResponse, error) {
	// item, _ := models.FindItem(ctx, r.DB, uniqueIdAsInt(input.ItemID))

	// item.Delete(ctx, r.DB)

	return &gmodels.ArchiveItemResponse{}, nil
}

func (r *mutationResolver) ArchiveContainer(ctx context.Context, input gmodels.ArchiveContainer) (*gmodels.ArchiveContainerResponse, error) {
	// container, _ := models.FindContainer(ctx, r.DB, uniqueIdAsInt(*input.ContainerID))

	// container.Delete(ctx, r.DB)

	return &gmodels.ArchiveContainerResponse{}, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }