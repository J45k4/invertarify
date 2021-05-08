// import { Client } from "https://deno.land/x/mysql/mod.ts";
// // import { config } from "https://deno.land/x/dotenv/mod.ts";
// import { runMigrations } from "./migrations.ts"
import { loadGraphqlSchemaIndigriends } from "./graphql.ts"
import {
	graphqlHttp,
	makeExecutableSchema,
  } from "https://deno.land/x/deno_graphql@v0.2.2/oak.ts";
// import { GraphQLHTTP } from 'https://deno.land/x/gql/mod.ts'
import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

// console.log("Before config")

// // const {
// // 	DB_HOST,
// // 	DB_USER,
// // 	DB_NAME,
// // 	DB_PASS
// // } = config()

// const DB_HOST = Deno.env.get("DB_HOST")
// const DB_USER = Deno.env.get("DB_USER")
// const DB_NAME = Deno.env.get("DB_NAME")
// const DB_PASS = Deno.env.get("DB_PASS")

// console.log(DB_HOST, DB_NAME, DB_PASS, DB_USER)

// const client = await new Client().connect({
//     hostname: DB_HOST,
//     username: DB_USER,
//     db: DB_NAME,
//     password: DB_PASS,
//   });

// console.log("running migrations")

// await runMigrations(client)

// console.log("Run migrations")

// import { opine, Request, json } from "https://deno.land/x/opine@1.3.3/mod.ts"
// import { opineCors } from "https://deno.land/x/cors/mod.ts";

const { resolvers, typeDefs } = await loadGraphqlSchemaIndigriends("./gql", "./src/resolvers")

// const schema = makeExecutableSchema({ resolvers, typeDefs })

const app = new Application();

// app.use("/graphql", graphqlHttp({
// 	schema: schema
// }))


// const router = new Router();

// const app = opine()

// app.use(json())

// app.use(opineCors({
//     origin: "*"
// }))

// app.use("/graphql", async (req) => {
// 	await GraphQLHTTP({
// 		schema: schema,
// 		graphiql: true
// 	})(req)
// })



// app.get("/api/search_items", async (req, res) => {
//     const rows = await client.query("select * from items")

//     res.json(rows)
// })

// app.post("/api/item", async (req, res) => {
//     const body = req.body

//     console.log(body)

//     await client.query("insert into items(name, created_at) values(?, ?)", [body.name, new Date()])

//     res.json({
//         result: "ok"
//     })
// })

// app.get("/api/item/:itemId", ($eq, res) => {

// })

// app.listen(3090, () => {
// 	console.log("Listening on port 3090")
// })