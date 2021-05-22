import React, { useState } from "react"
import { FormControl } from "react-bootstrap"
import { useDebouncedState } from "../input-hooks"
import { RootNode } from "../nodes/root-node"
import { SearchResult } from "./search-result"

export const MainContent = () => {
	const [searcWord, dsearchWord, setSearchWord] = useDebouncedState("", 200)

	return (
		<div>
			<div style={{
				marginBottom: "10px"
			}}>
				<FormControl type="text" style={{
					maxWidth: "300px"
				}} value={searcWord} onChange={e => {
					setSearchWord(e.target.value)
				}} placeholder="Searchword" />
			</div>
			{!dsearchWord &&
			<RootNode />}
			{dsearchWord && <SearchResult searchword={dsearchWord} />}
		</div>
	)
}