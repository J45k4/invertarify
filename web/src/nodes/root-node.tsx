import gql from "graphql-tag"
import Link from "next/link"
import React from "react"
import { Card } from "react-bootstrap"
import { useContainer_TreeQuery } from "../generated-graphql-types"
import { TreelistNode } from "../treelist/treelist-node"
import { ContainerNode } from "./container-node"
import { ItemNode } from "./item-node"

gql`
	query container_tree {
		rootContainers {
			id
			deletedAt
		}
		itemsWithoutContainer {
			id
			name
			deletedAt
		}
	}
`

export const RootNode = () => {
	const {data, error} = useContainer_TreeQuery()

	if (error) {
		return <div>
			{error.message}
		</div>
	}

	return (
		<Card>
			<Card.Body>
				{data?.rootContainers.filter(p => !p.deletedAt).map(p => (
					<ContainerNode containerId={p.id} />
				))}
				{data?.itemsWithoutContainer.filter(p => !p.deletedAt).map(p => (
					<div key={p.id}>
						<ItemNode itemId={p.id} name={p.name} />
					</div>
				))}
			</Card.Body>
		</Card>
	)
}