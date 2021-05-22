import gql from "graphql-tag"
import { useRouter } from "next/router"
import React, { Fragment, useEffect, useState } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { useModify_Item_FormQuery, useUpdateItemMutation, useArchiveItemMutation } from "../generated-graphql-types"
import { useAutoUpdateValue } from "../input-hooks"

gql`
	query modify_item_form($itemId: ID!) {
		item(itemId: $itemId) {
			id
			name
			metadata
		}
	}
`

export const ModifyItemForm = (props: {
	itemId: string
}) => {
	const { error, data } = useModify_Item_FormQuery({
		variables: {
			itemId: props.itemId
		}
	})

	const [archiveItem] = useArchiveItemMutation()

	const [updateItem] = useUpdateItemMutation()

	const router = useRouter()

	const [state, setState] = useAutoUpdateValue(data?.item, async (s) => {
		await updateItem({
			variables: {
				input: {
					itemId: props.itemId,
					name: s.name,
					metadata: s.metadata
				}
			}
		})
	})

	if (error) {
		return <Fragment>{error.message}</Fragment>
	}

	return (
		<Card>
			<Card.Body>
				<Card.Title>Item</Card.Title>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control 
						type="text" 
						value={state?.name} onChange={e => { 
							setState({
								name: e.target.value
							})
				 		}} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Metadata</Form.Label>
					<Form.Control 
						as="textarea" 
						type="textarea"
						value={state?.metadata}
						onChange={e => {
							setState({
								metadata: e.target.value
							})
						}} />
				</Form.Group>
				<Button variant="danger" onClick={() => {
					archiveItem({
						variables: {
							input: {
								itemId: props.itemId
							}
						}
					}).then(() => {
						router.push("/")
					})
				}}>
					Remove
				</Button>
			</Card.Body>
		</Card>
	)
}