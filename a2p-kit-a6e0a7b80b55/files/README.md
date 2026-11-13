# The A2P Approval Agent kit (a2p-kit 1.3.0, sources last verified 2026-10-28)

**Start with `START-HERE.md`.** The fastest way: attach `A2P-AGENT-ONE-FILE.md` to a new chat in Claude, ChatGPT or Gemini and paste the one line from START-HERE.md.

An AI agent you run in your own AI. It tells you what it needs, then walks you through one item at a time: what you text, your legal name and EIN, contact details, website, privacy policy, terms, opt-in and your HighLevel Business Profile name. Have it? Give it the link and it checks it against the carrier rules and lists the exact fixes, with the HighLevel rejection code each gap would trigger (several links at once are checked together in one table). Do not have it? It creates it (HighLevel's own sample policy pages filled with your details, the carrier-published clauses, the opt-in text, the website page text). Then it writes your use case, description, two sample messages, every Trust Center answer and an Ask AI prompt. **You click Submit in HighLevel; nothing is submitted for you, and nobody can promise an approval or a review time.** Registry compliance information, not legal advice.

> **Protect your private data.**
> - **Black out (redact) the SSN and the EIN digits on any document before you upload it.** The agent only needs to know an EIN exists, plus the legal name and address exactly as printed.
> - **Prefer typing your details over uploading whole documents.**
> - **Turn off chat history / model training in your AI's settings first** (ChatGPT: Settings > Data Controls, or a Temporary Chat; Claude: Settings > Privacy).

## What is in the kit
| File | What it is |
|---|---|
| `START-HERE.md` | how to start in any AI, in about a minute |
| `A2P-AGENT-ONE-FILE.md` | the whole agent in one file (instructions + every knowledge file): attach it to any chat |
| `SYSTEM-PROMPT.md` | the agent's instructions + the install steps (one file, Claude Code, Claude Project, Custom GPT, Gemini Gem) |
| `knowledge/requirements.md` | every current A2P rule, with its source link and date |
| `knowledge/hl-flow.md` | the HighLevel Trust Center screens, field by field (Chat Widget Setup first) |
| `knowledge/templates.md` | the carrier-published fill-in wording + where each block comes from |
| `knowledge/rejection-playbook.md` | every HighLevel rejection code and its fix |
| `knowledge/fees.md` | the fee table, every row dated and sourced |
| `knowledge/faq.md` | the questions people ask most, answered from official sources (incl. subdomains and the typical path) |
| `knowledge/post-registration-checklist.md` | staying compliant after you can text |
| `INTAKE-FORM.md` | an optional one-page questionnaire |
| `OUTPUT-SPEC.md` | the exact structure of the package (and its JSON block) |

## Install
See `START-HERE.md`. Works on Mac and Windows in the browser, or in Claude Code; nothing to install.

## Pages
The package's JSON block can be turned into ready pages by the Smarter Flow page builder; the primary fix target is always your REAL website's existing privacy and terms pages.
