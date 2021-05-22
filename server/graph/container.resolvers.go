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

func (r *containerResolver) DeletedAt(ctx context.Context, obj *models.Container) (*string, error) {
	if obj.DeletedAt == nil {
		return nil, nil
	}

	deletedAt := obj.DeletedAt.Format(time.RFC3339)

	return &deletedAt, nil
}

func (r *containerResolver) PathParts(ctx context.Context, obj *models.Container) ([]*gmodels.PathPart, error) {
	pathParts := []*gmodels.PathPart{}

	if obj.ContainerID != nil {
		id := int(*obj.ContainerID)
		parentContainerId := &id

		for {
			if parentContainerId == nil {
				break
			}

			container := models.Container{}

			r.DB.Find(&container, parentContainerId)

			if container.ID == 0 {
				break
			}

			pathParts = append([]*gmodels.PathPart{
				{
					ID:   fmt.Sprint(container.ID),
					Name: container.Name,
				},
			}, pathParts...)

			parentContainerId = container.ContainerID
		}
	}

	return pathParts, nil
}

func (r *containerResolver) Items(ctx context.Context, obj *models.Container) (*gmodels.ContainerItemsConnection, error) {
	items := []*models.Item{}

	r.DB.Where("container_id = ?", obj.ID).
		Where("deleted_at is null").
		Find(&items)

	return &gmodels.ContainerItemsConnection{
		Items: items,
	}, nil
}

func (r *containerResolver) Containers(ctx context.Context, obj *models.Container) (*gmodels.ContainerContainersConnection, error) {
	containers := []*models.Container{}

	r.DB.Where("container_id = ?", obj.ID).Find(&containers)

	return &gmodels.ContainerContainersConnection{
		Containers: containers,
	}, nil
}

func (r *containerResolver) Pictures(ctx context.Context, obj *models.Container) (*gmodels.ContainerPicturesConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *containerResolver) PossibleItemsToAdd(ctx context.Context, obj *models.Container) ([]*models.Item, error) {
	items := []*models.Item{}

	r.DB.Where("conainer_id is null").Find(&items)

	return items, nil
}

// Container returns generated.ContainerResolver implementation.
func (r *Resolver) Container() generated.ContainerResolver { return &containerResolver{r} }

type containerResolver struct{ *Resolver }
