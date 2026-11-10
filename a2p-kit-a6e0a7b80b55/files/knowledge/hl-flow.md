<!-- a2p-kit 1.1.0 | hand-built from the HighLevel help-article corpus | sources last verified 2026-10-28 -->
> **a2p-kit 1.1.0** (sources last verified 2026-10-28). Registry compliance information, not legal advice.

# HighLevel A2P flow, screen by screen (the human clicks every button)

Every step comes from the public HighLevel help center. Where the help center shows only a screenshot or names no field, this file says so instead of guessing (section 8). Nothing here is automated inside HighLevel: the AI prefills the answers, you type or paste them and click Submit.

Primary sources (open these if the screen looks different):
- Brand: https://help.gohighlevel.com/support/solutions/articles/155000008140 (modified 2026-09-29)
- Campaign: https://help.gohighlevel.com/support/solutions/articles/155000004539 (modified 2026-09-11)
- Chat Widget: https://help.gohighlevel.com/support/solutions/articles/155000008307 (modified 2026-09-11) and Mixed: https://help.gohighlevel.com/support/solutions/articles/155000008722
- Requirements (opt-in, privacy, terms, DBA, subdomain): https://help.gohighlevel.com/support/solutions/articles/155000007237 (modified 2026-07-30)
- Rejections: https://help.gohighlevel.com/support/solutions/articles/155000007572 (modified 2026-10-16)
- Toll-free: https://help.gohighlevel.com/support/solutions/articles/48001222300 (modified 2026-09-17)

## 0. Data to have ready before you start

| Item | Rule |
|---|---|
| Legal business name | Exactly as on the IRS CP 575 or 147C letter. Several lines above the address: sources conflict (all lines vs first line); copy what the letter prints above the address and confirm in-account. |
| EIN | 9 digits, exact. Never a DUNS. An EIN under 15 days old may fail. |
| Registered address | As on the registry; no P.O. box in the street line. |
| Business type, industry, region of operations | Required Business Details fields (dropdown options are not published). |
| Business email | Standard brand: business-domain email. Sole prop: a public-domain address (Gmail, Hotmail, Yahoo) is REQUIRED. |
| Authorized representative | First and last name, email, phone (reachable, not used for more than 5 brands), job position, job title. |
| Sole-prop phone | A US or Canadian mobile from a real mobile carrier that can receive a code. Google Voice and other VoIP, LeadConnector/HighLevel and other CPaaS numbers fail. Max 3 sole-prop brands per number. |
| Website | Live, public, the MAIN business site, more than one page, shows the legal name (or DBA), services, contact details, privacy policy and a mention of the SMS program. |
| Privacy Policy URL, Terms URL | Public, with the exact clauses from `templates.md`. |
| DBA (if any) | "We are doing DBA as [Business_Name]" in the use case description; DBA visible in the site header or footer. |
| Sample messages (Manual Setup only) | Sample 1 promotional, Sample 2 transactional (or two of the single purpose); brand name, STOP in one, [brackets], HTTPS only, no shorteners. |
| Opt-in evidence (Manual Setup only) | Public URL, or a hosted screenshot (HighLevel Media Storage > Get Link) that opens logged out. |
| Optional | The CP 575 PDF for upload (auto-fills name, EIN, address). Redact anything you do not want stored; HighLevel reads the name, EIN and address. |

## 1. Brand: Business Details
1. Open the sub-account. Click **Settings**.
2. Under **Business Services**, click **Phone System**.
3. Click the **Trust Center** tab.
4. In **A2P Messaging (SMS)** click **Start Registration**.
5. **Get Started:** pick the country where the business is registered; answer **Tax ID** yes or no (yes = Standard brand, no = Sole Proprietor).
6. **Business Details:** Tax ID = yes: Legal business name, Business type, Business industry, Business registration ID type, Business registration number, Business email, Business region of operations, optional CP 575 upload. Tax ID = no: business name or full name (no LLC, Inc., Corporation), industry, mobile phone for the code.
7. **Business Address:** Country, State / Province / Region, Street address, City, ZIP / postal code.
8. **Contact Information** (authorized representative): First name, Last name, Email, Phone, Job position, Job title.
9. **Verification if prompted:** Persona identity verification (once per sub-account) or an **email code** (when Persona is not required and the email domain is over 45 days old; 3 tries, 2 resends, then restart). Check spam.
10. Continue to **Campaign Details**. Brand approval alone does not let you send.

Brand failed: compare with the official records, fix, resubmit. "Maximum 3 tries exhausted" = send the CP 575 through HighLevel's support form (linked in 155000007572). Approved brand data can only be changed by HighLevel Support.

## 2. Campaign Details
Later campaigns: **Settings > Phone System > Trust Center >** in A2P Messaging (SMS) click **Brand & Campaigns > Campaigns** tab > **Create Campaign** > pick the brand.

**Step 1, messaging volume:** Tax ID brands: **Low Volume Standard Brand** (up to 6,000 segments/day) or **High Volume Standard Brand** (up to 600,000). No Tax ID: **Single-number registration** only.

**Step 2, setup method:** **Chat Widget Setup** (opens by default, labelled recommended) or **Switch to manual setup**.

### 2A. Chat Widget Setup: the PRIMARY path for HighLevel users
Why primary: it is HighLevel's default and recommended flow; HighLevel writes the consent text, the samples, the opt-in description and the opt-in message, and locks the disclosures so the live widget matches what was submitted. Fewer fields for you to get wrong.
1. **Messaging use case:** Marketing / Promotional, Informational / Non-Marketing, or **Mixed** (only if one program genuinely sends both; sets the use case to Low Volume Mixed and creates two independent unchecked consent boxes). Marketing + financial or loan content prompts a switch to Informational. Age-gated or financial content adds a locked Date of Birth field.
2. **Your business website URL:** the live public MAIN site where users consent; must match the brand and show name and contact details.
3. **Age-gated content** checkbox only if you send age-restricted content.
4. Click **Copy code** and paste the widget snippet into the site's **body or footer** (Customize widget changes colors and header text only).
5. **The widget must be the ONLY form collecting SMS consent on the submitted page.** No contact, lead or appointment form with an SMS opt-in on that page. (Many creators go further and remove every form and calendar from the whole site until approval; the help center says "the submitted page". The safe choice is the creators' stricter version if you can afford it.)
6. **The website still needs** a Privacy Policy with the exact non-sharing clause and Terms & Conditions with the SMS clauses (`templates.md` sections 1 and 2), linked from the site.
7. **User Consent** step: HighLevel auto-fills Use Case Description, Sample Message #1 and #2, How do Contacts Opt-in, Opt-in Message. These are read-only; read them for accuracy against what you will really send.
8. **Business Website Compliance Checklist**, then **Review Application** (section 3).

### 2B. Manual Setup: the alternative
Use it when consent is collected another way (an existing website form, paper form, Facebook lead form, QR code, kiosk, verbal), for a non-HighLevel form, or when the widget flow does not fit the program.
- Campaign fields: **Campaign Use Case**, **Website URL**, **Use Case Description** (who sends, who receives, what, how they opt in; DBA sentence if needed), **Sample Messages**, **Additional Message Details** (links, phone numbers, age-gated, financial).
- User consent fields: **Opt-In Method**, **Opt-in Form URL** (public, or a hosted image), **Description of Opt-In Flow** (where the number is given, what text is shown, that consent is optional, which messages are agreed to), **Opt-in Message**, **Privacy Policy URL**, **Terms & Conditions URL**.
- Form placement rules (155000007237): consent checkboxes per message purpose, never pre-checked, never required to submit (even when the phone field is required); checkbox wording names the same message types as the description; Privacy Policy and Terms links in the FORM FOOTER, visible, not in a pop-up, not inside the checkbox text; a subdomain opt-in page is fine when it clearly matches the brand, the path to it is visible (email, social, ads or navigation from the main site) and it carries the CTIA disclosures; the Website URL stays the main business site, and the chat widget goes on the main site (see `faq.md` question 27).

## 3. AI Compliance Review and submit
1. Click **Review Application**. HighLevel's AI compliance review checks the campaign and website data.
2. Any failed check: fix it, click **Review Again**. You cannot submit until every required check passes.
3. Submit for carrier review. Passing HighLevel's review does not guarantee approval.
4. Submitting starts the one-time bundle and the monthly campaign fee whether or not the campaign is approved; deleting the campaign stops the monthly fee.

## 4. Status and what to do
| Where | State | Action |
|---|---|---|
| Campaign | Pending | Wait. Do not resubmit or create another campaign. |
| Campaign | Rejected | Brand & Campaigns > Campaigns > the campaign > **View required fixes ->** on every reason; fix all; recheck the whole campaign; resubmit (free). Locked field = new campaign. Prohibited code = do not resubmit. |
| Campaign | Approved | Link every number (section 5). |
| Number | A2P Verified (green) | Can send. |
| Number | A2P In Progress | Carriers updating; cannot send yet. |
| Number | A2P Rejected | Contact HighLevel support with the number and campaign details. |
| Number | A2P Unlinking / Unlink Failed | Wait; retry unlink once, then support. |
| Number | no tag | Not on a campaign: link it. |

## 5. Link the number after approval (fixes error 30034)
Settings > Phone System > Phone Numbers > the number's three-dot menu > **Select A2P campaign to Link** > choose the campaign > confirm the green **A2P Verified** label. Repeat for every local number (sole prop: one number).

## 6. Toll-free verification (separate from A2P; only where it genuinely fits)
1. Settings > Phone System > Manage Numbers > **Verification Required** under the toll-free number.
2. Legal Entity Name (the end business), Website URL, contact (first, last, email, country code, phone). HighLevel may prompt for DBA, entity type, registration authority, registration number, country. Twilio and Bandwidth require a Business Registration Number on new submissions since 2026-02-17: have the EIN ready.
3. Address, then **Continue to Messaging Use Case**.
4. Estimated Monthly Volume; Opt-In Type (Mobile/QR Code, Paper Form, Verbal, Via Text, Web Form); every Use Case Category that applies; Opt-In Workflow Image URL (public, the whole consent flow, test in a private window); Use Case Description; Message Content (sender name, context, opt-out language).
5. Tick **I agree to the Terms of Service**, click **Send Information for Verification**, finish KYC/Persona if prompted.
6. Separate Privacy Policy and Terms URLs are required since 2026-09-15 (Twilio), and the privacy policy carries Twilio's toll-free sentence (`templates.md` 1b).
7. Rejected: fix and resubmit if offered, else support with "Toll-Free Verification Rejection Appeal for [Business Name or Number]".

## 7. Getting HighLevel help
Help (?) button (top right) > **Start Chat** > **Agent Chat**. Include brand and campaign status, the rejection code, screenshots, URLs and the sub-account.

## 8. Not described in the help center (cannot be prefilled from docs)
- The exact item labels of the Business Website Compliance Checklist and the AI Compliance Review rules (screenshots only).
- The fee amounts shown in-app at submission (the in-app amount wins).
- Dropdown options for Business type, Industry, Job position.
- Whether the Chat Widget path lets you edit the auto-generated description (help text says read-only).
