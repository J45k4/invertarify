
export enum DragType {
	ITEM = "ITEM",
	CONTAINER = "CONTAINER"
}

export interface DragItem {
	type: "item"
	itemId: string
}

export interface DragContainer {
	type: "container"
	containerId: string
}

export type DragEntity = DragItem | DragContainer