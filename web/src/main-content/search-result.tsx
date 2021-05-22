import gql from "graphql-tag"
import React from "react"
import { ResultItem } from "./result-item"

import { useSerarch_ResultsQuery} from "../generated-graphql-types"
import { converPathParts } from "../entity-path"

gql`
	query serarch_results($input: Items!) {
		items(input: $input) {
			items {
				id
				name
				pathParts {
					id
					name
				}
			}
		}
	}
`

export const SearchResult = (props: {
	searchword?: string
}) => {
	const {data} = useSerarch_ResultsQuery({
		variables: {
			input: {
				searchWord: props.searchword
			}
		}
	})
	 
	return (
		<div>
			{data?.items.items.map(p => (
				<ResultItem 
					key={p.id} 
					itemId={p.id} 
					name={p.name} 
					parts={converPathParts(p.pathParts)} />
			))}
		</div>
	)
}