import gql from "graphql-tag"
import React, { useState } from "react"
import { Button, FormControl, Modal } from "react-bootstrap"
import { useCreateItemMutation } from "./generated-graphql-types"

gql`
	mutation createItem($input: CreateItem!) {
		createItem(input: $input) {
			item {
				id
				name
			}
		}
	}
`

export const CreateItemModal = (props: {
    show: boolean
    onSuccess: () => void
    onCancel: () => void
}) => {
	const [createItem] = useCreateItemMutation()

	const [name, setName] = useState("")

    return (
        <Modal show={props.show} onHide={props.onCancel}>
            <Modal.Header>
                Create item
            </Modal.Header>
            <Modal.Body>
                <label>
                    Name
                </label>
                <FormControl 
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value)
					}} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onCancel}>
                    Cancel
                </Button>
                <Button onClick={() => {
					createItem({
						variables: {
							input: {
								name: name
							}
						}
						
					}).then(() => {
						props.onSuccess()
					})
				}}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    )
}