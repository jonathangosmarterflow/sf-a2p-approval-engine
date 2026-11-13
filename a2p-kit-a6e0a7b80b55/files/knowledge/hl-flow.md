<!-- a2p-kit 1.3.0 | hand-built from the HighLevel help-article corpus | sources last verified 2026-10-28 -->
> **a2p-kit 1.3.0** (sources last verified 2026-10-28). Registry compliance information, not legal advice.

# HighLevel A2P flow, screen by screen (the human clicks every button)

Every step comes from the public HighLevel help center. Where the help center shows only a screenshot or names no field, this file says so instead of guessing (section 8). This kit automates nothing inside HighLevel: the agent prefills the answers, you type or paste them (or let HighLevel's own Ask AI enter them, section 9) and you click Submit.

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
| Phone system on LC Phone (pre-flight) | **UNVERIFIED as a requirement.** One creator video (2026-06-30) says a sub-account still on the older Twilio integration must switch to LC Phone before the registration can be submitted. No HighLevel help article in this kit's sources says so. Check that Settings > Phone System shows a Trust Center tab; if it does not, ask HighLevel support (section 7). |
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
4. Click **Copy code** and install that generated code on the site (Customize widget changes colors and header text only). **Any website builder, the always-true rule:** paste it where your builder allows site-wide custom code, in the body or footer, so it loads on the MAIN site URL; publish; open that exact URL in a private browser window: the widget must load with no login, cookie wall or 404 (155000004746, code 30909). Use only the widget generated here, never another or a customised chat widget (155000004746, code 30909). Menu steps for a named builder (WordPress, Wix, Squarespace and others) are not in this kit's sources: guide from a screenshot of the builder's own screen, or the builder's own help pages.
5. **Other forms on the site you submit, three cases** (sources: 155000008725 and 155000008590, modified 2026-09-11: "The Chat Widget should be the only form on the submitted page collecting SMS consent"; 155000004746, modified 2026-10-12: "Remove any other form on the site that collects phone numbers or SMS consent", codes 30896, 30909):
   - No phone field and no SMS consent: can stay.
   - A phone field without SMS consent wording: not a texting opt-in. The page-level rule does not name it; the rejection guidance does. This kit takes the stricter reading: remove the phone field (or the form) from the site you submit.
   - An SMS consent form: a second opt-in method, not covered by the widget campaign. Register it as its own campaign through Manual Setup (2B), never as an edit to an approved campaign.
   Never remove forms only to pass review and put them back after approval: what is live must keep matching what you registered (`faq.md` question 30).
   **Main website:** the Website URL is your main business website on the same domain as the brand registration, not a standalone form or landing page (155000004746 under 30891; Twilio error 30920, published 2026-07-23; 155000007572 lists 30920 "Website is just a form").
6. **The website still needs** a Privacy Policy with the exact non-sharing clause and Terms & Conditions with the SMS clauses (`templates.md` sections 1 and 2), linked from the site.
7. **User Consent** step: HighLevel auto-fills Use Case Description, Sample Message #1 and #2, How do Contacts Opt-in, Opt-in Message. These are read-only; read them for accuracy against what you will really send.
8. **Website compliance check, then Review Application** (section 3). HighLevel does not publish the exact in-app checklist labels, and the number of boxes on your screen is not verified here: match these items to the boxes you see, and tick a box only when it is true on the live site. Worded from the Chat Widget guide 155000008725, Step 7 "Complete the Website Compliance Check" (modified 2026-09-11), plus the older widget-first article 155000008308 (modified 2026-07-30) for item 6:
   1. Live and publicly accessible.
   2. Clearly your business, matching the business information used in the brand registration.
   3. Business contact information on the site.
   4. A Privacy Policy and Terms & Conditions.
   5. The SMS opt-in experience (the generated widget) on the submitted page.
   6. No phone or texting forms (step 5) and no mention of lead buying or affiliate marketing (155000008308: "has no mention of lead buying or affiliate marketing").
   The 2026-09-11 step-by-step guide (155000008590) calls it the "Business Website Compliance Checklist" and says to select Review Application after reviewing the items.

### 2B. Manual Setup: the alternative
Use it when consent is collected another way (an existing website form, paper form, Facebook lead form, QR code, kiosk, verbal), for a non-HighLevel form, or when the widget flow does not fit the program.
- Campaign fields: **Campaign Use Case**, **Website URL**, **Use Case Description** (who sends, who receives, what, how they opt in; DBA sentence if needed), **Sample Messages**, **Additional Message Details** (links, phone numbers, age-gated, financial).
- User consent fields: **Opt-In Method**, **Opt-in Form URL** (public, or a hosted image), **Description of Opt-In Flow** (where the number is given, what text is shown, that consent is optional, which messages are agreed to), **Opt-in Message**, **Privacy Policy URL**, **Terms & Conditions URL**.
- **Keep your forms (the form is the registered opt-in), form rules from 155000007240 "How to get your phone number A2P approved in 2026" (modified 2026-08-31, read 2026-11-13):** HighLevel's two exact consent wordings (`templates.md` section 3), separate marketing and non-marketing boxes, never pre-checked, optional to submit even when the phone field is required, Privacy Policy and Terms links in the footer of every form. ⚠️ Conflict: 155000007120 "Opt-In Methods & Their Compliance Requirements" (modified 2026-08-31) says consent boxes are "not required when the phone number field is not mandatory"; 155000007240 shows them for an optional phone field too. This kit uses the stricter one. Proof when the form is not public: a screenshot in HighLevel Media Storage > Get Link (section 0).
- **A second opt-in method next to an approved campaign** (for example a form with an SMS box beside an approved widget campaign): its own campaign for the same brand, **Campaigns > Create Campaign > choose the Brand**, then Manual Setup (155000008590, modified 2026-09-11). Never while a campaign is Pending ("Do not create a duplicate Campaign while the current submission is Pending", 155000008590). Sole proprietor: one campaign (`requirements.md`). A new campaign carries its own fees (`fees.md`).
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
- The exact item labels of the Business Website Compliance Checklist and how many boxes it shows (section 2A step 8 gives HighLevel's own description, not the labels), and the AI Compliance Review rules (screenshots only).
- The fee amounts shown in-app at submission (the in-app amount wins).
- Dropdown options for Business type, Industry, Job position.
- Whether the Chat Widget path lets you edit the auto-generated description (help text says read-only).
- The exact confirmation screen Ask AI shows for an A2P save or submit, whether Ask AI runs Review Application before it submits, and the date Ask AI gained A2P (not found, 2026-11-12).

## 9. HighLevel's Ask AI and A2P (last verified 2026-11-12)
Source: HL "Ask AI Assistant" https://help.gohighlevel.com/support/solutions/articles/155000005327 (modified 2026-11-10), unless noted.
1. **What it does:** "A2P Registration: Full A2P Trust Center registration workflow, brand submission, TCR polling, and resubmission on rejection". Example prompt in the article: "Walk me through registering for A2P messaging."
2. **Confirmation:** "For any write, update, or delete action, Ask AI will present a confirmation screen and require your approval before executing the change." Read every answer it shows against your EIN letter and your website before you approve.
3. **It can submit.** A2P brand submission is on its list. This kit's Ask AI prompt (package section 11) asks it to show every answer before saving and to submit nothing; you click Submit yourself.
4. **It cannot install the chat widget:** "Chat Widget: No standalone configuration, cannot deploy or configure chat widgets directly"; Website Builder (Sites): "No direct access, only Funnels are available". You paste the widget code (section 2A step 4); it must be live and public on the submitted page before the compliance review and final submission (155000008307).
5. **Who has it:** "included for agency admins and agency users on HighLevel agency plans, subject to fair-use limits. Sub-account admins and users can access Ask AI through pay-per-use billing or an eligible AI Employee subscription." No price is stated here; check your account.
6. **Campaigns auto-submit after brand approval** (HighLevel changelog https://ideas.gohighlevel.com/changelog/a2p-campaigns-now-auto-submitted-after-brand-approval , no date on the page): "As soon as your A2P brand is approved, your campaign will now be submitted automatically, no manual action required." Have every page, the opt-in and the campaign answers ready before you submit the brand.
7. **Email code:** brand registration asks for an email code when Persona identity verification is not required and the email domain is over 45 days old (155000008140, section 1 step 9). Whoever runs the registration needs access to that inbox.
