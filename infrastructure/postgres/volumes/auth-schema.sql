
create schema if not exists auth;
CREATE TABLE "auth"."users" (
    "instance_id" uuid,
    "id" uuid NOT NULL,
    "aud" varchar(255),
    "role" varchar(255),
    "email" varchar(255),
    "encrypted_password" varchar(255),
    "email_confirmed_at" timestamptz,
    "invited_at" timestamptz,
    "confirmation_token" varchar(255),
    "confirmation_sent_at" timestamptz,
    "recovery_token" varchar(255),
    "recovery_sent_at" timestamptz,
    "email_change_token_new" varchar(255),
    "email_change" varchar(255),
    "email_change_sent_at" timestamptz,
    "last_sign_in_at" timestamptz,
    "raw_app_meta_data" jsonb,
    "raw_user_meta_data" jsonb,
    "is_super_admin" bool,
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "phone" text DEFAULT NULL::character varying,
    "phone_confirmed_at" timestamptz,
    "phone_change" text DEFAULT ''::character varying,
    "phone_change_token" varchar(255) DEFAULT ''::character varying,
    "phone_change_sent_at" timestamptz,
    "confirmed_at" timestamptz,
    "email_change_token_current" varchar(255) DEFAULT ''::character varying,
    "email_change_confirm_status" int2 DEFAULT 0 CHECK ((email_change_confirm_status >= 0) AND (email_change_confirm_status <= 2)),
    "banned_until" timestamptz,
    "reauthentication_token" varchar(255) DEFAULT ''::character varying,
    "reauthentication_sent_at" timestamptz,
    "is_sso_user" bool NOT NULL DEFAULT false,
    "deleted_at" timestamptz,
    "is_anonymous" bool NOT NULL DEFAULT false,
    PRIMARY KEY ("id")
);