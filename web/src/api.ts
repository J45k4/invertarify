
const url = "http://localhost:3090"

const postJson = async (path: string, body: any) => {
	return fetch(`${url}${path}`, {
		method: "post",
		headers: {
			["content-type"]: "application/json"
		},
		body: JSON.stringify(body)
	}).then(r => r.json())
}

const getJson = async (path: string) => {
	return fetch(`${url}${path}`, {
		headers: {
		}
	}).then(r => r.json())
}

export const createItem = (args: {
	name: string
}) => {
	return postJson("/item", {
		name: args.name
	})
}

export const searchItems = () => {
	const u = `/search_items`

	return getJson(u)
}