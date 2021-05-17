import gql from "graphql-tag"
import React, { Fragment } from "react"
import { useDrag, useDrop } from "react-dnd"
import { usePlaceItemToContainerMutation } from "../generated-graphql-types"
import { TreelistNode } from "../treelist/treelist-node"
import { DragContainer, DragEntity, DragItem, DragType } from "../types"
import { useContainer_Tree_ContainerQuery, usePlaceContainerToContainerMutation } from "../generated-graphql-types"
import { ContainerTreeItem } from "./container-tree-item"
import Link from "next/link"

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
	containers: {
		id?: string,
		name?: string
	}[]
	items: {
		id?: string
		name?: string
	}[]
}) => {
	const [placeItemToContainer] = usePlaceItemToContainerMutation()
	const [placeToCon] = usePlaceContainerToContainerMutation()

	const [c, ref] = useDrop({
		accept: [DragType.ITEM, DragType.CONTAINER],
		drop: (entity: DragEntity, monitor) => {
			if (entity.type === "item") {
				placeItemToContainer({
					variables: {
						input: {
							containerId: props.containerId,
							itemId: entity.itemId
						}
					}
				})
			}

			if (entity.type === "container") {
				if (entity.containerId === props.containerId) {
					return
				}

				placeToCon({
					variables: {
					input: {
						srcContainerId: entity.containerId,
						dstContainerId: props.containerId
					}
					}
				})
			}
		}
	})

	const [c2, ref2] = useDrag({
		type: DragType.CONTAINER,
		item: { type: "container", containerId: props.containerId }
	})

	return (
		<div ref={ref}>
			<div ref={ref2}>
				<TreelistNode header={<Link href={`/container/${props.containerId}`}>{props.name}</Link>} showCaret={props.items.length > 0 || props.containers.length > 0}>
					{props.containers.map(p => (
						<ContainerTreeContainer containerId={p.id} name={p.name} containers={[]} items={[]} />
					))}
					<Fragment>
						{props.items.map(p => (
							<ContainerTreeItem itemId={p.id} name={p.name} />
						))}
					</Fragment>
				</TreelistNode>
			</div>
		</div>
	)
}