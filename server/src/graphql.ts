import { walk, walkSync } from "https://deno.land/std@0.95.0/fs/mod.ts";
import { join, relative } from "https://deno.land/std@0.95.0/path/mod.ts";
import { gql } from 'https://deno.land/x/graphql_tag/mod.ts'


console.log("meta.url", import.meta.url)

const metaUrl = import.meta.url

const __dirname = new URL('.', import.meta.url).pathname;

console.log("__dirname", __dirname)

console.log("cwd", Deno.cwd())

const cwd = Deno.cwd()

const scanForObjects = async (resolvers: Map<string, any>, basePath: string) => {
	console.log("scanForObjects", basePath)

	for await (const entry of Deno.readDir(basePath)) {
		console.log("e", entry)
		if (entry.isFile) {
			// const filePath = relative(__dirname, join("./resolvers", entry.name))

			const filePath = "/" + join(cwd, basePath, entry.name)

			console.log("filePath", filePath)

			const content = await import(filePath)

			console.log("content", content)

			for (const key of Object.keys(content)) {
				console.log("key", key)

				if (key === "Query" || key === "Mutation") {
					continue
				}

				const resolver = content[key]

				console.log("resolver", resolver)

				resolvers.set(key, resolver)
			}

			continue
		}

		const path = join(basePath, entry.name)

		scanForObjects(resolvers, path)
	}

	console.log("resolvers", resolvers)
}

export interface Graphqlingredients {
	resolvers: any
	typedef: string
}

export const loadGraphqlSchemaIndigriends = async (
	typedefPath: string, 
	resolverPath: string
) => { 
	const resolvers: any = {}

	let typeDefs = ""

	for (const entry of walkSync(typedefPath)) {
		console.log("entry", entry)

		if (entry.isFile) {
			const text = await Deno.readTextFile(entry.path)
			typeDefs += text
		}
	}

	const schema = gql(typeDefs) as any

	const foundResolvers = new Map<string, any>()

	await scanForObjects(foundResolvers, resolverPath)

	console.log("foundResolvers", foundResolvers)

	for (const definition of schema.definitions) {
		const name = definition.name.value

		if (name === "Mutation") {
			if (!resolvers.Mutation) {
				resolvers.Mutation = {}
			}

			for (const field of definition.fields) {
				const name = field.name.value

				console.log("name", name)

				if (!foundResolvers.has(name)) {
					continue
				}

				console.log("found it")

				resolvers.Mutation[name] = foundResolvers.get(name)

				console.log("resolvers", resolvers)
			}

			continue
		}

		if (name === "Query") {
			if (!resolvers.Query) {
				resolvers.Query = {}
			}

			for (const field of definition.fields) {
				const name = field.name.value

				if (!foundResolvers.has(name)) {
					continue
				}

				resolvers.Query[name] = foundResolvers.get(name)
			}

			continue
		}

		if (name === "Subscription") {
			if (!resolvers.Subscription) {
				resolvers.Subscription = {}
			}

			for (const field of definition.fields) {
				const name = field.name.value

				if (!foundResolvers.has(name)) {
					continue
				}

				resolvers.Subscription[name] = foundResolvers.get(name)
			}

			continue
		}

		if (!foundResolvers.has(name)) {
			continue
		}

		resolvers[name] = foundResolvers.get(name)
	}

	console.log("resolvers after all", resolvers)

	return {
		resolvers: resolvers,
		typeDefs: typeDefs
	}
}

const res = await loadGraphqlSchemaIndigriends("./gql", "./src/resolvers")

console.log(res)