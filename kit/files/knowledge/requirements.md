<!-- a2p-kit 1.0.1 | built from the Smarter Flow a2p knowledge base | sources last verified 2026-10-28 -->
> **a2p-kit 1.0.1** (sources last verified 2026-10-28). Registry compliance information, not legal advice.
> A bare article number like 155000005200 means https://help.gohighlevel.com/support/solutions/articles/155000005200 .

# A2P 10DLC Requirements: living knowledge base (v1.1)

> **Living doc, v1.1, refreshed 2026-10-28** from a full re-read of every public HighLevel A2P help article, the Twilio help center and docs, the TCR CSP user guide and fee guide, and the CTIA principles. Every fact carries its source URL and `last-verified`. Facts not touched by the refresh keep their older date.
>
> **Re-verify every fee before you quote a client.** Never quote a client a review time or an approval date: say "review time varies". The monthly refresh is a runbook, not yet a scheduled job.
>
> **⚠️ conflicting sources, confirm in-account before quoting** marks every place where two official sources disagree. Both values and both sources are shown; nobody picked one silently.
>
> **Read order:** this file (requirements, fees) → `templates.md` (carrier-published fill-in wording, with its provenance table) → `rejection-playbook.md` (rejection code → fix). Never generate legal text; use `templates.md`.

---

## Source map (re-scrape targets for the monthly refresh)

Source authority when sources disagree: TCR and the carriers > Twilio > HighLevel help center > other vendors > videos (claims only).

HighLevel help center (same article numbers on help.gohighlevel.com and help.leadconnectorhq.com), all `last-verified: 2026-10-28`:
- 2026 approval guide (opt-in, checkbox wording, privacy, terms, DBA, subdomains): https://help.gohighlevel.com/support/solutions/articles/155000007237
- Registering your A2P brand (Business Details, sole prop, OTP, CP 575 upload): https://help.gohighlevel.com/support/solutions/articles/155000008140
- Campaign registration step by step + FAQs (Chat Widget Setup vs Manual Setup, AI Compliance Review): https://help.gohighlevel.com/support/solutions/articles/155000004539
- Pre-built A2P campaign registration with Chat Widget: https://help.gohighlevel.com/support/solutions/articles/155000008307
- Mixed use case in the Chat Widget flow: https://help.gohighlevel.com/support/solutions/articles/155000008722
- Campaign rejections, required fixes and vetting errors (the granular code list, live since 2026-03-23): https://help.gohighlevel.com/support/solutions/articles/155000007572
- Older rejection reasons article (still live, superseded by 155000007572): https://help.gohighlevel.com/support/solutions/articles/155000004746
- Campaign approval best practices: https://help.gohighlevel.com/support/solutions/articles/48001229784
- Brand approval best practices: https://help.gohighlevel.com/support/solutions/articles/155000000508
- Use cases: https://help.gohighlevel.com/support/solutions/articles/155000000235
- Fees: https://help.gohighlevel.com/support/solutions/articles/155000005200 · Phone System pricing guide: https://help.gohighlevel.com/support/solutions/articles/48001223556 · 5% markup: https://help.gohighlevel.com/support/solutions/articles/155000007147
- Throughput / MPS: https://help.gohighlevel.com/support/solutions/articles/155000004527
- A2P status tags on numbers: https://help.gohighlevel.com/support/solutions/articles/155000009312
- Error 30034, linking a number: https://help.gohighlevel.com/support/solutions/articles/155000008316
- Persona identity verification for number purchases: https://help.gohighlevel.com/support/solutions/articles/155000005798
- Toll-free verification guide: https://help.gohighlevel.com/support/solutions/articles/48001222300
- LC Phone messaging policy: https://help.gohighlevel.com/support/solutions/articles/48001213941
- Agency Trust Center: https://help.gohighlevel.com/support/solutions/articles/155000009118
- Canada: https://help.gohighlevel.com/support/solutions/articles/155000004915 · US/Canada guidelines: https://help.gohighlevel.com/support/solutions/articles/155000006960
- **Dead links (404 on 2026-10-28, removed from use):** 155000007070 (Revamped Trust Center), 155000000340 (old sole-prop guide), 155000001426 (old opt-in policy guide).

The Campaign Registry (TCR): CSP user guide https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf · fees https://www.campaignregistry.com/Assets/TCR%20Fees%20and%20Pricing.pdf
Twilio: A2P hub https://www.twilio.com/docs/messaging/compliance/a2p-10dlc · campaign recommendations https://support.twilio.com/hc/en-us/articles/26149060902555 · campaign troubleshooting https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/troubleshooting-a2p-brands/troubleshooting-and-rectifying-a2p-campaigns-1 (the old URL without `/troubleshooting-a2p-brands/` is 404).
CTIA Messaging Principles and Best Practices (latest edition found: May 2023): https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf

---

## Brand registration requirements, `last-verified: 2026-10-28`

- Brand registration is **mandatory** for all US SMS/MMS on 10-digit long codes. Unregistered US sends fail with **error 30034**. (https://help.gohighlevel.com/support/solutions/articles/155000006960, https://support.twilio.com/hc/en-us/articles/4410588996123)
- **Brand = who sends; campaign = what, why and how consent is collected.** The brand must be approved before Campaign Details can be completed, and a brand alone does not allow sending: an approved campaign plus a linked number is required. (155000008140, 155000002380)
- **EIN + legal name must exactly match the IRS CP 575 or 147C letter** (not a W-2/W-9 name). Exactness includes punctuation, "LLC" vs "L.L.C." and spacing. Brand address must match the registered address; no P.O. box in the street line. (155000000508, 155000008140, 155000007237)
- **Multi-line legal name on the CP 575:** ⚠️ conflicting sources, confirm in-account before quoting. HighLevel's rejection guide (155000007572) and Twilio's toll-free BRN policy (https://support.twilio.com/hc/en-us/articles/38266268244507) say combine every line above the address; HighLevel's Brand Approval FAQ (155000000508) says first line only. Safe default: copy exactly what the CP 575 prints above the address.
- **CP 575 upload** in Business Details is optional; it auto-fills legal name, EIN and address. (155000008140)
- **EINs issued in the last 15 days may be rejected** (data not propagated yet); Twilio says new EINs can take a few weeks. (155000008140, 155000000508)
- **DUNS is never accepted for US A2P brands** (DUNS belongs only to STIR/SHAKEN voice profiles). SSN-based registration means sole proprietor. Accepted IDs by country: US EIN, Canada BN-9 (first 9 digits of the Business Number), EU VAT numeric part, Australia ABN, New Zealand NZBN, Hong Kong CN. (155000008140, 155000000508)
- **Brand email OTP:** appears when Persona is not required and the business email domain is older than 45 days; 3 attempts, 2 resends, then restart. (155000008140)
- **Brand contact email:** Standard brands: business-domain email recommended; HighLevel's brand guide says Gmail is accepted but slower, while campaign codes 30971 / 30881 reject personal-domain contact or support emails. ⚠️ conflicting sources, confirm in-account before quoting; safe default = business-domain email on Standard brands. Sole proprietor: a public-domain email (Gmail, Hotmail, Yahoo) is REQUIRED and business-domain emails are ineligible. (155000008140, 155000007572)
- **Authorized representative:** first and last name, email, phone, job position, job title; do not reuse a phone or email for more than 5 brands (HighLevel). (155000008140)
- **Persona identity verification:** a one-time photo-ID check per sub-account when buying a +1 number on LC Phone; it does NOT replace A2P registration or toll-free verification. (https://help.gohighlevel.com/support/solutions/articles/155000005798)
- **DBA:** add "We are doing DBA as [Business_Name]" to the campaign use case description; the website, privacy policy, terms and the business name in the consent checkboxes must all match "[Legal Name] DBA [DBA Name]", and the DBA must appear outside the checkboxes (header and/or footer). Code 30918 = DBA does not match the legal name on file. (155000007237, 155000007572)
- **The legal name in the HighLevel Business Profile must also match the CP 575 exactly.** Auditing only the website misses this. Verify it in your HighLevel account.
- **Approved brand data cannot be edited** in the app or API; changes go through HighLevel Support. (155000008140)
- **Trust Score** (0-100) comes from TCR secondary vetting on Standard brands; HighLevel does not set it. It depends partly on company size and years in operation, which submitted data cannot change. (155000004527, 155000000508)
- **Authentication+ (email 2FA, $12.50 per attempt, TCR):** required for PUBLIC for-profit brands (stock ticker + exchange). From 2027-01-21: ⚠️ conflicting sources: Twilio says mandatory for new government brands (https://support.twilio.com/hc/en-us/articles/29499398652059), Bandwidth says all brands (https://www.bandwidth.com/support/en/articles/12823086). Watch; no action for private for-profit clients today.

### Brand types (HighLevel)
| Type | Tax ID | Limits in HighLevel | Notes | Source |
|---|---|---|---|---|
| **Sole Proprietor** | none (individual or 1-employee business) | 1 campaign, 1 phone number, 3,000 segments/day | No Trust Score; Twilio 1 MPS; T-Mobile 1,000/day, AT&T class W 15 msg/min | 155000005200, 155000008316, TCR CSP guide |
| **Low Volume Standard** | EIN or accepted tax ID | multi-number, up to 6,000 segments/day | No secondary vetting. T-Mobile cap: ⚠️ conflicting sources: HighLevel 6,000 segments/day vs Twilio T-Mobile 2,000/day for non-Russell-3000 brands; quote 2,000/day toward T-Mobile as the safe number | 155000005200, https://support.twilio.com/hc/en-us/articles/1260804800549 |
| **High Volume Standard** | EIN or accepted tax ID | multi-number, up to 600,000 segments/day | Automatic secondary vetting → Trust Score → throughput tier | 155000005200, 155000004527 |

A business that has an EIN must register as Standard, never Sole Proprietor (code 30903). Sole proprietor brands are accepted only from the US or Canada. Brands outside the US/Canada may need extra vetting and can no longer register as Low Volume Standard. (155000008140, 155000000508, TCR CSP guide)

### Sole proprietor rules (tightened), `last-verified: 2026-10-28`
- 1 campaign and 1 number per campaign; a second local number on a sole-prop sub-account can trigger error 30034 even when one number is approved. (155000008316)
- Brand name = the individual or unregistered business name; **no LLC, Inc., Corporation** (code 30915). (155000008140)
- Verification is an OTP to a **US or Canadian mobile number from a real mobile carrier. VoIP numbers (Google Voice and similar), LeadConnector and other CPaaS numbers are rejected.** One mobile number validates at most 3 sole-prop brands ecosystem-wide; one email or address at most 10. (155000008140, https://support.twilio.com/hc/en-us/articles/14488596590491)
- Valid US or Canadian address; HighLevel says no P.O. box. (155000008140)

### Foreign founder needing a US number
- A US-registered LLC or corporation with an EIN is a Standard brand. A non-US founder without a US entity has no sole-prop path unless located in the US or Canada. A business outside the US/Canada without a tax ID cannot send to US recipients on 10DLC. Canada BN-9 and Australia ABN are accepted Standard brand IDs. (155000008140, https://support.twilio.com/hc/en-us/articles/9550596959643)
- Treat every foreign-founder case as a human-handled edge case: confirm the entity and tax ID first, then walk the path explicitly.

### Canada, `last-verified: 2026-10-28`
- Canada to US from a Canadian 10DLC number: A2P required. Canada to Canada: numbers bought before 2025-03-26 need nothing; numbers bought on or after need A2P or Persona verification. Toll-free numbers are not affected. (155000004915, 155000006960)

---

## Campaign registration requirements, `last-verified: 2026-10-28`

**Where:** Settings > Phone System > Trust Center tab > A2P Messaging (SMS) > Start Registration (Business Details, then Campaign Details). Later campaigns: Trust Center > Brand & Campaigns > Campaigns tab > Create Campaign. (155000008140, 155000004539)

**Step 1, messaging volume:** brands with a tax ID pick Low Volume Standard or High Volume Standard; no tax ID = "Single-number registration" only. (155000004539)

**Step 2, setup method (NEW):**
- **Chat Widget Setup** opens by default and is labelled "recommended". HighLevel generates the consent widget and pre-fills the use case description, both samples, the opt-in description and the opt-in message. The widget's disclosures (STOP/HELP, frequency, rates) are system-generated and locked; only colors and header text can change. Paste the widget code into the site body or footer. **The widget must be the only form collecting SMS consent on the submitted page** (no contact, lead or appointment form with SMS opt-in on that page). The submitted website must still show business and contact information and include a Privacy Policy and Terms & Conditions. Choosing **Mixed** sets the use case to **Low Volume Mixed** and generates two independent, unchecked consent boxes. Marketing + financial/loan content prompts a switch to Informational; age-gated or financial content adds a locked Date of Birth field. (155000008307, 155000008722, 155000004539)
- **Manual Setup** ("Switch to manual setup") for consent collected another way: website form, paper form, lead form, QR code, kiosk, verbal. Fields: Campaign Use Case, Website URL, Use Case Description, Sample Messages, Additional Message Details (links, phone numbers, age-gated, financial), Opt-In Method, Opt-in Form URL, Description of Opt-In Flow, Opt-in Message, Privacy Policy URL, Terms & Conditions URL. (155000004539)
- Creators on YouTube (June to October 2026) also tell people to remove every other form and calendar from the whole site until approval. That is a creator CLAIM, stricter than the help center, which says "the submitted page".

**Step 3, AI Compliance Review (NEW):** click **Review Application**; failed checks show **Review Again**; you cannot submit until every required check passes. Passing is not a guarantee of approval. (155000004539)

**Submitting starts the one-time bundle and the monthly campaign fee whether the campaign is approved or not;** delete the campaign to stop monthly charges. (https://help.gohighlevel.com/support/solutions/articles/48001223556)

**Use cases (HighLevel):** standard: 2FA, Account Notifications, Customer Care, Delivery Notifications, Fraud Alert Messaging, Higher Education, Marketing, Mixed, Polling and Voting, Public Service Announcement, Security Alert, **Conversational Messaging** (new). Special: Charity, Emergency, Political, Low Volume Mixed. (https://help.gohighlevel.com/support/solutions/articles/155000000235)
- Twilio's longer list also has Agents and Franchises, K-12, Proxy, Social, Sweepstake. ⚠️ conflicting sources: HighLevel rejects sweepstakes and contests as disallowed (30945); treat sweepstakes as not available through HighLevel. Social/influencer is not valid (30928); emergency alerts are not allowed via 10DLC in HighLevel (30929). Lead generation vs lead nurture must be chosen correctly (30916). A brand holds at most 100 campaigns (30930). (155000007572, https://support.twilio.com/hc/en-us/articles/11847054539547)
- Do not choose Mixed just because you are unsure; materially different purposes may need separate campaigns. Use case and opt-in message may be locked on resubmission (a new campaign may be needed). Changing the use case after approval is a TCR modification request. (155000000235, 48001229784)

**Campaign description:** who sends, who receives, what and why, how recipients opt in, and the post-opt-in experience; it must match the use case, samples and the website. No PII (names, personal numbers) in the description; brand names and public numbers are fine. Register the end business, not the agency or platform (30926 = references multiple companies). Identical text pasted across fields or identical samples = 30911. English only (30910). (155000004539, https://support.twilio.com/hc/en-us/articles/11847054539547, 155000007572)

**Sample messages:** realistic, identify the business, match the use case, opt-out language in at least one, variables in [brackets]. Sample #1 = promotional, Sample #2 = transactional; a mixed program needs one of each. **No public URL shorteners** (bit.ly, tinyurl); full direct **HTTPS** links only (HTTP is high-risk code 30964); branded short links on your own domain are fine. If the program embeds a phone number, show it in a sample (30889). (155000007572, 48001229784)
- Variables: ⚠️ conflicting sources: HighLevel's Manual Setup text says "do not include custom fields or values in sample messages"; its rejection guidance says indicate templated fields with brackets. Safe default: bracketed placeholders like [First Name], never raw `{{contact.first_name}}` custom values.

### Opt-in and consent (the highest-failure area), `last-verified: 2026-10-28`
- **Consent model follows the actual message purpose.** Marketing-only program: one marketing consent checkbox. Transactional-only program: one non-marketing checkbox. Mixed program: **two separate checkboxes** so the subscriber can choose one, both or neither. Never pre-selected; **consent is always optional to submit the form, even when the phone field is required** (30925, 30923, 30931). (155000007237, 155000007572)
- **Checkbox wording must name the same message types as the campaign description**; generic "marketing messages" or "non-marketing messages" fails. HighLevel's exact wording is in `templates.md` section 3. The [BUSINESS NAME] must match the CP 575 (or the declared DBA). (155000007237)
- Required disclosures near the checkbox: message type, frequency, "message and data rates may apply", STOP, HELP (30924). (155000007572, 48001229784)
- **Privacy Policy and Terms links in the FOOTER of every form**, visible, not obscured by design elements or pop-ups, reachable before submission, not inside the checkbox text. (155000007237)
- A phone number alone is not consent. Reviewers must be able to verify the consent flow without logging in. Offline, gated or pre-launch opt-in: upload a screenshot to HighLevel Media Storage, copy the shareable link, test it logged out. Text-to-join and offline opt-in need a full call to action (program name, keyword and number, message types, frequency, rates, HELP, STOP, privacy/terms). Every opt-in method used must be described (30917, 30909, 30896). (48001229784, 155000007572)
- Consent cannot be bought, sold or exchanged; purchased lists are prohibited. Opt-in is per campaign and sender and is not transferable. Keep consent records: timestamp, medium, the captured experience, campaign, IP, phone number, identity of the consenter. (48001213941, CTIA May 2023)
- **Opt-in confirmation** (all recurring programs): program/brand name, HELP instructions, opt-out instructions, recurring frequency, "Message and data rates may apply". No source states a 160-character cap (the old "≤160 chars" note is removed). (https://support.twilio.com/hc/en-us/articles/26149060902555)
- **Opt-out:** the STOP confirmation acknowledges the request, names the brand and confirms no further messages (30887). Keywords: Twilio recommends STOP, UNSUBSCRIBE, END, QUIT, HALT; HighLevel's LC Phone honors STOP / UNSUBSCRIBE and START / YES / UNSTOP to rejoin. **HELP** reply = brand name plus phone or email (30890). (155000007572, 26149060902555, 48001213941)
- LC Phone auto-adds sender ID and "Reply STOP to unsubscribe" to the first outbound message to a new contact. (48001213941)
- Double opt-in: HighLevel has a separate "How to build a double opt-in flow" article (48001162996); not an A2P requirement.

### Website compliance, `last-verified: 2026-10-28`
- Submit the **main business website**, live and public, matching the brand: company name, a specific description of services ("consulting" alone is too vague), contact details, privacy policy and a mention of the SMS program. A single page with no about section or product description is rejected; remove placeholder text like [company name]. (155000004539, 155000004746, 155000007572)
- Website codes: 30919 insufficient business info, 30920 just a form, 30921 requires login, 30922 under construction or non-standard URL, 30891 invalid URL, 30907 URL does not match brand, 30908 privacy policy not found, 30888 no age gate. (155000007572)
- Pre-launch site: say so in the campaign description and give a URL hosting screenshots or mockups. (155000004746)
- **Privacy Policy** must contain HighLevel's exact non-sharing clause (`templates.md` section 1) and **must never mention affiliation, selling or buying of leads** (HighLevel rule). Contact details must match the brand registration. (155000007237)
- **Terms** must include: business identity and message description, the STOP opt-out clause, HELP / support contact, "Carriers are not liable for delayed or undelivered messages", the frequency and rates clause, and a cross-link to the privacy policy (`templates.md` section 2). (155000007237)
- Subdomains (form.website.com) are fine when the brand clearly matches the main site, the discovery path (email, social, ads, navigation) is shown, and the CTIA disclosures are present. Twilio checks that the website supports the stated use case. Social icons must point to the business's own pages. (155000007237, 155000004746)
- HighLevel offers sample Privacy Policy and Terms pages (funnel share + Google Docs), not legal advice. (155000007237)

---

## Prohibited and restricted use cases (Step 1 screen), `last-verified: 2026-10-28`

HighLevel's rejection guide marks these **ineligible for resubmission** (do not submit; a prohibited use case is not a fixable rejection). Source: https://help.gohighlevel.com/support/solutions/articles/155000007572 and https://help.gohighlevel.com/support/solutions/articles/48001219617
- **SHAFT (30953-30958):** sex/adult content, hate, alcohol promotion (30955), alcohol without a robust 21+ age gate (30956), firearms / fireworks / explosives, tobacco / vape.
- **Disallowed (30940-30952):** cannabis / CBD, prescription drugs, loans (payday/short-term lending), third-party debt collection, gambling, sweepstakes and contests, stock alerts, cryptocurrency, high-risk investments, debt reduction, credit repair, third-party lead generation and MLM, non-federally-compliant content.
- **High risk (30959-30964):** fraud, phishing, poor domain reputation, deceptive marketing, public URL shorteners, HTTP links.
- **Restricted, needs extra care (not a hard stop):** age-gated content needs a robust age gate in the opt-in flow (30888); direct lending must be declared even for OTP traffic (30895); political needs the Political use case (and a Campaign Verify token on toll-free); charity, emergency, agents/franchises are special use cases. Change from v1: alcohol is no longer "grey", HighLevel rejects alcohol promotions outright.
- Appeal an ineligible rejection only through HighLevel support with the subject "10DLC Campaign Appeal for [your business name or number]". (155000007572)

---

## Fees (re-verify in the Trust Center before quoting; every row dated)

HighLevel says the in-app amount at submission is the source of truth. `last-verified: 2026-10-28` on every row unless stated.

| Fee | Amount | Source |
|---|---|---|
| One-time bundle, Sole Proprietor (brand + campaign vetting + $3 Fast Track, non-refundable) | $22.50 | 155000005200, 48001223556 |
| One-time bundle, Low Volume Standard | $22.50 | same |
| One-time bundle, High Volume Standard (includes secondary vetting) | $64.00 | same |
| $3 Fast Track (inside the bundle; HighLevel describes it as aiming to expedite review; never quote it as a time promise) | $3.00 | 155000005200 |
| Additional campaign under the same brand | $15.00 | 155000005200 |
| Resubmitting a rejected campaign | free since 2026-02-01 (the old $15 resubmit fee is gone). A fix that needs a locked field means a NEW campaign, which pays the $15 again | 48001223556, 155000007572 |
| Monthly campaign fee (fees article) | Sole Prop $2.00 · Standard use cases $10.00 · Low Volume Mixed $1.50 · Charity $3.00 · Emergency $5.00 | 155000005200 |
| Monthly campaign fee (pricing guide) | Sole Prop up to $2.10 · Low Volume $1.50-$10.50 · High Volume $10.50 (TCR rate + 5%) | 48001223556 |
| **HighLevel 5% markup** | ⚠️ conflicting sources, confirm in-account before quoting. Fees article 155000005200: "passthrough ... no markup from HighLevel". Pricing guide 48001223556 + article 155000007147: a fixed 5% location-level markup on A2P registration, monthly campaign and SMS/MMS carrier fees, applied before any agency rebilling | 155000005200 vs 48001223556, 155000007147 |
| Authentication+ (email 2FA) for public for-profit brands | $12.50 per attempt (TCR) | https://support.twilio.com/hc/en-us/articles/29499398652059, TCR fee guide |
| TCR underlying fees (reference) | brand $4.50 (sole prop $4.00), standard vetting $41.50, failed standard vet $5.00, vet appeal $11.00, enhanced vet $101.50, campaign monthly $1.50 to $30 by use case, 3-month minimum on every non-political campaign then month to month (TCR guide last updated 2026-08-13) | TCR fee guide, TCR CSP guide |
| Carrier surcharges per SMS segment (pricing guide) | AT&T $0.0035 · T-Mobile $0.0045 out / $0.0025 in · Verizon $0.0050 out · US Cellular $0.0050 out · others $0.0042 out; MMS about $0.009-$0.010 | 48001223556; AT&T raise 2026-04-01 (Bandwidth 13566708), T-Mobile 2026-01-19 (Twilio 44609260499995), Verizon 2026-10-01 (Bandwidth 12823178) |
| HighLevel base rates | SMS $0.00747/segment US/Canada, MMS $0.0220 out, local number $1.15/month, toll-free number $2.15/month | 48001223556 |

The brand creation fee is charged when the brand is created even if it ends unverified. (https://support.twilio.com/hc/en-us/articles/1260803965530)

---

## Review time

Review time varies and is outside anyone's control. This kit never quotes a number of days and never promises an approval date. It makes the submission complete and correct.

## After approval: link the number and read the status tag
- Link: Settings > Phone System > Phone Numbers > three-dot menu > **Select A2P campaign to Link** > choose the campaign. Repeat for every local number (sole prop: one number). Fixes error 30034. (155000008316)
- **Per-number A2P status tags (NEW):** A2P Verified (green, can send), A2P In Progress, A2P Rejected (contact support), A2P Unlinking, A2P Unlink Failed, or no tag (not on a campaign). One tag per number. (https://help.gohighlevel.com/support/solutions/articles/155000009312)
- Agency Trust Center (Agency > Settings > Phone Integration > Trust Center (A2P)): $497/month plan only, Agency Owners and Admins only. (155000009118)
- LC Phone ramp: new sub-accounts climb 8 levels (500 to 5,000+ per 24 hours) from the first successful SMS; opt-out, bounce and error rates are monitored with warnings and temporary suspension. (48001213941)
- Texas SB 140: a one-toggle block for Texas recipients exists in Messaging Compliance. (155000006145)

---

## Toll-free verification (an alternative only where it genuinely fits; never "the easy workaround"), `last-verified: 2026-10-28`
- Toll-free numbers do not use 10DLC brand/campaign registration; **each toll-free number needs its own Toll-Free Verification** before SMS/MMS to US or Canada. Only Verified numbers send; Restricted, Pending and Rejected stay blocked (error 30032; 30007 = carrier filtering). (https://help.gohighlevel.com/support/solutions/articles/48001222300)
- Path: Settings > Phone System > Manage Numbers > **Verification Required** under the number. Fields: Legal Entity Name (the end business), Website URL, contact, address, Estimated Monthly Volume, Opt-In Type (Mobile/QR Code, Paper Form, Verbal, Via Text, Web Form), Use Case Categories, Opt-In Workflow Image URL, Use Case Description, Message Content, accept Terms, **Send Information for Verification**. (48001222300)
- **Business Registration Number:** ⚠️ conflicting sources, confirm in-account before quoting. HighLevel's guide says an EIN is not required but may prompt for registration details; Twilio and Bandwidth require a Business Registration Number on all new toll-free submissions from 2026-02-17 (SignalWire says 2026-01-01), sole proprietors excepted. **Collect the EIN anyway.** (48001222300, https://support.twilio.com/hc/en-us/articles/38266268244507, https://www.bandwidth.com/support/en/articles/13145815)
- Since 2026-09-15 toll-free submissions need **separate Privacy Policy and Terms URLs** (error 30493 when missing) and Twilio requires this verbatim privacy clause: "All the above categories exclude text messaging originator opt-in data and consent; this information won't be shared with any third parties." Terms must be a live embedded page, not a pop-up. (https://support.twilio.com/hc/en-us/articles/13264118705051)
- Political toll-free needs a Campaign Verify token since 2026-02-17. Appeal subject: "Toll-Free Verification Rejection Appeal for [Business Name or Number]". (48001222300)
- Review time: never quoted to a client (HighLevel and Twilio publish different figures).

---

## Automation reality (why the human submits)
- No public HighLevel help article documents an A2P API (not re-verifiable either way, 2026-10-28). The Trust Center is a UI flow (Chat Widget Setup or Manual Setup + AI Compliance Review). So the automation layer is compliance PREP (audit the site, prefill every answer, fill the templates) plus an Ask AI prompt; **the human clicks submit**. Never automate inside the HighLevel UI.
- Twilio's own APIs (BrandRegistration with failure reasons, mock mode) need direct Twilio access, not HighLevel's managed path. The TCR CSP API is gated to onboarded CSPs.

## In this KB before and NOT re-verifiable from public sources (2026-10-28)
- "Agency and sub-account must both be on LC Telephony for in-app A2P": no public article states this; articles also cover agency-managed Twilio. Confirm in-account.
- "T-Mobile rejects the brand without the non-sharing clause": HighLevel and Twilio enforce the clause; the T-Mobile Code of Conduct PDF returned 403.
- HighLevel certification facts (pass rate, syllabus): behind login, deliberately not accessed.

---

