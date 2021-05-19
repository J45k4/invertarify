import gql from "graphql-tag"
import React, { Fragment } from "react"
import { useDrag, useDrop } from "react-dnd"
import { usePlaceItemToContainerMutation } from "../generated-graphql-types"
import { TreelistNode } from "../treelist/treelist-node"
import { DragEntity, DragType } from "../types"
import { usePlaceContainerToContainerMutation, useContainer_NodeQuery} from "../generated-graphql-types"
import { ItemNode } from "./item-node"
import Link from "next/link"

gql`
	query container_node($containerId: ID!) {
		container(containerId: $containerId) {
			id
			name
			containers {
				containers {
					id
				}
			}
			items {
				items {
					id
					name
				}
			}
		}
	}
`

export const ContainerNode = (props: {
	containerId: string
}) => {
	const [placeItemToContainer] = usePlaceItemToContainerMutation()
	const [placeToCon] = usePlaceContainerToContainerMutation()

	const { data } = useContainer_NodeQuery({
		variables: {
			containerId: props.containerId
		}
	})

	const [c, dropRef] = useDrop({
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

	const [c2, dragRef] = useDrag({
		type: DragType.CONTAINER,
		item: { type: "container", containerId: props.containerId }
	})

	if (!data) {
		return <div></div>
	}

	return (
		<div ref={dragRef}>
			<TreelistNode 
				header={
					<span ref={dropRef}>
						<Link href={`/container/${props.containerId}`}>
							{data?.container?.name}
						</Link>
					</span>
				} 
				showCaret={true}>
				{data?.container.containers.containers.map(p => (
					<ContainerNode containerId={p.id} />
				))}
				<Fragment>
					{data?.container.items.items.map(p => (
						<ItemNode itemId={p.id} name={p.name} />
					))}
				</Fragment>
			</TreelistNode>
		</div>
	)
}