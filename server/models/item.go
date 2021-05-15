package models

import "time"

type Item struct {
	ID        int32
	Name      string
	Metadata  string
	Barcode   string
	CreatedAt time.Time
}
