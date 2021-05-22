import React, { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ItemPath } from "../../src/entity-path"
import { ItemImages } from "../../src/item/item-imgaes"
import { ModifyItemForm } from "../../src/item/modify-item-form"
import { NavigationBar } from "../../src/navigationbar"
import { getPathParam } from "../../src/utility"

export default function ItemPage() {
	const itemId = getPathParam("itemId")

    return <Fragment>
		<NavigationBar />
		<Container fluid={true}>
			{itemId &&
				<div style={{
					marginBottom: "10px"
				}}>
					<ItemPath itemId={itemId} />
				</div>}
		</Container>
        <Container>
			{itemId && 
			<Row>
				<Col>
					<ModifyItemForm itemId={itemId} />
				</Col>
				<Col>
					<ItemImages itemId={itemId} />
				</Col>
			</Row>}
		</Container>
    </Fragment>
}