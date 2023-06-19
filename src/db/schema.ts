import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const groups = pgTable('groups', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
});

export const groupsRelations = relations(groups, ({ many }) => ({
  items: many(items),
}));

export const items = pgTable('items', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  groupId: integer('group_id').notNull(),
});

export const itemsRelations = relations(items, ({ one }) => ({
  group: one(groups, { fields: [items.groupId], references: [groups.id] }),
}));
