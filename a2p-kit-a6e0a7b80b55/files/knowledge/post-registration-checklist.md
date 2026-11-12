<!-- a2p-kit 1.2.0 | hand-built from official sources | sources last verified 2026-10-28 -->
> **a2p-kit 1.2.0** (sources last verified 2026-10-28). Registry compliance information, not legal advice. For TCPA and state-law questions, ask your own lawyer.

# After registration: staying compliant once you can text

**Registration is not permission.** An approved campaign lets your number carry the messages you registered, to people who consented to THAT sender for THAT purpose. It never creates permission to text an existing list, an imported spreadsheet, old customers who never opted in, or a purchased list. Consent cannot be bought, sold or exchanged, and opt-in is per campaign and sender, not transferable. (CTIA Messaging Principles and Best Practices, May 2023: https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf ; HighLevel LC Phone messaging policy: https://help.gohighlevel.com/support/solutions/articles/48001213941)

## 1. Consent evidence
- [ ] For every contact you text, you can show when, where and how they opted in. CTIA lists what to keep: timestamp, medium (web form, keyword, paper), the captured experience (what they saw), the campaign, IP address, phone number and the identity of the consenter. (CTIA, opt-in documentation)
- [ ] Keep every opt-in AND opt-out request on record. (CTIA)
- [ ] Your live form or widget still matches what you submitted (same wording, same unchecked optional boxes). On Chat Widget Setup the widget text is locked for this reason. (https://help.gohighlevel.com/support/solutions/articles/155000008307)

## 2. List provenance
- [ ] Every number on your list came from your own opt-in for this program. No purchased, rented, shared or scraped lists. (HL 48001213941, CTIA)
- [ ] Contacts who consented only to non-marketing texts never receive marketing texts. Execute channels based on their checkbox choices only. (https://help.gohighlevel.com/support/solutions/articles/155000007237)

## 3. Opt-out, STOP and HELP
- [ ] STOP and UNSUBSCRIBE (Twilio also recommends END, QUIT, HALT) stop all messages; one final confirmation only, naming your brand. START, YES or UNSTOP rejoins. In HighLevel, opt-out keywords put the contact on permanent DND automatically. (HL 48001213941, Twilio https://support.twilio.com/hc/en-us/articles/26149060902555)
- [ ] HELP gets a reply with your brand name and a phone number or email. (HL code 30890, https://help.gohighlevel.com/support/solutions/articles/155000007572)
- [ ] LC Phone adds your sender ID and "Reply STOP to unsubscribe" to the first message to a new contact; do not remove opt-out language from your own templates either. (HL 48001213941)

## 4. Quiet hours
- [ ] Do not send non-essential messages during quiet hours. The FCC under the TCPA defines quiet hours as 9:00 PM to 8:00 AM in the RECIPIENT's local time zone, and several states set their own stricter rules. (Twilio Compliance Toolkit docs, modified 2026-10-09: https://www.twilio.com/docs/messaging/features/compliance-toolkit). Ask your own lawyer about the states you text into.
- [ ] Texas: HighLevel has a one-toggle block for Texas recipients (SB 140) in Messaging Compliance, if your counsel says you need it. (https://help.gohighlevel.com/support/solutions/articles/155000006145)

## 5. Message drift vs the registered campaign
- [ ] What you send matches the registered use case, description and samples. New message types (for example adding promotions to a reminders-only campaign) need a campaign change or a new campaign; a use-case change after approval is a modification request that may re-trigger review. (https://help.gohighlevel.com/support/solutions/articles/155000000235)
- [ ] No content from the prohibited list in any message, link or landing page (SHAFT, cannabis/CBD, loans, crypto, gambling, sweepstakes, and the rest in `requirements.md`). (HL 155000007572)
- [ ] Links are full HTTPS links on your own domain; no public URL shorteners. (HL 155000007572)

## 6. Monitoring
- [ ] Watch opt-out, bounce and error rates per sub-account: HighLevel sends warnings, then temporary suspensions (all outbound SMS fail until 00:00 UTC); a healthy opt-out rate is typically 0 to 1%. (HL 48001213941, https://help.gohighlevel.com/support/solutions/articles/155000006385)
- [ ] New sub-accounts ramp in 8 daily levels (500 up to 5,000+); sending the full level pauses 24 hours before the next unlocks. Plan launches around it. (HL 48001213941)
- [ ] Check each number's A2P status tag (Settings > Phone System > Phone Numbers): only A2P Verified sends. (https://help.gohighlevel.com/support/solutions/articles/155000009312)
- [ ] Carriers fine and suspend for violations: T-Mobile content violations (spam, phishing, SHAFT) up to $10,000 per violation after a warning, as relayed by Twilio (https://support.twilio.com/hc/en-us/articles/4410588996123).
