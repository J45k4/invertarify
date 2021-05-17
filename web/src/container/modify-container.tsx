import gql from "graphql-tag"
import React from "react"
import { Card, FormControl } from "react-bootstrap"
import { useModify_ContainerQuery, useUpdateContainerMutation } from "../generated-graphql-types"
import { useAutoUpdateValue } from "../input-hooks"

gql`
	query modify_container($containerId: ID!) {
		container(containerId: $containerId) {
			id
			name
		}
	}
`

export const ModifyContainer = (props: {
	containerId: string
}) => {
	const { data, error } = useModify_ContainerQuery({
		variables: {
			containerId: props.containerId
		}
	})

	const [updateContainer] = useUpdateContainerMutation()

	const [state, setState] = useAutoUpdateValue(data?.container, async (c) => {
		await updateContainer({
			variables: {
				input: {
					containerId: c.id,
					name: c.name
				}
			}
		})
	})

	if (error) {
		<div>{error.message}</div>
	}

	return (
		<Card>
			<Card.Body>
				<Card.Title>Container info</Card.Title>
				<label>
					Name
				</label>
				<FormControl type="text" value={state?.name} onChange={e => {
					setState({
						name: e.target.value
					})
				}} />
			</Card.Body>
		</Card>
	)
}