import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import { NavigationBar } from "../src/navigationbar"
import { SearchResult } from "../src/main-content/search-result"

export default function SearchResults() {
	return (
		<Fragment>
			<NavigationBar />
			<Container fluid={true}>
				<SearchResult />
			</Container>
		</Fragment>
	)
}