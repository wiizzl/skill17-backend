import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(80);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
