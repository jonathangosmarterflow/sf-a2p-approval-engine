# START HERE: the A2P Approval Agent (a2p-kit 1.3.0)

An AI agent that walks you through HighLevel's A2P 10DLC registration. It tells you what it needs, then asks one thing at a time: if you have it, you give it the link and it checks it; if you do not, it creates it for you. Have several links (website, privacy policy, terms, opt-in page)? Paste them together: after the first two questions it checks them all in one table, and names the HighLevel rejection code each gap would trigger. You click Submit in HighLevel yourself.

Pick the AI you use. Each way takes about a minute.

## Way 1: any chat AI (Claude, ChatGPT, Gemini, or another)
1. Start a new chat.
2. Attach ONLY one file from this folder: **`A2P-AGENT-ONE-FILE.md`** (the paperclip or + button). Do not drag in the whole folder.
3. Paste this line and send it:

> You are the A2P Approval Agent. Follow the attached A2P-AGENT-ONE-FILE.md exactly, starting with its opening message. Start my A2P package.

If your AI just summarizes the file, paste the line again.

Your AI cannot take files? Open `A2P-AGENT-ONE-FILE.md`, copy all of it, paste it into the chat, then send the same line.

## Way 2: Claude Code
Open this folder (`a2p-approval-agent-kit`) in Claude Code and type `@A2P-AGENT-ONE-FILE.md` (pick the file when Claude Code suggests it), a space, then the same line as Way 1:

> @A2P-AGENT-ONE-FILE.md You are the A2P Approval Agent. Follow the attached A2P-AGENT-ONE-FILE.md exactly, starting with its opening message. Start my A2P package.

(Tested line. Fallback, for any AI that reads folders: "Read START-HERE.md, SYSTEM-PROMPT.md, OUTPUT-SPEC.md and every file in knowledge/, then start my A2P package.")

## Way 3: keep it installed (optional)
A Claude Project, a ChatGPT Custom GPT or a Gemini Gem: steps at the end of `SYSTEM-PROMPT.md` ("HOW TO LOAD THIS AGENT").

## DONE looks like
The first reply lists the 8 things it needs and asks only the first one: what your texts are about.

## Before you start
- **Black out (redact) the SSN and the EIN digits** on any document before you upload it. The agent only needs your legal name and address exactly as printed on your EIN letter.
- Prefer typing your details over uploading whole documents (`INTAKE-FORM.md` lists them, if you like a form).
- Turn off chat history or model training in your AI's settings first (ChatGPT: Settings > Data Controls, or a Temporary Chat; Claude: Settings > Privacy).
- Turn on web search or browsing if your AI has it, so the agent can open your links. Without it, paste the page text or a screenshot when it asks. Any website builder works.

You click Submit in HighLevel. The agent never submits anything, and nobody can promise an approval or a review time. Registry compliance information from carrier-published templates, not legal advice. For TCPA or state-law questions, ask your own lawyer.
