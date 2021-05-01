import React, { useState } from "react"
import { Button, FormControl, Modal } from "react-bootstrap"
import { createItem } from "./api"

export const CreateItemModal = (props: {
    show: boolean
    onSuccess: () => void
    onCancel: () => void
}) => {
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
						name: name
					})
				}}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    )
}