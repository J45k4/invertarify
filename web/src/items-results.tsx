import React, { Fragment, useEffect, useState } from "react"
import { searchItems } from "./api"
import Link from "next/link"
import gql from "graphql-tag"

import { useItems_ResultsQuery } from "./gnerated-graphql-types"

gql`
	query items_results($input: Items!) {
		items(input: $input) {
			items {
				id
				name
			}
		}
	}
`

export const ItemsResults = () => {
	const { data, error } = useItems_ResultsQuery({
		variables: {
			input: {}
		}
	})
	
	if (error) {
		return <Fragment>{error.message}</Fragment>
	}

	return <div>
		{data?.items.items.map(p => (
			<div>
				<Link href={`/item/${p.id}`}>
					{p.name}
				</Link>		
			</div>
		))}
	</div>
}