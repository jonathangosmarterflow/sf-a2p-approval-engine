# OUTPUT-SPEC: the exact package the A2P Approval Agent emits (a2p-kit 1.1.0)

The Smarter Flow page builder and any later automation parse this; the buyer can ignore the JSON block. The agent emits the human-readable package first (sections 1 to 12 below, in this order, with these exact headings) and ends with ONE fenced ```json block. The builder always reads the LAST ```json fence in the output.

## A. The human-readable package (headings, in order)

```
# A2P package for <business_name>
Kit: a2p-kit 1.1.0 | sources last verified 2026-10-28 | Registry compliance, not legal advice.
## 1. Eligibility screen            (clear / restricted / uncertain -> human review / prohibited -> STOP)
## 2. Brand path                    (decided, or CONDITIONAL with prerequisites + unknowns, or STOP)
## 3. Website gap audit             (one row per check: ✅ verified / ❌ gap / ⚠️ could-not-verify + fix; "Live, public, HTTPS, own domain" is its own row, ⚠️ unless a tool opened the URL)
## 4. Opt-in path and consent model (chat widget primary for HighLevel; or form; marketing_only / transactional_only / mixed)
## 5. Privacy Policy clause         (verbatim template; plus the "never mention selling or buying leads" check)
## 6. Terms SMS block               (filled template clauses 2a to 2e)
## 7. Consent checkbox text         (only the box(es) the consent model needs; skipped text explained on the widget path)
## 8. Opt-in confirmation, HELP reply, STOP reply
## 9. Campaign answers              (use case, description, sample 1, sample 2, opt-in flow description)
## 10. Trust Center field sheet     (every field in screen order per hl-flow.md, with the value to type)
## 11. HighLevel Ask AI prompt      (one code block)
## 12. Before you click Submit      (pre-submit checklist incl. Business Profile name; toll-free note only if it fits; post-registration checklist offer)
## 13. Pages I created for you     (only pages the buyer did not have: each in full, its source, where to publish it; omit when none)
```

Before the package, the agent runs THE WALK in SYSTEM-PROMPT.md (one question per message). The package ends with the disclaimer line, then the JSON block. If the eligibility screen says STOP, the package is only sections 1 and 2 and the JSON carries `"eligibility": {"status": "prohibited", ...}` with every template field set to "".

## B. The JSON block (schema)

Required fields (always present; use "" or [] when not applicable, never omit):

| Field | Type | Meaning |
|---|---|---|
| `kit_version` | string | "a2p-kit 1.1.0" |
| `last_verified` | string | "2026-10-28" |
| `synthetic` | bool | true only for a fictional/demo business |
| `business_name` | string | the name shown to texters (the DBA if one is declared, else the legal name) |
| `legal_name` | string | exactly as on the CP 575 / 147C (or the individual's name for a sole proprietor) |
| `ein_present` | bool | an EIN or accepted tax ID exists (never the number itself) |
| `brand_type` | enum | `sole_proprietor` / `low_volume_standard` / `high_volume_standard` / `conditional` / `not_eligible` |
| `eligibility` | object | `{"status": "clear" / "restricted" / "uncertain" / "prohibited", "notes": "..."}` |
| `optin_path` | enum | `chat_widget` / `manual_form` / `offline` |
| `consent_model` | enum | `marketing_only` / `transactional_only` / `mixed` |
| `use_case` | string | the HighLevel use case name |
| `campaign_description` | string | who sends, to whom, what and why, how they opt in, post-opt-in experience |
| `sample_1` | string | first sample message |
| `sample_2` | string | second sample message |
| `privacy_sms_clause` | string | the verbatim non-sharing clause (`templates.md` section 1), unchanged |
| `terms_block` | string | the filled clauses 2a to 2e, paragraphs separated by a blank line |
| `checkbox_marketing` | string | the filled marketing checkbox text, or "" when consent_model is transactional_only |
| `checkbox_transactional` | string | the filled non-marketing checkbox text, or "" when consent_model is marketing_only |
| `optin_confirmation` | string | filled template 4 |
| `help_reply` | string | filled template 5 |
| `stop_reply` | string | filled template 6 |
| `domain` | string | the main site's domain, no scheme (e.g. "example.com"), or "" if no site |
| `gaps` | array | `[{"item": str, "status": "verified" / "gap" / "could_not_verify", "note": str, "fix": str}]` |

Optional fields (include when known; the page builder degrades gracefully without them):
`dba_name`, `website` (https URL of the main site), `services_summary`, `contact` (`{"email", "phone", "address"}`, business contact only, never personal ID numbers), `sms_number`, `message_frequency`, `marketing_types`, `toll_free_privacy_clause` (only on a toll-free path), `disclaimer`, `pages_created` (`[{"page": "website" / "privacy" / "terms" / "optin", "source": "HighLevel sample 155000007237" / "templates.md" / "business copy", "publish_at": "https://..."}]`).

Rules the JSON must obey:
- **Never** include an EIN, SSN, date of birth, ID number, or the content of an uploaded document. `ein_present` is a boolean only.
- Template fields are the filled templates exactly; the `[bracket]` placeholders that remain are only the runtime variables in samples (`[First Name]`, `[Date]`).
- `privacy_sms_clause` must contain "No mobile information will be shared with third parties" and must not contain "lead generator", "sell", "sold" or "buy".
- Links are full `https://` on the business's own domain; no public URL shorteners.
- No em dashes.

## C. Example
A worked example on a fictional business is shown in the Smarter Flow A2P video.
