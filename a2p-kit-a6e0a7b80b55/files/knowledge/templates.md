<!-- a2p-kit 1.1.0 | built from the Smarter Flow a2p knowledge base | sources last verified 2026-10-28 -->
> **a2p-kit 1.1.0** (sources last verified 2026-10-28). Registry compliance information, not legal advice.
> A bare article number like 155000005200 means https://help.gohighlevel.com/support/solutions/articles/155000005200 .

# A2P compliance templates: carrier-published fill-in wording ONLY (v1.1)

**These are registry-compliance templates, not legal advice. For TCPA questions, ask your own lawyer.**

Use these fill-in patterns exactly as written, dropping the client's details into the `[brackets]`. **Never invent novel legal language.** Every block below is copied from a published HighLevel or Twilio source (see the provenance table). Always deliver them with the not-legal-advice line above. Refreshed 2026-10-28.

## TEMPLATE PROVENANCE

| # | Template | Exact source | Source version / date | last-verified |
|---|---|---|---|---|
| 1 | Privacy Policy SMS non-sharing clause (10DLC) | HighLevel "How to get your phone number A2P approved in 2026", section Privacy Policy Essentials: https://help.gohighlevel.com/support/solutions/articles/155000007237 ; same wording in Twilio campaign recommendations: https://support.twilio.com/hc/en-us/articles/26149060902555 | HighLevel article modified 2026-07-30 | 2026-10-28 |
| 1b | Privacy clause for TOLL-FREE verification | Twilio toll-free verification onboarding guide: https://support.twilio.com/hc/en-us/articles/13264118705051 | fetched 2026-10-28 | 2026-10-28 |
| 2 | Terms SMS clauses (opt-out and support, carrier liability, frequency, privacy link) | HighLevel 155000007237, section Terms of Service Clauses | modified 2026-07-30 | 2026-10-28 |
| 2a | Terms business identity clause | HighLevel 155000007237 requires the element but publishes no verbatim text; the fill-in states only the business name and the message types | modified 2026-07-30 | 2026-10-28 |
| 3 | Marketing and non-marketing consent checkbox text | HighLevel 155000007237, section Opt-In Form ("Make sure you have two checkboxes with the following exact messages") | modified 2026-07-30 | 2026-10-28 |
| 3b | Form footer links rule | HighLevel 155000007237, sections Footer Links and Universal Footer Requirements | modified 2026-07-30 | 2026-10-28 |
| 4 | Opt-in confirmation message | Twilio 26149060902555, Opt-in Confirmation Message (required elements + the "successful example") | fetched 2026-10-28 | 2026-10-28 |
| 5 | HELP response | Twilio 26149060902555, Help Message successful example; HighLevel code 30890 (brand + phone or email): https://help.gohighlevel.com/support/solutions/articles/155000007572 | HighLevel article modified 2026-10-16 | 2026-10-28 |
| 6 | STOP / opt-out confirmation | Twilio 26149060902555, Opt-out Confirmation Message successful example; HighLevel code 30887 | same | 2026-10-28 |
| 7 | Sample message skeletons | HighLevel campaign approval best practices example ("Acme Dental: Hi [First Name] ..."): https://help.gohighlevel.com/support/solutions/articles/48001229784 ; rules from 155000007572 | modified 2026-09-02 | 2026-10-28 |

When a source changes wording, the monthly refresh updates the block AND this table in the same PR.

---

## 0. Which opt-in path (decide before using sections 3-4)

- **HighLevel users: Chat Widget Setup is HighLevel's default, "recommended" path.** HighLevel generates the consent widget; its checkbox text, STOP/HELP, frequency and rates disclosures are system-generated and locked, so sections 3 and 4 are NOT typed by you on that path. The widget must be the only form collecting SMS consent on the submitted page. The website must still carry a Privacy Policy (section 1) and Terms & Conditions (section 2). Source: https://help.gohighlevel.com/support/solutions/articles/155000008307
- **Manual Setup / non-HighLevel sites / consent collected elsewhere** (an existing website form, paper, QR code, kiosk, verbal): use sections 3 and 4.
- **Consent model follows the actual message purpose:** marketing-only program = the marketing checkbox only; transactional-only = the non-marketing checkbox only; mixed = both, as two separate boxes.

---

## 1. Privacy Policy: SMS non-sharing clause (exact wording, no edits)
Add this, word for word, to the client's existing Privacy Policy:

> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.

**Check item (HighLevel rule, separate from the clause):** the policy must never mention affiliation, selling or buying of leads (155000007237). Search the whole existing policy for sentences about selling, renting or sharing personal information with partners or "lead" buyers and have the client resolve them with their counsel before submission.

v1.0 appended "Mobile opt-in data is not shared or sold to third parties or lead generators." That sentence appears in neither HighLevel's nor Twilio's text and names lead selling, which HighLevel's rule forbids. **Removed 2026-10-28.**

### 1b. Toll-free only: add Twilio's verbatim clause too
If the client verifies a TOLL-FREE number and the privacy policy mentions data sharing in any capacity, Twilio requires this verbatim sentence in the policy:

> All the above categories exclude text messaging originator opt-in data and consent; this information won't be shared with any third parties.

---

## 2. Terms & Conditions: required SMS clauses
Add all of these to the client's Terms & Conditions (each element is required). Clauses 2b to 2e are HighLevel's published text.

**2a. Business identity:**
> [Business Name] sends text messages about [message types, the same ones named in the campaign description].

**2b. Opt-out and support:**
> You can cancel the SMS service at any time. Just text "STOP" to the [Phone Number]. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again. If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at [support email address or toll-free number].

**2c. Carrier liability:**
> Carriers are not liable for delayed or undelivered messages.

**2d. Message frequency:**
> As always, message and data rates may apply for any messages sent to you from us and to us from you. You will receive [message frequency]. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.

**2e. Privacy policy link:**
> If you have any questions regarding privacy, please read our privacy policy: [link to privacy policy]

For toll-free, the Terms must be a live embedded page (not a pop-up) with its own URL.

---

## 3. Consent checkboxes (Manual Setup or non-HighLevel forms)
Never pre-checked; never required to submit, even when the phone field is required. The [BUSINESS NAME] matches the CP 575 / 147C (or "[Legal Name] DBA [DBA Name]"). The message types must match the campaign description.

**Marketing checkbox (HighLevel exact wording):**
> ☐ I consent to receive marketing text messages, about special offers, discounts, and service updates, from [BUSINESS NAME] at the phone number provided. Message frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.

**Non-marketing checkbox (HighLevel exact wording):**
> ☐ I consent to receive non-marketing text messages from [BUSINESS NAME] about [USE_CASE_FROM_CAMPAIGN_DESCRIPTION]. Message frequency may vary, message & data rates may apply. Text HELP for assistance, reply STOP to opt out.

Marketing-only program: show only the marketing box. Transactional-only program: show only the non-marketing box. Mixed: both, separate.

**Form footer (links live here, never inside the checkbox text; visible, not in a pop-up):**
> By submitting this form you agree to our [Privacy Policy] and [Terms & Conditions].

---

## 4. Opt-in confirmation message (every recurring program)
Required elements: program/brand name, HELP instructions, opt-out instructions, recurring frequency, "Message and data rates may apply".
> [Business Name]: You are successfully opted in for messages from [Business Name] for [message types]. Message frequency varies. Message and data rates may apply. Reply HELP for additional support. Reply STOP to unsubscribe.

## 5. HELP response (brand name + phone or email, 30890)
> [Business Name]: Please visit [website] or contact [support phone or email] to get support. To opt-out, reply STOP.

## 6. STOP / opt-out confirmation (acknowledge, brand, no further messages, 30887)
> You have successfully been unsubscribed from [Business Name]. You will not receive any more messages from this number.

---

## 7. Sample message skeletons (campaign submission, Manual Setup)
Brand name in each; opt-out language in at least one; [brackets] for variables, never `{{custom values}}`; full HTTPS links on the client's own domain, no public shorteners; the two samples must differ and match the declared use case. Sample #1 = promotional, Sample #2 = transactional. A single-purpose program uses two samples of that purpose.

**Sample #1, promotional (Marketing):**
> [Business Name]: Hi [First Name], [offer, e.g. $20 off a tune-up through [Date]]. Book at https://[client-domain]/[page]. Reply STOP to unsubscribe.

**Sample #2, transactional (Account Notification / Customer Care):**
> [Business Name]: Hi [First Name], your appointment is scheduled for [Date] at [Time]. Reply STOP to unsubscribe.

(Both must reflect what the client will actually send. On Chat Widget Setup HighLevel generates the samples; review them for accuracy instead.)
