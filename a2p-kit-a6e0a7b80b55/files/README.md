# The A2P Approval Agent kit (a2p-kit 1.0.1, sources last verified 2026-10-28)

An AI agent you run in your own Claude or ChatGPT. You give it your business details; it screens eligibility, picks the brand path, audits your website, fills the carrier-published templates (privacy clause, terms block, consent text, HELP/STOP replies), writes every HighLevel Trust Center answer and two sample messages, and hands you an Ask AI prompt. **You click Submit in HighLevel; nothing is submitted for you, and nobody can promise an approval or a review time.** Registry compliance information, not legal advice.

> **Protect your private data.**
> - **Black out (redact) the SSN and the EIN digits on any document before you upload it.** The agent only needs to know an EIN exists, plus the legal name and address exactly as printed.
> - **Prefer typing the few fields from `INTAKE-FORM.md` over uploading whole documents.**
> - **Turn off chat history / model training in your AI's settings first** (ChatGPT: Settings > Data Controls, or a Temporary Chat; Claude: Settings > Privacy).

## What is in the kit
| File | What it is |
|---|---|
| `SYSTEM-PROMPT.md` | the agent's instructions + the install steps (Claude Project, Custom GPT, plain paste) |
| `knowledge/requirements.md` | every current A2P rule, with its source link and date |
| `knowledge/hl-flow.md` | the HighLevel Trust Center screens, field by field (Chat Widget Setup first) |
| `knowledge/templates.md` | the carrier-published fill-in wording + where each block comes from |
| `knowledge/rejection-playbook.md` | every HighLevel rejection code and its fix |
| `knowledge/fees.md` | the fee table, every row dated and sourced |
| `knowledge/faq.md` | the 25 questions people ask most, answered from official sources |
| `knowledge/post-registration-checklist.md` | staying compliant after you can text |
| `INTAKE-FORM.md` | the one-page questionnaire, if you prefer a form |
| `OUTPUT-SPEC.md` | the exact structure of the package (and its JSON block) |

## Install
See the end of `SYSTEM-PROMPT.md` ("HOW TO LOAD THIS AGENT"). Works on Mac and Windows in the browser; nothing to install.

## Pages
The package's JSON block can be turned into ready pages (opt-in page, privacy, terms, SMS terms) by the Smarter Flow page builder; the primary fix target is always your REAL website's existing privacy and terms pages.
