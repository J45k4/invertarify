import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const {
	DB_HOST,
	DB_USER,
	DB_NAME,
	DB_PASS
} = config()

const client = await new Client().connect({
    hostname: DB_HOST,
    username: DB_USER,
    db: DB_NAME,
    password: DB_PASS,
  });

// client.query(`
// create table items (
//     id int primary key auto_increment,
//     name varchar(60)
// )`)

import { opine, Request, json } from "https://deno.land/x/opine@1.3.3/mod.ts"
import { opineCors } from "https://deno.land/x/cors/mod.ts";

const app = opine()

app.use(json())

app.use(opineCors({
    origin: "*"
}))

app.get("/search_items", async (req, res) => {
    const rows = await client.query("select * from items")

    res.json(rows)
})

app.post("/item", async (req, res) => {
    const body = req.body

    console.log(body)

    await client.query("insert into items(name) values(?)", [body.name])

    res.json({
        result: "ok"
    })
})

app.get("/item/:itemId", ($eq, res) => {

})

app.listen(3090, () => {
	console.log("Listening on port 3090")
})