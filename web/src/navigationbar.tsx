import Link from "next/link"
import React from "react"
import { FormControl, Navbar } from "react-bootstrap"

export const NavigationBar = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			style={{
				backgroundColor: "white",
				borderRadius: "0px",
				marginBottom: "10px",
				boxShadow:
					"0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12)"
			}}>
				<Link href="/" passHref>
					<Navbar.Brand>Invertarify</Navbar.Brand>
				</Link>
				<Navbar>

				</Navbar>		
		</Navbar>
	)
}