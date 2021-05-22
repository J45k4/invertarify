import React, { useCallback } from "react"
import { Card } from "react-bootstrap"
import { useDropzone } from "react-dropzone"
import { useAddPictureForItemMutation } from "../generated-graphql-types"

export const ItemImages = (props: {
	itemId: string
}) => {
	const [addPicture] = useAddPictureForItemMutation()

	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		console.log(acceptedFiles)

		const f = acceptedFiles[0]

		addPicture({
			variables: {
				input: {
					itemId: props.itemId,
					picture: f
				}
			}
		})
	}, [])

	const {getRootProps, getInputProps, isDragActive} = useDropzone({
		onDrop: onDrop
	})

	return (
		<div {...getRootProps()}>
			<Card>
				<Card.Body>
					<Card.Title>
						Images
					</Card.Title>
					{/* <input type="file" onChange={e => {
						console.log(e.target.files)
					}} /> */}
					<input {...getInputProps()} />
					{isDragActive && <div>
						Drop here	
					</div>}
				</Card.Body>
			</Card>
		</div>
	)
}