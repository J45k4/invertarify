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
					deletedAt
				}
			}
			items {
				items {
					id
					name
					deletedAt
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

	const { data, refetch } = useContainer_NodeQuery({
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
					},
					update: (cache, {data: {placeItemToContainer}}) => {
						if (placeItemToContainer.previousContainer) {
							cache.modify({
								id: cache.identify(placeItemToContainer.previousContainer),
								fields: {
									items(conn, {readField}) {
										console.log(conn)

										return {
											items: conn.items.filter(p => readField("id", p) != entity.itemId)
										}
									}
								}
							})

							return
						}

						cache.modify({
							fields: {
								itemsWithoutContainer(items, {readField}) {
									return items.filter(p => readField("id", p) != entity.itemId)
								}
							}
						})
					}
				}).then(() => {
					refetch()
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
						},
					},
					update: (cache, {data: {placeContainerToContainer}}) => {
						if (placeContainerToContainer.previousContainer) {
							cache.modify({
								id: cache.identify(placeContainerToContainer.previousContainer),
								fields: {
									containers(conn, {readField}) {
										return {
											containers: conn.containers.filter(p => readField("id", p) != entity.containerId)
										}
									}
								}
							})

							return
						}

						cache.modify({
							fields: {
								rootContainers(containers, {readField}) {
									return containers.filter(p => readField("id", p) != entity.containerId)
								}
							}
						})
					}
				}).then(() => {
					refetch()
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
		<div>
			<TreelistNode 
				header={
					<span ref={dragRef}>
						<span ref={dropRef}>
							<Link href={`/container/${props.containerId}`}>
								{data?.container?.name}
							</Link>
						</span>
					</span>	
				} 
				showCaret={true}>
				{data?.container.containers.containers.filter(p => !p.deletedAt).map(p => (
					<ContainerNode key={p.id} containerId={p.id} />
				))}
				<Fragment>
					{data?.container.items.items.filter(p => !p.deletedAt).map(p => (
						<ItemNode key={p.id} itemId={p.id} name={p.name} />
					))}
				</Fragment>
			</TreelistNode>
		</div>
	)
}