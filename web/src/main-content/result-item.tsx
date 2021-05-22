import Link from "next/link"
import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { converPathParts, EntityPath } from "../entity-path"

export const ResultItem = (props: {
	itemId: string
	name: string
	parts: {
		name: string
		href: string
	}[]
}) => {
	return (
		<div style={{
			marginBottom: "15px"
		}}>
			<div>
				<EntityPath parts={props.parts} />
			</div>
			<Link href={`/item/${props.itemId}`}>
				{props.name}
			</Link>
		</div>
	)
}