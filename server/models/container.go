package models

import "time"

type Container struct {
	ID        int
	Name      string
	CreatedAt time.Time
}
