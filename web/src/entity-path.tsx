import gql from "graphql-tag"
import Link from "next/link"
import React, { Fragment } from "react"
import { IoIosArrowForward } from "react-icons/io"

import { useItem_PathQuery, useContainer_PathQuery, PathPart } from "./generated-graphql-types"

gql`
	query item_path($itemId: ID!) {
		item(itemId: $itemId) {
			id
			pathParts {
				id
				name
			}
		}
	}

	query container_path($containerId: ID!) {
		container(containerId: $containerId) {
			id
			pathParts {
				id
				name
			}
		}
	}
`

export const EntityPath = (props: {
	parts: {
		name: string
		href: string
	}[]
}) => {
	return (
		<Fragment>
			{props.parts.map((p, i) => (
				<Fragment key={p.href}>
					<Link href={p.href}>
						{p.name}
					</Link>
					{i < props.parts.length - 1 &&
					<IoIosArrowForward />}
				</Fragment>
			))}
		</Fragment>
	)
}

export const ItemPath = (props: {
	itemId: string
}) => {
	const { data } = useItem_PathQuery({
		variables: {
			itemId: props.itemId
		}
	})

	return (
		<EntityPath parts={data?.item.pathParts.map(p => {
			const href = `/container/${p.id}`

			return {
				href: href,
				name: p.name,
			}
		}) || []} /> 
	)
}

export const ContainerPath = (props: {
	containerId: string
}) => {
	const { data } = useContainer_PathQuery({
		variables: {
			containerId: props.containerId
		}
	})

	return (
		<EntityPath parts={data?.container.pathParts.map(p => {
			const href = `/container/${p.id}`

			return {
				href: href,
				name: p.name,
			}
		}) || []} /> 
	)
}