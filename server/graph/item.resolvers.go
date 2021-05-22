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

func (r *itemResolver) PathParts(ctx context.Context, obj *models.Item) ([]*gmodels.PathPart, error) {
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

func (r *itemResolver) Pictures(ctx context.Context, obj *models.Item) (*gmodels.ItemPicturesConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *itemResolver) DeletedAt(ctx context.Context, obj *models.Item) (*string, error) {
	if obj.DeletedAt == nil {
		return nil, nil
	}

	deletedAt := obj.DeletedAt.Format(time.RFC3339)

	return &deletedAt, nil
}

// Item returns generated.ItemResolver implementation.
func (r *Resolver) Item() generated.ItemResolver { return &itemResolver{r} }

type itemResolver struct{ *Resolver }
