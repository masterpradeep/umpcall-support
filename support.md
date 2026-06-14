---
layout: default
title: Support
description: Help, FAQs, and contact for UmpCall — cricket toss, scorebook & club sync.
permalink: /support/
---

# UmpCall — Support

**App:** UmpCall — Cricket Toss, Counter & Scorebook  
**Developer:** GullyDev  
**Version:** 1.0.0  
**Platforms:** iOS 13+, Android 5.0+ (API 21+)  
**Package ID:** `com.umpire.umpire_toss_counter`

---

## Contact us

**Email:** [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com)

| Purpose | How to reach us | Response time |
|---------|-----------------|---------------|
| **General support & bugs** | [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com) | 3–5 business days |
| **Privacy / data deletion** | Same email — subject **`Privacy:`** | Within 30 days |
| **Report offensive content** | Same email — subject **`Report:`** | Within 72 hours |
| **Terms questions** | Same email or see [Terms of Service](/terms/) | 3–5 business days |

**When reporting a bug, include:**

- Device model and OS (e.g. iPhone 15, iOS 18 / Pixel 8, Android 14)
- UmpCall version (**Settings → About**)
- Steps to reproduce
- Screenshots or screen recording if UI-related
- Whether you were online (club/live) or offline

---

## Legal & policies

| Document | Link |
|----------|------|
| **Privacy Policy** | [/privacy/](/privacy/) |
| **Terms of Service** | [/terms/](/terms/) |
| **This support page** | [/support/](/support/) |

---

## What UmpCall does

UmpCall is built for umpires, scorers, club admins, and spectators.

### Works offline (no account)

- **Digital toss** — country coins + custom branded coin
- **Scorebook** — ball-by-ball scoring, scorecard, teams, match history
- **Umpire counter** — balls, overs, runs, wickets with undo and end-of-over voice

### Online (optional — for clubs & spectators)

- **Club cloud** — shared rosters, roles (admin / scorer / viewer), match handover
- **Player stats** — from completed club matches
- **Follow live match** — spectators enter a match code for a live scoreboard
- **Club owner recovery** — restore admin on a new phone with saved Club ID + scorer code

Internet is required only for club and live features. Store builds include cloud configuration; toss, counter, and solo scorebook never require login.

---

## Frequently asked questions

### How do I create a club?

1. **Settings → Club → Connect your club**
2. Tab **Create** → enter club name → **Create club**
3. Save your **Club ID** and **scorer join code** when prompted (required for recovery)
4. Share **Scorer code** with scorers and **Viewer code** with read-only members

### How do I recover admin on a new phone?

1. **Settings → Club → Connect your club**
2. Tab **Recover**
3. Enter the **Club ID (UUID)** and **scorer join code** you saved at creation
4. Tap **Recover admin access**

Both values are required. The viewer code cannot be used for recovery.

### What is the difference between scorer and viewer?

| Role | Edit rosters | Score matches |
|------|--------------|---------------|
| **Admin** (club creator) | Yes | Yes |
| **Scorer** | Yes | Yes |
| **Viewer** | Read-only | No — use **Follow Match** to watch |

Your role is set by **which join code** you enter, not a toggle in Settings.

### Why can’t I start a new club match?

Only **one in-progress match per club** is allowed at a time. Resume from the home banner, wait for the active scorer to finish, or abandon the match if you are the active scorer or admin.

### How does Follow Match work?

The scorer publishes a **match code** from the scoring screen. Spectators open **Watch Live Match** on the home screen and enter that code. No club membership required.

### Does UmpCall need an email or password?

**No.** Cloud features use an anonymous session on your device. No sign-up form.

### Wide / No Ball penalty runs

Set defaults in the **Counter → Settings (gear)** or in **Match setup** before starting a scorebook match (0–4 runs, for gully cricket rules).

### Voice announcements not working

Enable **Voice** in **Settings → Announcements**. UmpCall uses your device’s built-in text-to-speech. Check volume and system TTS language settings.

### Club sync failed / “too many tries”

- Check Wi‑Fi or mobile data
- Wrong join codes trigger rate limits — wait **15 minutes** after many failed attempts
- Try **Settings → Club → Load join codes** (admin)
- Leave and re-join only if needed

### How do I leave or delete data?

| Goal | Action |
|------|--------|
| Leave a club | **Settings → Club → Leave club** |
| Delete entire club (admin) | **Settings → Club → Disband club** |
| Remove local matches | Past matches / reset options in app |
| Remove everything on device | Uninstall UmpCall |
| Server-side erasure request | Email [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com) — subject **`Privacy:`** |

---

## App Store & Google Play reviewers

| Item | Details |
|------|---------|
| **Demo account** | Not required — no login |
| **Test offline** | Airplane mode — toss, counter, solo scorebook work |
| **Test club** | Settings → Club → Create club (network required) |
| **Test live follow** | Scorer publishes code; second device uses Follow Match |
| **Test recovery** | Create club → save Club ID + scorer code → Leave club → Recover tab |
| **Encryption** | HTTPS/TLS for cloud only; qualifies for standard export exemption |
| **Tracking / ads** | None |
| **In-app purchases** | None |

---

## Repository

This public repo hosts only the UmpCall **support and legal pages** for App Store and Google Play. App source is not published here.

- **Issues / feedback:** [support.umpcall@gmail.com](mailto:support.umpcall@gmail.com)
- **Site repo:** [github.com/masterpradeep/umpcall-support](https://github.com/masterpradeep/umpcall-support)

---

© 2026 GullyDev · UmpCall
