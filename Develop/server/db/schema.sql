-- DROP DATABASE IF EXISTS kanban_db;
-- CREATE DATABASE kanban_db;

-- Create the "users" table
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create the "tickets" table
CREATE TABLE IF NOT EXISTS "tickets" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(255) NOT NULL,
  "description" VARCHAR(255) NOT NULL,
  "assignedUserId" INTEGER,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_assigned_user
    FOREIGN KEY ("assignedUserId")
    REFERENCES "users" ("id")
    ON DELETE SET NULL
    ON UPDATE CASCADE
);