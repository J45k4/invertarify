package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/j45k4/invertarify/graph/generated"
	"github.com/j45k4/invertarify/models"
)

func (r *pictureResolver) ID(ctx context.Context, obj *models.Picture) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

// Picture returns generated.PictureResolver implementation.
func (r *Resolver) Picture() generated.PictureResolver { return &pictureResolver{r} }

type pictureResolver struct{ *Resolver }
