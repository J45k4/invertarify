package models

import "time"

type Item struct {
	ID          int32
	Name        string
	Metadata    *string
	ContainerID *int32
	Barcode     string
	CreatedAt   time.Time
}
