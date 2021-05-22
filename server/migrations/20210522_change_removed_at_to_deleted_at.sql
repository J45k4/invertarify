-- +migrate Up

-- +migrate StatementBegin
alter table containers rename column removed_at to deleted_at;
-- +migrate StatementEnd