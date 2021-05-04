import React from "react"
import { Card } from "react-bootstrap"
import { Items } from "../items"

export const ItemsList = () => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>
					Tavarat
				</Card.Title>
				<Items />
			</Card.Body>
		</Card>
	)
}