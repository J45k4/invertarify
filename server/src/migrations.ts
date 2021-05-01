import { Client } from "https://deno.land/x/mysql/mod.ts";

export const update1 = async (client: Client) => {
	await client.query(`
	create table migrations (
		version int primary key,
		migrated_at timestamp
	)`)

	await client.query(`
	create table items(
		id int auto_increment primary key,
		name varchar(60) null,
		metadata text null,
		barcode varchar(128) null,
		container_id int null,
		created_at timestamp not null,
		deleted_at timestamp null
	)`)

	await client.query(`
	create table containers (
		id int auto_increment primary key,
		name varchar(128) null,
		container_id int null default null,
		created_at timestamp not null,
		removed_at timestamp null default null
	)`)

	await client.query(`
	create table pictures (
		id int auto_increment primary key,
		created_at timestamp not null,
		deleted_at timestamp null default null
	)`)

	await client.query(`
	create table item_pictures (
		item_id int not null,
		picture_id int not null,
		primary key(item_id, picture_id),
		constraint fk_item foreign key(item_id) references items(id),
		constraint item_pictures_fk_picture foreign key(picture_id) references pictures(id)
	)`)

	await client.query(`
	create table container_pictures (
		container_id int not null,
		picture_id int not null,
		primary key(container_id, picture_id),
		constraint fk_container foreign key(container_id) references containers(id),
		constraint container_pictures_fk_picture foreign key(picture_id) references pictures(id)
	)`)

	// await client.query(`
	// create index container_pictures_idx ON container_pictures(id)`)

	await client.query(`
	create table events (
		id int auto_increment primary key,
		user_id int null,
		eventtime timestamp,
		item_id int null,
		container_id int null
	)`)
}

const migrations = [
	update1
]

const getDatabaseSchemaVersion = async (client: Client) => {
    try {
        const rows = await client.query("select version from migrations order by version desc");

		console.log("result", rows)

        return rows[0] ? rows[0].version : 0;
    } catch (e) {
        return 0;
    }

}

export const insertDatabaseVersion = async (client: Client, version: number) => {
    await client.query("insert into migrations(version, migrated_at) values(?, ?)",
        [version, new Date()]);
}

export const runMigrations = async (client: Client) => {
	const currentVersion = await getDatabaseSchemaVersion(client)

	console.log("Current database version is", currentVersion)

	for (const [index, migration] of migrations.entries()) {
		const version = index + 1

		if (version > currentVersion) {
			await migration(client)
			await insertDatabaseVersion(client, version)
		}
	}
}