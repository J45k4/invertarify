package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"strings"

	"github.com/j45k4/invertarify/graph/generated"
	gmodels "github.com/j45k4/invertarify/graph/model"
	"github.com/j45k4/invertarify/models"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func (r *queryResolver) Item(ctx context.Context, itemID string) (*models.Item, error) {
	item := models.Item{}

	r.DB.Find(&item, itemID)

	return &item, nil
}

func (r *queryResolver) Items(ctx context.Context, input gmodels.Items) (*gmodels.ItemsConnection, error) {
	itemsConnection := &gmodels.ItemsConnection{}

	mods := []qm.QueryMod{}

	if input.SearchWord != nil {
		mods = append(mods, qm.Where("lower(name) like ?", "%"+strings.ToLower(*input.SearchWord)+"%"))
	}

	if input.Status != nil {
		if *input.Status == gmodels.ItemStatusInUse {
			mods = append(mods, qm.Where("container_id is null"))
		}

		if *input.Status == gmodels.ItemStatusNotInUse {
			mods = append(mods, qm.Where("container_id is not null"))
		}
	}

	if input.ContainerID != nil {
		mods = append(mods, qm.Where("container_id = ?", uniqueIdPtrAsNullableInt(input.ContainerID)))
	}

	r.DB.Find(&itemsConnection.Items)

	return itemsConnection, nil
}

func (r *queryResolver) Container(ctx context.Context, containerID string) (*models.Container, error) {
	container := models.Container{}

	r.DB.Find(&container, containerID)

	return &container, nil
}

func (r *queryResolver) Containers(ctx context.Context, input *gmodels.ContaninersSearchOptions) (*gmodels.ContainersConnection, error) {
	containersConnection := &gmodels.ContainersConnection{}

	mods := []qm.QueryMod{}

	if input != nil {
		if input.SearchWord != nil {
			mods = append(mods, qm.Where("lower(name) like ?", "%"+strings.ToLower(*input.SearchWord)+"%"))
		}

		if input.ContainerType != nil {
			if *input.ContainerType == gmodels.ContainerTypeChild {
				mods = append(mods, qm.Where("container_id is not null"))
			}

			if *input.ContainerType == gmodels.ContainerTypeRoot {
				mods = append(mods, qm.Where("container_id is null"))
			}
		}

		if input.ParentContainerID != nil {
			mods = append(mods, qm.Where("container_id = ?", uniqueIdPtrAsNullableInt(input.ParentContainerID)))
		}
	}

	r.DB.Find(&containersConnection)

	return containersConnection, nil
}

func (r *queryResolver) Picture(ctx context.Context, pictureID string) (*models.Picture, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) RootContainers(ctx context.Context) ([]*models.Container, error) {
	containers := []*models.Container{}

	r.DB.Where("container_id is null").Find(&containers)

	return containers, nil
}

func (r *queryResolver) ItemsWithoutContainer(ctx context.Context) ([]*models.Item, error) {
	items := []*models.Item{}

	r.DB.Where("container_id is null").Find(&items)

	return items, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
