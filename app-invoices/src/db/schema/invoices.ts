import { timestamp } from "drizzle-orm/pg-core";
import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const invoices = pgTable("invoices", {
  id: text().primaryKey(),
  customerId: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
