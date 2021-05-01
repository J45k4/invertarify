import { Client } from "https://deno.land/x/mysql/mod.ts";

export class Item {
    public id: string
    public name: string



    static fromDbRow(row: any) {
        const item = new Item()

        item.name = row.name

        return item
    }
}