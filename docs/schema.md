# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
side_a      | text      | not null
side_b      | text      | not null
mastery     | integer   | default 1
deck_id     | integer   | not null, foreign key (references decks), indexed

## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      |
is_private  | boolean   | default true
category    | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [user_id]
user_id     | integer   | not null, foreign key (references users), indexed
