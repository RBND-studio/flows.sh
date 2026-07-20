# Personalization and localization

**Source:** [Personalization](https://flows.sh/docs/personalization.md) · [Localization](https://flows.sh/docs/localization.md)

## Personalization

Inserts a user property's value directly into workflow content, using the current user's already available [user properties](users.md#user-properties).

Syntax: `{{ property_name }}`, for example:

```text
Welcome, {{ first_name }}
```

A fallback for when the property is missing is added with a pipe:

```text
Hi, {{ first_name | there }}
```

If `first_name` is not available for that user, this renders as `Hi, there`.

**Not every property field supports this.** It only works on properties that accept a text input, specifically:

- [String](block-properties.md#string)
- [Select](block-properties.md#select)
- [Action](block-properties.md#action) label and URL
- Tour trigger (see [tours.md](tours.md#tour-trigger))
- Tour wait step (see [tours.md](tours.md#wait-step))
- Survey trigger (see [surveys.md](surveys.md#trigger))
- Survey questions (see [surveys.md](surveys.md#question-types))
- [Wait](block-properties.md#wait)
- [Page targeting](block-properties.md#page-targeting)

## Localization

Adapts workflow content to different languages, built around **language groups**: a set of similar languages sharing one translation (for example `en-US` and `en-GB`, or `fr-FR` and `fr-CA`). Every organization starts with a default language group, used as the fallback whenever a user's language does not match any custom group. Flows matches a user to a group based on the language reported by the SDK, using either a bare language code (`en`, `fr`) or a full tag (`en-US`, `fr-FR`).

**Localization is hidden in the dashboard until a second language group exists.** Enable it from **Organization settings** → **Localization** → **New language group**.

### Enabling it in the SDK

Configure the `language` option at SDK init, with three possible values:

- `automatic`: detects the user's language from the browser/device.
- A manual language code, for example `en`, `en-US`, `fr` (supports RFC 5646 / BCP 47 tags).
- `disabled` (default): localization is off; workflows are served in the default language.

See [sdk-react.md](sdk-react.md) or [sdk-javascript.md](sdk-javascript.md) for the exact prop/option.

### Translating a workflow

1. Open the workflow editor and select a block.
2. Switch language group using the language switcher below the block's name in the right sidebar. A green dot means a translation already exists for that language; a grey dot means it does not.
3. Edit the content or properties for the selected language, then click **Create translation** if none exists yet.
4. Publish once translations are complete.

**Remove a translation**: select the block, switch to the language to remove, click the trash icon next to the language name, and confirm. The block then falls back to the organization's default language for that language group.

**Supported blocks and properties**: only **Component blocks** and **Tour blocks**, and only their `string`, `number`, `boolean`, and `select` properties. Unsupported blocks or properties show a globe icon in the editor and stay identical across every language group.

**Fallback behavior**: when a user enters a block, Flows looks for a translation matching their language group; if none exists, it falls back to the workflow's default language. Make sure every Component and Tour block used in a localized workflow actually has a translation, or it will silently fall back.

### RTL languages

Flows does not automatically apply right to left styling for languages like Arabic or Hebrew. Handle this in custom components yourself, for example by passing a boolean prop indicating RTL and applying styles conditionally.

An alternative to language groups for languages that diverge a lot is building entirely separate workflows per language. This gives full control over content and layout per language, at the cost of extra upkeep to keep the workflows synchronized as they evolve.
