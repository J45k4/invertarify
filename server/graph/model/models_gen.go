// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package gmodels

import (
	"fmt"
	"io"
	"strconv"

	"github.com/99designs/gqlgen/graphql"
	"github.com/j45k4/invertarify/models"
)

type AddPictureForItem struct {
	ItemID  string         `json:"itemId"`
	Picture graphql.Upload `json:"picture"`
}

type AddPictureForItemResponse struct {
	Error *Error `json:"error"`
}

type ArchiveContainer struct {
	ContainerID    *string `json:"containerId"`
	ArchiveContent *bool   `json:"archiveContent"`
}

type ArchiveContainerResponse struct {
	Error *Error `json:"error"`
}

type ArchiveItem struct {
	ItemID string `json:"itemId"`
}

type ArchiveItemResponse struct {
	Error *Error `json:"error"`
}

type ContainerContainersConnection struct {
	Containers []*models.Container `json:"containers"`
	Edges      []*ContainerEdge    `json:"edges"`
}

type ContainerEdge struct {
	Cursor string            `json:"cursor"`
	Node   *models.Container `json:"node"`
}

type ContainerItemsConnection struct {
	Items []*models.Item `json:"items"`
}

type ContainerPicturesConnection struct {
	Edges []*PictureEdge `json:"edges"`
}

type ContainersConnection struct {
	Containers []*models.Container `json:"containers"`
}

type ContaninersSearchOptions struct {
	ContainerType     *ContainerType `json:"containerType"`
	ParentContainerID *string        `json:"parentContainerId"`
	SearchWord        *string        `json:"searchWord"`
	After             *string        `json:"after"`
	First             *int           `json:"first"`
}

type CreateContainer struct {
	ParentContainerID *string `json:"parentContainerId"`
	Name              *string `json:"name"`
}

type CreateContainerResponse struct {
	Error     *Error            `json:"error"`
	Container *models.Container `json:"container"`
}

type CreateItem struct {
	Name        *string `json:"name"`
	Barcode     *string `json:"barcode"`
	ContainerID *string `json:"containerId"`
}

type CreateItemResponse struct {
	Error *Error       `json:"error"`
	Item  *models.Item `json:"item"`
}

type Error struct {
	Code    *int    `json:"code"`
	Message *string `json:"message"`
}

type ItemPicturesConnection struct {
	Edges []*PictureEdge `json:"edges"`
}

type Items struct {
	Barcode     *string     `json:"barcode"`
	SearchWord  *string     `json:"searchWord"`
	ContainerID *string     `json:"containerId"`
	Status      *ItemStatus `json:"status"`
}

type ItemsConnection struct {
	Items []*models.Item `json:"items"`
}

type PictureEdge struct {
	Cursor string          `json:"cursor"`
	Node   *models.Picture `json:"node"`
}

type PlaceContainerToContainer struct {
	SrcContainerID string `json:"srcContainerId"`
	DstContainerID string `json:"dstContainerId"`
}

type PlaceContainerToContainerResponse struct {
	Error *Error `json:"error"`
}

type PlaceItemToContainer struct {
	ContainerID string `json:"containerId"`
	ItemID      string `json:"itemId"`
}

type PlaceItemToContainerResponse struct {
	Error *Error `json:"error"`
}

type UpdateContainer struct {
	ContainerID string  `json:"containerId"`
	Name        *string `json:"name"`
}

type UpdateContainerRespose struct {
	Container *models.Container `json:"container"`
}

type UpdateItem struct {
	ItemID      string  `json:"itemId"`
	ContainerID *string `json:"containerId"`
	Name        *string `json:"name"`
	Metadata    *string `json:"metadata"`
}

type UpdateItemResponse struct {
	Item *models.Item `json:"item"`
}

type ContainerType string

const (
	ContainerTypeRoot  ContainerType = "Root"
	ContainerTypeChild ContainerType = "Child"
	ContainerTypeAll   ContainerType = "All"
)

var AllContainerType = []ContainerType{
	ContainerTypeRoot,
	ContainerTypeChild,
	ContainerTypeAll,
}

func (e ContainerType) IsValid() bool {
	switch e {
	case ContainerTypeRoot, ContainerTypeChild, ContainerTypeAll:
		return true
	}
	return false
}

func (e ContainerType) String() string {
	return string(e)
}

func (e *ContainerType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ContainerType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ContainerType", str)
	}
	return nil
}

func (e ContainerType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type ItemStatus string

const (
	ItemStatusAll      ItemStatus = "All"
	ItemStatusInUse    ItemStatus = "InUse"
	ItemStatusNotInUse ItemStatus = "NotInUse"
)

var AllItemStatus = []ItemStatus{
	ItemStatusAll,
	ItemStatusInUse,
	ItemStatusNotInUse,
}

func (e ItemStatus) IsValid() bool {
	switch e {
	case ItemStatusAll, ItemStatusInUse, ItemStatusNotInUse:
		return true
	}
	return false
}

func (e ItemStatus) String() string {
	return string(e)
}

func (e *ItemStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ItemStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ItemStatus", str)
	}
	return nil
}

func (e ItemStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
