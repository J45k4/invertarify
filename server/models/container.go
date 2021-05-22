package models

import "time"

type Container struct {
	ID          int
	Name        string
	ContainerID *int
	CreatedAt   time.Time
	DeletedAt   *time.Time
}
