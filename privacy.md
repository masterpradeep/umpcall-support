---
layout: default
title: Privacy Policy
description: How UmpCall handles your data — no ads, no sale of data, offline-first.
permalink: /privacy/
---

**Effective date:** June 11, 2026  
**Last updated:** June 14, 2026

**App:** UmpCall — Cricket Toss, Counter & Scorebook  
**Developer / data controller:** GullyDev (UmpCall)  
**Platforms:** iOS, Android  
**Contact:** [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com) (prefix `Privacy:` for data requests)

This policy describes how UmpCall handles information when you use our mobile app. It applies to all users worldwide and is written for both **Apple App Store** and **Google Play** compliance.

---

## Summary (plain language)

| Topic | Answer |
|-------|--------|
| Ads | **None** |
| Analytics / tracking | **None** |
| Sale of data | **None** |
| Email login | **None** — anonymous session for cloud features only |
| Offline use | Toss, counter, and solo scorebook work **without** sending data off your device |
| Cloud use | Club sync, live follow, and handover send **user-entered** names and scores over **HTTPS** when you choose those features |
| Payments | App is **free** — no in-app purchases |

---

## 1. Information we handle

### 1.1 Stored on your device (local)

The following stays on your phone or tablet unless you choose to sync it:

| Data | Purpose |
|------|---------|
| Umpire nickname | Personalization (“Sir [Name]”) |
| Club name (local label) | Header display |
| Theme and preferences | Voice, haptics, wide/no-ball defaults, coin selection |
| Toss history | Recent toss results |
| Counter state | Balls, overs, runs, wickets |
| Scorebook matches | Ball-by-ball scores, teams, rosters, match history |
| Club ID (UUID) | Shown to club **owners** after create — saved by you for recovery on a new phone |
| Custom coin images | Copied from your photo library to app storage only |

We do **not** upload custom coin images to the cloud.

**Device permissions (optional):**

| Permission | Why | When |
|------------|-----|------|
| Photo library / photos | Pick an image for a custom toss coin | Only when you tap to add a custom coin |
| Network | Club cloud and live match follow | Only when you use online features |
| Keep screen on | Counter and scoring during a match | While those screens are open |

We do not request location, contacts, microphone, or camera (except photo picker for custom coins).

### 1.2 Sent to our cloud (when you use online features)

On **first use of cloud features** (network-enabled store builds), the app creates an **anonymous server session ID** via Supabase Auth. No email, phone, or password is required.

When you **create or join a club**, **recover club admin access**, **publish a live match**, or **sync a match**, the app may send:

| Data | Purpose |
|------|---------|
| Anonymous session identifier | Tie your device to club membership |
| Club name, team names, player names | Shared rosters and scorecards |
| Match scores and ball-by-ball state | Club handover, resume, player stats, archives |
| Live match code + score snapshot | “Follow Match” for spectators |
| Join codes entered | Club membership (scorer or viewer role) |
| Club ID + scorer code (recovery only) | Verify club ownership on a new device — not stored beyond membership update |
| Security logs | Failed join/recovery attempts (anonymous ID + timestamp) for abuse prevention |

You control what is synced by whether you link a club or publish a live match. Match and team names are **user-provided content** entered by you or your league.

### 1.3 What we do not collect

- Email address, phone number, or postal address (unless you voluntarily include them in a support message)
- Precise GPS location
- Contacts, calendar, SMS, or microphone recordings
- Advertising identifiers or cross-app tracking
- Payment or financial information (the app is free; no subscriptions)
- Health, fitness, or biometric data

---

## 2. Optional cloud features (what goes online)

If you **choose** to use club sync or live match follow, the app may send **user-entered** content over an **encrypted connection** to our cloud provider:

- Team and player names, match scores, and related match state you enter
- Codes you type to join a club or follow a live match
- An anonymous session identifier (no email or password)

Toss, counter, and solo scorebook **without** club or live features do **not** send this data off your device.

Cloud hosting is provided by **Supabase** ([privacy policy](https://supabase.com/privacy)) as our infrastructure processor only.

---

## 3. Legal bases and use of data

We process data only to:

- Operate the app you requested (toss, counter, scorebook)
- Sync match and club data you explicitly enable
- Respond to support, privacy, or abuse reports you send us

We do **not** use your data for advertising, profiling, or marketing.

---

## 4. Sharing with third parties

| Recipient | Why | Data shared |
|-----------|-----|-------------|
| **Supabase** | Cloud hosting for club and live features (Ireland / EU region) | User-provided match/team data, anonymous session ID |
| **Apple App Store / Google Play** | App distribution | Standard install and crash metadata per store policies (outside our direct control) |

We do **not** sell or rent your information to data brokers or advertisers.

---

## 5. Data retention and deletion

| Location | Retention | How to delete |
|----------|-----------|---------------|
| Your device | Until you reset or uninstall | Counter/match reset in app; uninstall UmpCall |
| Club cloud | While the club exists and admins remain | **Leave club** (Settings → Club); **Disband club** (admin); contact us for club-wide erasure |
| Live match | While published (typically hours) | Scorer stops live session or match completes |
| Anonymous session | Managed by backend | Cleared when you leave club or session expires |

**Your choices:**

1. **Leave club** — removes your membership; local data stays on device  
2. **Disband club** (admin) — deletes club cloud data for all members  
3. **Uninstall** — removes local app data  
4. **Request erasure** — email [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com) with subject **`Privacy:`**; we respond within **30 days**

Leaving a club does not delete match archives other members contributed. Uninstalling removes local data on your device.

---

## 6. Children’s privacy

UmpCall is suitable for all ages (store rating **4+ / Everyone**). We do not knowingly collect personal information from children for marketing. Club and match data are entered by league operators. If you believe a child has provided personal information through support channels, contact us and we will delete it.

**COPPA (US):** We do not knowingly collect personal information from children under 13 through the app. League admins are responsible for player names they enter.

---

## 7. Security

We use **encryption in transit (HTTPS/TLS)** for cloud features and **access controls** on our backend. Match and roster data on your device stays in local app storage until you sync or uninstall.

No method of storage or transmission is 100% secure. Use online features only with people you trust in your league. **How to use join codes safely** is described in our [Terms of Service]({{ '/terms/' | relative_url }}) (Section 3).

### 7a. Data breaches

If a breach affecting your personal data occurs, we will notify affected users and regulators as required by applicable law.

### 7b. Free community use — limitation of responsibility

UmpCall is provided **free of charge** as a community scoring tool for cricket leagues and casual matches. We take reasonable steps to protect data, but **no online service can guarantee perfect security or permanent availability**.

Cloud features depend on third-party infrastructure (Supabase). We are **not responsible for loss of scores, rosters, or other user-entered data** caused by outages, device failure, user error, unauthorized access despite our safeguards, or events outside our reasonable control — **except where applicable law requires otherwise** (for example, mandatory breach notification or consumer rights in your country).

**You are responsible** for what team and player names you enter and for keeping **official league records** elsewhere if your competition requires them. For full legal terms, see our [Terms of Service]({{ '/terms/' | relative_url }}) (Sections 8–9: No warranty & Limitation of liability).

### 7c. Access codes

Share codes (club join, live match, recovery) control who can access your data. **Your league is responsible for keeping them confidential.** Details: [Terms of Service]({{ '/terms/' | relative_url }}) Section 3.

---

## 8. Your rights (GDPR / CCPA / similar)

Depending on where you live, you may have the right to access, correct, delete, or export personal data we hold about you, and to object to certain processing. To exercise these rights, email [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com) (subject **`Privacy:`**). EU users may lodge a complaint with your local supervisory authority.

We do **not** sell personal information (CCPA “Do Not Sell” — not applicable).

---

## 9. International users

UmpCall is operated from the **United Kingdom**. Cloud data for club and live features is processed on **Supabase** servers in the **Ireland (EU)** region. By using online features, you consent to this transfer for app functionality only.

---

## 10. Store disclosures (Apple & Google)

### Apple App Privacy (nutrition labels)

When cloud features are used, we declare:

- **Name** (team/player names, nickname) — linked to user — **App Functionality** — not used for tracking  
- **User Content** (match/score data) — linked — **App Functionality** — not used for tracking  
- **User ID** (anonymous session) — linked — **App Functionality** — not used for tracking  

**Tracking:** No. **Data linked to you for tracking:** No. **Data used to track you:** No.

Offline-only use (toss, counter, solo scorebook) collects nothing off-device.

### Google Play Data safety

| Data type | Collected | Shared | Purpose | Optional | Encrypted in transit | Deletion |
|-----------|-----------|--------|---------|----------|----------------------|----------|
| Name | Yes (if cloud used) | No (not sold) | App functionality | Yes | Yes | Leave club / request |
| Other user-generated content (scores) | Yes (if cloud used) | No | App functionality | Yes | Yes | Leave club / request |
| User IDs (anonymous session) | Yes (if cloud used) | No | App functionality | Yes | Yes | Leave club / request |

**No ads. No analytics SDKs. Data not sold.**

---

## 11. Changes to this policy

We may update this policy when features change. The “Last updated” date will change. Continued use after an update means you accept the revised policy. Material changes will also be reflected in the in-app **Privacy & Legal** screen.

---

## 12. Contact us

| Purpose | Contact |
|---------|---------|
| General support | [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com) |
| Privacy / data requests | Same email — subject **`Privacy:`** |
| Report offensive content | Same email — subject **`Report:`** |
| Privacy & data protection (UK) | [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com) — response within 30 days |

---

## 13. Related documents

- [Terms of Service]({{ '/terms/' | relative_url }})  
- [Support]({{ '/support/' | relative_url }})  
- In-app: **Settings → About → Privacy & Legal**

---

© 2026 GullyDev · UmpCall