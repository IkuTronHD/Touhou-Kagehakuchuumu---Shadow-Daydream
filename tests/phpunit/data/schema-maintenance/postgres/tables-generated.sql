-- This file is automatically generated using maintenance/generateSchemaSql.php.
-- Source: tests/phpunit/data/schema-maintenance/tables.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
CREATE TABLE actor (
  actor_id BIGINT NOT NULL,
  actor_user INT NOT NULL,
  actor_name VARCHAR(255) NOT NULL,
  PRIMARY KEY(actor_id)
);

CREATE UNIQUE INDEX actor_user ON actor (actor_user);

CREATE UNIQUE INDEX actor_name ON actor (actor_name);