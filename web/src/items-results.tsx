import React, { useEffect, useState } from "react"
import { searchItems } from "./api"
import Link from "next/link"

export const ItemsResults = () => {
	const [ items, setItems ] = useState([])

	useEffect(() => {
		searchItems().then(r => {
			setItems(r)
		})
	}, [])
	

	return <div>
		{items.map(p => (
			<div>
				<Link href={`/item/${p.id}`}>
					{p.name}
				</Link>		
			</div>
		))}
	</div>
}