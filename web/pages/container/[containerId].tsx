import React, { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ModifyContainer } from "../../src/container/modify-container"
import { NavigationBar } from "../../src/navigationbar"
import { getPathParam } from "../../src/utility"

export default function ContainerPage() {
	const containerId = getPathParam("containerId")

	return (
		<Fragment>
			<NavigationBar />
			{containerId &&
			<Container>
				<Row>
					<Col>
						<ModifyContainer containerId={containerId} />
					</Col>
				</Row>
			</Container>}
		</Fragment>
	)
}