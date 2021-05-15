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

func (r *itemResolver) ID(ctx context.Context, obj *models.Item) (string, error) {
	return fmt.Sprint(obj.ID), nil
}

func (r *itemResolver) Pictures(ctx context.Context, obj *models.Item) (*gmodels.ItemPicturesConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

// Item returns generated.ItemResolver implementation.
func (r *Resolver) Item() generated.ItemResolver { return &itemResolver{r} }

type itemResolver struct{ *Resolver }
