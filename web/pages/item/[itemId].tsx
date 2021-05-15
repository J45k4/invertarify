import React, { Fragment } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { ItemImages } from "../../src/item/item-imgaes"
import { ModifyItemForm } from "../../src/item/modify-item-form"
import { NavigationBar } from "../../src/navigationbar"
import { getPathParam } from "../../src/utility"

export default function ItemPage() {
	const itemId = getPathParam("itemId")

    return <Fragment>
		<NavigationBar />
        <Container>
			<Row>
				<Col>
					{itemId && 
					<ModifyItemForm itemId={itemId} />}
				</Col>
				<Col>
					<ItemImages />
				</Col>
			</Row>
			
		</Container>
    </Fragment>
}