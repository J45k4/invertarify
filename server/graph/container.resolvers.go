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

func (r *containerResolver) Items(ctx context.Context, obj *models.Container) (*gmodels.ContainerItemsConnection, error) {
	items := []*models.Item{}

	r.DB.Where("container_id = ?", obj.ID).Find(&items)

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
