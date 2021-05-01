import React, { useEffect, useState } from "react"
import { searchItems } from "./api"

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
				{p.name}
			</div>
		))}
	</div>
}