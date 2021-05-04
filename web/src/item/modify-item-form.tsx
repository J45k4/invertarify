import React from "react"
import { Card, Form } from "react-bootstrap"

export const ModifyItemForm = (props: {
	itemId: string
}) => {

	return (
		<Card>
			<Card.Body>
				<Card.Title>Item</Card.Title>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control type="" />
				</Form.Group>
				<Form.Group>
					<Form.Label>Metadata</Form.Label>
					<Form.Control as="textarea" type="textarea" />
				</Form.Group>
			</Card.Body>
		</Card>
	)
}