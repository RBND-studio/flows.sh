# Surveys

**Source:** [Overview](https://flows.sh/docs/surveys/overview.md) · [Analytics](https://flows.sh/docs/surveys/analytics.md) · [Guide: create a survey](https://flows.sh/docs/guides/create-survey.md)

A survey block collects structured feedback (ratings, choice questions, freeform text) at any point in a workflow. Like tours, a survey must be nested inside a workflow; it is not a standalone entity.

## Building a survey

1. Add a **Survey** block to a workflow, connected from a Start block (or from anywhere else in a workflow).
2. Add questions with **Add question**. Shared question fields: **Title** (required), **Description** (optional), **Optional** (lets the user skip the question).
3. Choose a **Presentation** component: either a custom component from the [component library](components.md) or a built in one, most commonly [Survey Popover](basics-v2.md#survey-popover). The presentation component is shared across all languages; it cannot be configured per language, and **changing it after initial setup wipes the existing component property configuration**, requiring reconfiguration from scratch.
4. Configure the [trigger](#trigger): by default the survey starts automatically on reaching the block.
5. Reorder questions by dragging the handle on hover. The End screen question, if present, is always pinned last.
6. Publish to a staging environment, verify, then publish to production. See [workflows.md](workflows.md#testing-workflows).

## Trigger

An array of conditions, **all of which must be met**, defining when the survey appears:

- User navigates to a page
- User clicks on an element (CSS selector)
- Element is on the page (CSS selector)
- Element is not on the page (CSS selector)

## Question types

- **Freeform**: a text field. Option: **Placeholder**.
- **Rating**: **Display** (`Numbers`, `Stars`, `Emojis`), **Scale** (Numbers: 1 to 3, 1 to 5, 1 to 7, 1 to 10, or 0 to 10 for NPS; Stars/Emojis: 1 to 3 or 1 to 5), **Lower label**, **Upper label**.
- **Single choice**: **Options** (add/edit/remove/reorder), **Shuffle options**, **Other option** (adds a free text "Other" field with a customizable label). Only one option can be selected.
- **Multiple choice**: same options as single choice, but more than one can be selected.
- **Link**: **Button label**, **URL** (if left empty, the button just acknowledges without navigating anywhere), **Open in new tab**.
- **End screen**: **Button label**, optional **URL**. Only one per survey, and it is always shown last.

## Analytics

Open a survey block and go to its **Analytics** tab. Filterable by date range and environment.

Summary metrics: **Shown** (times displayed), **Responses** (users who submitted), **Completion** (percent of those shown who completed the survey).

Per question type breakdown:

- **Freeform**: response count in the UI; individual answers are only visible via CSV export.
- **Rating**: distribution chart across the scale, plus average, median, and standard deviation.
- **Single choice**: bar chart of selection counts, including "Other"; the free text entered for "Other" is only in the CSV export.
- **Multiple choice**: bar chart of selection counts (a respondent can appear in multiple bars since more than one option can be chosen); "Other" text is in the CSV export.
- **Link**: click count; a configured URL means the count reflects link follows, no URL means it reflects acknowledgements. A conversion rate (clicks divided by times shown) is shown as a summary stat.

**Export CSV** produces one row per response, with a column per question answer plus submission date and user identifier, and is the only way to see individual freeform or "Other" text answers.

## Building a survey, step by step

1. **Prerequisites**: Flows SDK installed, and the Basics V2 components package installed with the library enabled, if using Survey Popover.
2. Create a workflow, add a Start block open to everyone (no filters, for a first test), then add a **Survey** block connected to it.
3. Add a rating question (for example Display: Stars, Scale: 1 to 5, with lower/upper labels like "Not satisfied" / "Very satisfied", Title: "How would you rate your experience?").
4. Add a freeform question (for example Title: "What could we improve?", Placeholder: "Share your thoughts...", optionally marked Optional).
5. Add an End screen (for example Title: "Thank you for your feedback!", a short Description, Button label: "Done"). Every survey should end with one.
6. Select the survey block, open its **Presentation** section, and choose **Survey Popover** (or another presentation component), then configure its properties (position, size, and so on).
7. Publish to staging, verify in the app, and reset the test user's progress between attempts (**Users** → find user → **Workflows** tab → **Reset progress**, then refresh).
8. Once verified, optionally add user property filters to the Start block for real targeting, then publish to production.
9. Watch responses arrive in the survey block's **Analytics** tab.

A [manual start block](blocks.md#manual-start) can also be used to trigger a survey from a specific button click or app action instead of automatically.
