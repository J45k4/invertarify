import gql from "graphql-tag"
import React, { Fragment } from "react"
import { useDrop } from "react-dnd"
import { usePlaceItemToContainerMutation } from "../generated-graphql-types"
import { TreelistNode } from "../treelist/treelist-node"
import { DragItem, DragType } from "../types"
import { useContainer_Tree_ContainerQuery } from "../generated-graphql-types"
import { ContainerTreeItem } from "./container-tree-item"

gql`
	query container_tree_container($containerId: ID!) {
		container(containerId: $containerId) {
			id
			items {
				items {
					id
					name
				}
			}
		}
	}
`

export const ContainerTreeContainer = (props: {
	containerId: string
	name: string
	items: {
		id?: string
		name?: string
	}[]
}) => {
	const [placeItemToContainer] = usePlaceItemToContainerMutation()

	const [c, ref] = useDrop({
		accept: DragType.ITEM,
		drop: (item: DragItem, monitor) => {
			placeItemToContainer({
				variables: {
					input: {
						containerId: props.containerId,
						itemId: item.itemId
					}
				}
			})
		}
	})

	return (
		<div ref={ref}>
			<TreelistNode name={props.name} showCaret={props.items.length > 0}>
				<Fragment>
					{props.items.map(p => (
						<ContainerTreeItem itemId={p.id} name={p.name} />
					))}
				</Fragment>
			</TreelistNode>
		</div>
	)
}