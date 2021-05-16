import React, { Fragment, useState } from "react"

import { FaCaretRight, FaCaretDown } from "react-icons/fa"

export const TreelistNode = (props: {
	name: string
	showCaret: boolean
	children?: any
}) => {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<div>
				{props.showCaret &&
				<Fragment>
					{!open &&
					<FaCaretRight style={{
						cursor: "pointer"
					}} onClick={(e) => {
						setOpen(true)
					}} />}
					{open &&
					<FaCaretDown style={{
						cursor: "pointer"
					}} onClick={() => {
						setOpen(false)
					}} />}
				</Fragment>}
				{!props.showCaret &&
					<span style={{ marginLeft: "15px" }} />}
				
				{props.name}
			</div>
			{open &&
			<div style={{
				marginLeft: "25px"
			}}>
				{props.children}
			</div>}
		</div>
	)
}