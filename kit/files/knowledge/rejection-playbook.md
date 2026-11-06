<!-- a2p-kit 1.0.1 | built from the Smarter Flow a2p knowledge base | sources last verified 2026-10-28 -->
> **a2p-kit 1.0.1** (sources last verified 2026-10-28). Registry compliance information, not legal advice.
> A bare article number like 155000005200 means https://help.gohighlevel.com/support/solutions/articles/155000005200 .

# A2P rejection playbook: rejection code → exact fix (v1.1)

Source of every code: HighLevel "A2P Campaign Rejections, Required Fixes & Vetting Errors", https://help.gohighlevel.com/support/solutions/articles/155000007572 (article modified 2026-10-16), `last-verified: 2026-10-28`. Granular codes replaced the general ones on **2026-03-23**.

Tell the client: A2P rules can change mid-flight; we build to what is compliant as of the submission date. Never promise an approval date or a review time.

## How to read a rejection (new HighLevel flow)
1. Settings > Phone System > Trust Center > Brand & Campaigns > Campaigns > the rejected campaign > **View required fixes ->** on EVERY listed reason (each shows Error code, Rejection category, What it means, Correction needed). Also check the per-number **A2P status tag** under Phone Numbers. (155000007572, https://help.gohighlevel.com/support/solutions/articles/155000009312)
2. Fix every listed reason, then re-check the WHOLE campaign (description, use case, samples, website, consent flow, policy links). Reviewers judge the campaign as a whole. (https://help.gohighlevel.com/support/solutions/articles/48001229784)
3. **Resubmission is free since 2026-02-01.** If the fix needs a LOCKED field (use case, opt-in message), create a NEW campaign instead, which pays the $15 campaign vetting fee again. (https://help.gohighlevel.com/support/solutions/articles/48001223556)
4. **Never resubmit or create another campaign while one is Pending.** (155000004539)
5. On Chat Widget Setup campaigns the widget text is system-controlled: the fixes you can make are the website, removing other SMS consent forms from the submitted page, and the policy links. (155000007572)
6. **Prohibited codes (Part 2 below) are NOT resubmittable.** Stop and tell the client plainly. The only route is a support appeal with the subject "10DLC Campaign Appeal for [your business name or number]" (Help (?) > Start Chat > Agent Chat).
7. Brand error "**Maximum 3 tries exhausted**": three failed brand attempts. Send the CP 575 (or 147C) to HighLevel through the support form linked in 155000007572 so HighLevel submits it for manual brand approval. Plan the first brand submission as the real one.

## The ten classic causes (v1.0) mapped to their codes
| # | Cause | Codes | Exact fix |
|---|---|---|---|
| 1 | EIN / legal-name mismatch vs the IRS CP 575 / 147C (the top brand cause) | brand rejection; 30918 (DBA), 30927 (opt-in shows another company) | Match the legal name and EIN EXACTLY (punctuation, "LLC" vs "L.L.C.", spacing) in BOTH the submission AND the HighLevel Business Profile. If an EIN exists, Standard, never sole prop. |
| 2 | Website unreachable, thin, or name mismatch | 30919, 30920, 30921, 30922, 30891, 30907 | Live, public main business site with company name, specific services, contact info, privacy policy and an SMS program mention; same root domain as the brand. Pre-launch: say so in the description and give a screenshot URL. |
| 3 | Privacy Policy missing the non-sharing clause, or implying sharing/selling | 30932, 30908 (legacy 30897) | Add the exact clause from `templates.md` section 1; remove any wording about affiliation, selling or buying of leads; make the policy linked and public. |
| 4 | Pre-checked or missing consent checkbox | 30925 | Unchecked-by-default SMS consent checkbox(es), `templates.md` section 3. |
| 5 | Consent required to submit / bundled into terms | 30923, 30931 | Consent is a separate, optional action; the form submits without it. |
| 6 | Samples mismatch the use case / no brand / no opt-out / shortener / HTTP | 30893, 30892, 30889, 30911 | Brand name in each, STOP in at least one, [brackets] for variables, distinct samples, full HTTPS links on the client's domain, `templates.md` section 7. |
| 7 | Generic or mismatched campaign description | 30886, 30912, 30916 | Who sends, to whom, what and why, how they opt in, post-opt-in experience, from the actual use case. |
| 8 | Registered the agency / software name instead of the end business | 30926, 30894 | Register the CLIENT's own entity, EIN and site. One brand per business. |
| 9 | Demo / placeholder numbers or a different company in the opt-in flow | 30927 | The client's real name and numbers everywhere in the opt-in evidence. |
| 10 | Sole prop chosen but an EIN exists | 30903, 30915 | Re-register as Standard (Low or High Volume) with the EIN. |

## Part 1: resubmittable codes (fix, then resubmit free)
**Opt-in and consent**
| Code | Meaning | Fix |
|---|---|---|
| 30909 | Call-to-action / message flow cannot be verified | Describe every consent method fully; gated or offline opt-in = hosted screenshot link that opens logged out. |
| 30913 | Marketing consent not separate from transactional | Add a separate marketing consent; if transactional only, say so in the description. |
| 30917 | Several opt-in methods selected, not all described | Describe every method listed. |
| 30923 | Consent bundled into mandatory terms | Optional, separate consent; the service works without it. |
| 30924 | Consent text missing disclosures | Near the checkbox: message type, frequency, "message and data rates may apply", STOP (and HELP). |
| 30925 | Checkbox missing or pre-selected | Unchecked-by-default SMS checkbox. |
| 30931 | Form mechanics prevent declining | Explicit skip or unchecked box; one button must not grant all permissions. |
| 30932 | Privacy policy shares opt-in data for marketing | Exact non-sharing clause; remove sharing/selling wording. |
| 30896 | Opt-in workflow insufficient, consent missing, or shared with third parties | List every opt-in method per CTIA; hosted image for paper/gated opt-in. |
| 30887 | Opt-out workflow unclear, keywords or opt-out message missing | Describe the opt-out process; keywords; opt-out message acknowledges, names the brand, confirms no further messages (`templates.md` section 6). |
| 30890 | HELP reply lacks brand, phone or email | `templates.md` section 5. |

**Website**
| Code | Meaning | Fix |
|---|---|---|
| 30919 | Not enough business info or messaging disclosure | Company name, services, contact info, privacy policy, SMS program mention. |
| 30920 | Website is just a form | Business context around the form. |
| 30921 | Requires login | A public page describing the business and messaging program. |
| 30922 | Under construction / non-standard URL | Working standard URL; pre-launch note + screenshots. |
| 30891 | Invalid URL | Working site, or a pre-launch note. |
| 30907 | URL does not match brand or campaign | Site aligned with the brand and campaign. |
| 30908 | Privacy policy not found | Accessible policy + direct link in the message flow. |
| 30888 | No age gate | Robust age gate in the site or opt-in flow. |

**Business identity**
| Code | Meaning | Fix |
|---|---|---|
| 30914 | Sole-prop content does not match the registered name | Align description, samples, website with the sole-prop name. |
| 30915 | Sole prop using a corporate name | Re-register as Standard with the EIN. |
| 30918 | DBA does not match the legal name on file | Add the DBA to the brand registration first. |
| 30926 | Campaign references several companies | One campaign per brand. |
| 30927 | Opt-in evidence shows another company | Evidence must show the exact registered company name. |
| 30971 | Contact email on a personal domain | Business-domain email. |
| 30972 | Contact is not an authorized representative | Authorized representative of the business. |
| 30881 | Support email invalid or public-domain | Valid business-domain support email. |
| 30894 | Campaign tied to the wrong brand | Correct brand association. |
| 30903 | Brand does not meet sole-prop criteria | Standard brand + standard use case. |

**Campaign use case and samples**
| Code | Meaning | Fix |
|---|---|---|
| 30910 | Non-English fields | English, with translations of samples. |
| 30911 | Copy-pasted text across fields or identical samples | Unique content per field; distinct samples. |
| 30912 | Looks like personal/P2P messaging | Describe the software that triggers messages and how it serves customers. |
| 30916 | Lead generation vs lead nurture mixed up | Pick the one that matches. |
| 30928 | Social influencer messaging | Register a business use case. |
| 30929 | Emergency alerts | Not valid via 10DLC in HighLevel; ask support for alternatives. |
| 30930 | 100-campaign limit | Deregister unused campaigns. |
| 30886 | Description vague or mismatched | Accurate, detailed description. |
| 30893 | Samples missing, unclear or mismatched | Sample #1 promotional, #2 transactional, brackets, brand name, opt-out language. |
| 30892 | Shortener or non-HTTPS URL in samples | Full direct HTTPS URLs. |
| 30889 | Embedded phone number not in samples | Show it in a sample, or fix the selection. |

**Registration and brand**
| Code | Meaning | Fix |
|---|---|---|
| 30895 | Direct lending attribute missing | Select direct lending, or fix the description. |
| 30898 | Same EIN on several brands | Minimum brands per EIN; do not resubmit until the brand is updated. |
| 30995 | Messaging Service number limit reached | Contact Support. |

## Part 2: NOT resubmittable (prohibited; stop, do not resubmit)
- **SHAFT:** 30953 sex/adult · 30954 hate/profanity/violence · 30955 alcohol promotion · 30956 alcohol without a robust 21+ gate · 30957 firearms/fireworks/explosives · 30958 tobacco/vape.
- **Disallowed:** 30940 cannabis/CBD/illegal substances · 30941 prescription drugs · 30942 loan marketing (payday, auto title, personal) · 30943 third-party debt collection · 30944 gambling/betting · 30945 sweepstakes/contests · 30946 stock alerts · 30947 crypto trading/tokens · 30948 high-risk investments (forex, binary options) · 30949 debt reduction/consolidation · 30950 credit repair · 30951 third-party lead generation or MLM · 30952 non-federally compliant use case.
- **High risk:** 30959 fraudulent/misleading · 30960 phishing · 30961 high-risk domain reputation · 30962 deceptive marketing · 30963 public URL shorteners · 30964 HTTP instead of HTTPS. (30963/30964 are content fixes in practice: if the rest of the campaign is clean, remove the shortener or HTTP link and ask support whether a new campaign is needed.)
- **Legacy (before 2026-03-23):** 30882 terms · 30883 SHAFT · 30884 spam/phishing · 30885 high risk / third-party data sharing · 30897 disallowed content or third-party data sharing in the policy.

