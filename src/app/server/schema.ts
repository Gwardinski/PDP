import { timestamp, text, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const LinksTable = pgTable("links", {
  id: serial("id").primaryKey().notNull(),
  link: text("link").notNull(),
  short: varchar("short", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow(),
});
