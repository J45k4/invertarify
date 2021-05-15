
-- +migrate Up

-- +migrate StatementBegin
create table items(
	id int auto_increment primary key,
	name varchar(60) null,
	metadata text null,
	barcode varchar(128) null,
	container_id int null,
	created_at timestamp not null,
	deleted_at timestamp null
);
-- +migrate StatementEnd

-- +migrate StatementBegin
create table containers (
	id int auto_increment primary key,
	name varchar(128) null,
	container_id int null default null,
	created_at timestamp not null,
	removed_at timestamp null default null
);
-- +migrate StatementEnd

-- +migrate StatementBegin
create table pictures (
	id int auto_increment primary key,
	created_at timestamp not null,
	deleted_at timestamp null default null
)
-- +migrate StatementEnd

-- +migrate StatementBegin
create table item_pictures (
	item_id int not null,
	picture_id int not null,
	primary key(item_id, picture_id),
	constraint fk_item foreign key(item_id) references items(id),
	constraint item_pictures_fk_picture foreign key(picture_id) references pictures(id)
);
-- +migrate StatementEnd

-- +migrate StatementBegin
create table container_pictures (
	container_id int not null,
	picture_id int not null,
	primary key(container_id, picture_id),
	constraint fk_container foreign key(container_id) references containers(id),
	constraint container_pictures_fk_picture foreign key(picture_id) references pictures(id)
);
-- +migrate StatementEnd

-- +migrate StatementBegin
create table events (
	id int auto_increment primary key,
	user_id int null,
	eventtime timestamp,
	item_id int null,
	container_id int null
);
-- +migrate StatementEnd