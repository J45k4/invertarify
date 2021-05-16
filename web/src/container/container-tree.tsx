import gql from "graphql-tag"
import Link from "next/link"
import React from "react"
import { Card } from "react-bootstrap"
import { useContainer_TreeQuery } from "../generated-graphql-types"
import { TreelistNode } from "../treelist/treelist-node"
import { ContainerTreeContainer } from "./container-tree-container"
import { ContainerTreeItem } from "./container-tree-item"

gql`
	query container_tree {
		rootContainers {
			id
			name
			containers {
				containers {
					id
					name
				}
			}
			items {
				items {
					id
					name
				}
			}
		}
		itemsWithoutContainer {
			id
			name
		}
	}
`

export const ContainerTree = () => {
	const {data, error} = useContainer_TreeQuery()

	if (error) {
		return <div>
			{error.message}
		</div>
	}

	return (
		<Card>
			<Card.Body>
				{data?.rootContainers.map(p => (
					<ContainerTreeContainer
						name={p.name}
						containerId={p.id}
						containers={p.containers.containers}
						items={p.items.items} />
				))}
				{data?.itemsWithoutContainer.map(p => (
					<div key={p.id}>
						<ContainerTreeItem itemId={p.id} name={p.name} />
					</div>
				))}
			</Card.Body>
		</Card>
	)
}