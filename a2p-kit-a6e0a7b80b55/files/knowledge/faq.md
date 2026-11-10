<!-- a2p-kit 1.1.1 | questions from the 2026-10-28 YouTube corpus (310 transcripts), answers from official sources | sources last verified 2026-10-28 -->
> **a2p-kit 1.1.1** (sources last verified 2026-10-28). Registry compliance information, not legal advice.
> HL nnnn = https://help.gohighlevel.com/support/solutions/articles/nnnn · Twilio nnnn = https://support.twilio.com/hc/en-us/articles/nnnn

# FAQ: the 25 questions people ask most about A2P in HighLevel (plus the form vs widget, subdomain and typical-path questions)

The questions are the most repeated ones across 310 A2P videos (ranked by how many videos raise them). Every answer comes from an official source, never from a video.

**1. Why was my A2P rejected and how do I fix it?**
Open the campaign's **View required fixes**: every reason shows an error code, what it means and the correction. Fix every reason, recheck the whole campaign (description, use case, samples, website, consent, policy links), then resubmit. The full code table is in `rejection-playbook.md`. Sources: HL 155000007572, HL 48001229784.

**2. What sample messages will pass?**
Realistic messages you will really send, your business name in them, STOP opt-out text in at least one, variables in [brackets], full HTTPS links on your own domain (no bit.ly or tinyurl), two distinct samples. Sample 1 promotional, Sample 2 transactional (or two of your single purpose). On Chat Widget Setup HighLevel writes the samples for you. Sources: HL 155000007572 (codes 30893, 30892, 30911), HL 48001229784.

**3. How long does approval take?**
It varies, and nobody controls it; HighLevel publishes no fixed timeline and tells people not to promise dates. This kit never quotes a number of days. What you control is a complete, correct submission. Do not resubmit or create a second campaign while one is Pending. Sources: HL 155000008140, HL 155000004539.

**4. Does my client need a website? What if they have none?**
Yes for 10DLC: a live, public main business site with the company name, specific services, contact details, a privacy policy and a mention of the SMS program; a lone form or a one-page site with no business info is rejected (30919, 30920). Pre-launch: say so in the campaign description and give a URL with screenshots or mockups. Sources: HL 155000004539, HL 155000004746, HL 155000007572.

**5. Does the business info have to match the IRS letter exactly?**
Yes. Legal name and EIN exactly as on the CP 575 or 147C (punctuation, LLC vs L.L.C., spacing), registered address too. Uploading the CP 575 in Business Details auto-fills them. Check the HighLevel Business Profile name as well. Multi-line names: sources conflict (all lines vs first line); copy what the letter prints above the address. Sources: HL 155000000508, HL 155000008140, HL 155000007572.

**6. Canada and other non-US businesses: can we register?**
Canada: yes; Canadian brands use the BN-9 (first 9 digits of the Business Number). Australia ABN, NZ NZBN, EU VAT and Hong Kong CN are accepted Standard brand IDs. Sole proprietor is only for the US or Canada. A business outside the US/Canada without a tax ID cannot send to US recipients on 10DLC. Brands outside the US/Canada may need extra vetting and cannot use Low Volume Standard. Canadian numbers bought on or after 2025-03-26 need A2P or Persona even for Canada-only texting. Sources: HL 155000008140, HL 155000000508, HL 155000004915, Twilio 9550596959643.

**7. Do I need an EIN? What if I am a sole proprietor?**
Without a tax ID you register as a Sole Proprietor: 1 campaign, 1 number, 3,000 segments a day, a public-domain email (Gmail, Yahoo, Hotmail), a brand name without LLC or Inc., and a code sent to a real mobile number (Google Voice, other VoIP and HighLevel numbers fail). If the business HAS an EIN it must register as Standard. Sources: HL 155000008140, HL 155000008316, Twilio 14488596590491.

**8. How do agencies handle A2P for client sub-accounts?**
Each client business registers its own brand and campaign in its own sub-account (register the end business, never the agency; 30926 rejects campaigns naming several companies). The Agency Trust Center (Agency > Settings > Phone Integration > Trust Center (A2P)) shows every sub-account's status, on the $497 plan only. Sources: HL 155000009118, HL 155000007572, Twilio 11847054539547.

**9. What does it cost?**
See `fees.md`: one-time bundles of $22.50 (sole prop and Low Volume Standard) or $64.00 (High Volume Standard), each including a $3 Fast Track fee; monthly campaign fees from $1.50 to $10; carrier fees per segment. A 5% HighLevel markup is stated on one HighLevel page and denied on another: confirm the amount shown in your Trust Center. Fees start at submission whether or not the campaign is approved. Sources: HL 155000005200, HL 48001223556, HL 155000007147 (all 2026-10-28).

**10. Can I text without A2P?**
Not from a US 10-digit number: unregistered US sends fail with error 30034 (Twilio: blocked since 2023-09-01). Toll-free needs its own verification. Sources: HL 155000006960, Twilio 4410588996123.

**11. What do I write in the campaign description?**
Who sends, who receives, what you send and why, how people opt in, and what happens after they opt in, all matching the use case, samples and website. No personal names or personal numbers. Add "We are doing DBA as [Name]" if you use a DBA. Sources: HL 155000004539, Twilio 11847054539547, HL 155000007237.

**12. Which campaign type: marketing, mixed, informational, low volume or standard?**
Two separate choices. Volume: Low Volume Standard (up to 6,000 segments a day) or High Volume Standard (up to 600,000). Use case: what you really send; Mixed only if one program genuinely sends both promotional and informational texts (in the widget flow it becomes Low Volume Mixed). Do not pick Mixed just because you are unsure. Sources: HL 155000004539, HL 155000000235, HL 155000008722.

**13. Gmail gets rejected: which email do I use?**
Standard brand: a business-domain email (HighLevel's brand guide says Gmail is accepted but slower, yet codes 30971 and 30881 reject personal-domain contact and support emails; use the business domain). Sole proprietor: the opposite, a public-domain email is required. Sources: HL 155000008140, HL 155000007572.

**14. What changed recently in the HighLevel A2P flow?**
Free resubmission (2026-02-01), granular rejection codes with View required fixes (2026-03-23), Chat Widget Setup as the default, the AI Compliance Review before submit, per-number A2P status tags, a $3 Fast Track fee inside the bundle, the toll-free registration number rule (2026-02-17). Sources: HL 48001223556, HL 155000007572, HL 155000004539, HL 155000009312, Twilio 38266268244507.

**15. My number or campaign got suspended later. Why?**
LC Phone monitors opt-out, bounce and error rates and sends warnings, then temporary suspensions; a healthy opt-out rate is typically 0 to 1%. Carriers can fine and suspend for spam, phishing or SHAFT content. Keep sending only what the campaign registered. See `post-registration-checklist.md`. Sources: HL 48001213941, Twilio 4410588996123.

**16. Texts are not sending (30034, 30007).**
30034 = the number is not linked to an approved campaign: Settings > Phone System > Phone Numbers > three dots > Select A2P campaign to Link. Sole-prop sub-accounts with a second number can trigger 30034 too. 30007 = carrier filtering (content). Sources: HL 155000008316, HL 155000006960, HL 48001222300.

**17. Existing numbers, ports and Twilio-to-LC-Phone moves?**
A number sends only once it is linked to an approved campaign and shows A2P Verified. Moving or porting numbers has its own HighLevel guides; re-link after the move. Sources: HL 155000009312, HL 155000006369.

**18. What exact consent wording is required?**
HighLevel publishes exact checkbox wording (`templates.md` section 3); the message types in it must match your campaign description. On Chat Widget Setup the wording is generated and locked for you. Sources: HL 155000007237, HL 155000008307.

**19. Do I have to remove forms and calendars from the site?**
For Chat Widget Setup, HighLevel says the widget must be the only form collecting SMS consent on the submitted page. Many creators remove every form and calendar from the whole site until approval; that is stricter than the help center and is their claim, not HighLevel's rule. Sources: HL 155000008307, HL 155000004539.

**20. Persona photo ID when buying a number: whose ID?**
Persona is a one-time identity check per sub-account when buying a +1 number on LC Phone; it does not replace A2P. The business's own authorized person completes it. Sources: HL 155000005798.

**21. What must the privacy policy and terms contain?**
Privacy: HighLevel's exact non-sharing clause, and never any wording about affiliation, selling or buying of leads. Terms: business identity, STOP opt-out and HELP support, "Carriers are not liable for delayed or undelivered messages", frequency and rates, a link to the privacy policy. Wording in `templates.md`. Source: HL 155000007237.

**22. Can I text a purchased list or cold-text people?**
No. Consent cannot be bought, sold or exchanged; purchased lists are prohibited, and registration does not create permission to text anyone. Sources: HL 48001213941, CTIA Messaging Principles (May 2023).

**23. Toll-free or local number?**
Different systems: local numbers use A2P 10DLC (brand + campaign); each toll-free number needs its own Toll-Free Verification. Toll-free is not a shortcut around A2P; it has its own rules (registration number, separate privacy and terms URLs, opt-in evidence). Sources: HL 48001222300, Twilio 13264118705051.

**24. Legal exposure: TCPA?**
A2P registration is a carrier registry process, not legal protection. This kit gives registry compliance information, not legal advice; ask your own lawyer about TCPA. Carrier fines for content violations are relayed by Twilio (Twilio 4410588996123).

**25. Do I need to re-register if the business, website or use case changes?**
Approved brand data can only be changed through HighLevel Support. Changing a campaign's use case after approval is a modification request that may re-trigger review; materially different message purposes may need a separate campaign. Sources: HL 155000008140, HL 155000000235.

---

**26. Form or chat widget: which one, and why?**
- **Using HighLevel: start with Chat Widget Setup.** It is HighLevel's default, "recommended" path. HighLevel generates the consent widget, the samples, the opt-in description and the opt-in message, and locks the STOP/HELP, frequency and rates disclosures so the live widget matches the submission. You paste one snippet into your site's body or footer. Rules: it must be the only form collecting SMS consent on the submitted page, and the site still needs a privacy policy and terms with the SMS clauses. Choose Marketing, Informational, or Mixed (two independent unchecked boxes). Source: HL 155000008307 (modified 2026-09-11), HL 155000004539, HL 155000008722.
- **Use a form (Manual Setup) when:** your site is not where consent happens (paper, QR code, kiosk, verbal, a lead form), your site runs a non-HighLevel form you keep, or the widget flow does not fit the program. Then the checkbox rules in `templates.md` section 3 apply in full, with the privacy and terms links in the form footer. Source: HL 155000007237.

**27. My opt-in, privacy or terms page is missing. Can it live on a subdomain (like sms.mybusiness.com), or must it be on my main domain?**
- **Opt-in page on a subdomain: allowed, with three conditions.** HighLevel: "Phone carriers allow subdomains (e.g. form.website.com) for A2P registration", when (1) the subdomain matches your brand (name, logo, look, feel), (2) it is obvious how people get to it (email, social posts, ads, or navigation from the main site), and (3) the page has the right CTIA disclosures and the right use case. Without a visible path "it can look like the subdomain exists only as a compliance front, which leads to rejections." Source: HL 155000007237, section "Using a Subdomain for A2P Registration" (modified 2026-07-30).
- **The Website URL is still your MAIN business site,** on the same domain as your brand registration, "not just the page with your form" (code 30891). Source: HL 155000004746 (modified 2026-10-12).
- **Chat Widget Setup:** the widget must load "on the website URL on your brand registration, not only on a subpage" (code 30896), so on that path the widget goes on the main site, not on a separate subdomain page. Source: HL 155000004746.
- **Privacy policy and terms:** "a live, direct link on your own domain. A pop-up does not count", linked from the page the widget sits on (code 30908) or from your form footer (HL 155000007237). Whether a privacy or terms page on a subdomain counts as "your own domain" is not stated in HighLevel's help center: not covered by my sources. Safest: publish privacy and terms on the main domain (for example mybusiness.com/privacy-policy) and link them from the subdomain page.

**28. What do most businesses pick? (the typical path)**
A small local US business with an EIN that sends reminders and updates plus an occasional offer, well under 6,000 message segments a day, usually lands here:
- **Brand:** Standard (an EIN means Standard, never sole proprietor), volume **Low Volume Standard** (up to 6,000 segments a day). Sources: HL 155000008140, HL 155000004539.
- **Campaign:** Chat Widget Setup ("recommended") with the **Mixed** message type, which HighLevel turns into the **Low Volume Mixed** use case with two separate unchecked consent boxes. Sources: HL 155000008722, HL 155000004539, HL 155000008307.
- **The rule that decides it:** pick Mixed only if your program really sends both promotional and informational texts; register what you actually send. Low Volume Mixed has the lowest throughput tier; pick something else if speed or scale matters. Sources: HL 155000008722, HL 155000000235.
- Context, not a rule: in our review of 234 HighLevel A2P tutorials on YouTube (2026-10-28), 31 of the 38 that name a use-case pick chose Mixed (Low Volume Mixed), and 44 of the 45 that name a volume pick chose low volume.

---
