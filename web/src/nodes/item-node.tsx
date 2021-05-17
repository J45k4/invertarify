import Link from "next/link"
import React from "react"

import { useDrag } from "react-dnd"
import { DragType } from "../types"

export const ItemNode = (props: {
	itemId: string
	name: string
}) => {
	const [c, ref] = useDrag({
		type: DragType.ITEM,
		item: { type: "item", itemId: props.itemId }
	})
	
	return (
		<div ref={ref}>
			<Link href={`/item/${props.itemId}`}>
				{props.name}
			</Link>
		</div>
	)
}