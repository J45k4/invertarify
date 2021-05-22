import { setContext } from "@apollo/client/link/context"
import React, { useState } from "react"
import { Button, FormControl, Modal } from "react-bootstrap"
import { useCreateContainerMutation } from "../generated-graphql-types"

export const CreateContainerForm = (props: {
	show: boolean
	onHide: () => void
}) => {
	const [createContainer] = useCreateContainerMutation()

	const [name, setName] = useState("")

	return (
		<Modal show={props.show} onHide={props.onHide}>
			<Modal.Header>
				Create container
			</Modal.Header>
			<Modal.Body>
				<FormControl type="text" value={name} onChange={e => {
					setName(e.target.value)
				}} />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>
					Cancel
				</Button>
				<Button onClick={() => {
					createContainer({
						variables: {
							input: {
								name: name
							}
						},
						update: (cache, {data: {createContainer: {container}}}) => {
							cache.modify({
								fields: {
									rootContainers(containers) {
										return [...containers, container]
									}
								}
							})
						}
					}).then(() => {
						setName("")
						props.onHide()
					})
				}}>
					Create
				</Button>
			</Modal.Footer>
		</Modal>
	)
}