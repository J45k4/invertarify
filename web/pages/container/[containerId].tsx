import React, { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ModifyContainer } from "../../src/container/modify-container"
import { ContainerPath } from "../../src/entity-path"
import { NavigationBar } from "../../src/navigationbar"
import { getPathParam } from "../../src/utility"

export default function ContainerPage() {
	const containerId = getPathParam("containerId")

	return (
		<Fragment>
			<NavigationBar />
			<Container fluid={true}>
			{containerId &&
				<div style={{
					marginBottom: "10px"
				}}>
					<ContainerPath containerId={containerId} />
				</div>}
			</Container>
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