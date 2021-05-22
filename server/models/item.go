package models

import "time"

type Item struct {
	ID          int
	Name        string
	Metadata    *string
	ContainerID *int
	Barcode     string
	CreatedAt   time.Time
	DeletedAt   *time.Time
}
