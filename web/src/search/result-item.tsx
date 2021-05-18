import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { EntityPath } from "../entity-path"

export const ResultItem = () => {
	return (
		<div>
			<EntityPath parts={[
				{
					href: `/container/${1}`,
					name: "laatikko"
				},
				{
					href: `/container/${2}`,
					name: "laatikko"
				},
				{
					href: `/container/${3}`,
					name: "laatikko"
				}
			]} />
		</div>
	)
}