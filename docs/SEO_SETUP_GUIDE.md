# Getting CK Studio found on Google, Bing and AI search

A step-by-step guide for the owner. Do the steps in order; each one takes 10–30 minutes.
Last updated: 25 October 2026.

**Be realistic:** nobody can promise the #1 spot for every search. Google ranks pages using hundreds of
signals: how useful the page is, how fast and safe the site is, how many trusted websites link to it,
reviews, and time. A new or redesigned site usually needs **4–12 weeks** to settle, and local searches
like "ad film makers in Hyderabad" depend most on your **Google Business Profile and reviews** (step 3).

---

## What the website already does (no action needed)

- Every page is ready-made for Google: full text, title, description, link previews.
- Google's "structured data" on every page: your business details (name, address, phone, hours, map link,
  social profiles), each article, each FAQ, each service and the page path (breadcrumbs).
- A sitemap listing all 57 pages: https://ckstudio.org/sitemap.xml
- A summary written for AI assistants: https://ckstudio.org/llms.txt
- AI search tools (ChatGPT, Perplexity, Claude, Google's Gemini, Copilot) are allowed to read the site.
- Secure (https), works on phones, quick to load, and 47 articles written to answer real questions.
- Google's own test (PageSpeed Insights, phone, 25 Oct 2026): SEO 100, Best Practices 100,
  Accessibility 96 (the one issue it flagged is fixed in this update), Performance 79 (this update makes
  the page respond sooner while it loads; re-test at https://pagespeed.web.dev after it is live).

---

## Step 1 — Google Search Console (most important)

This tells Google your site exists, shows which searches bring visitors, and warns you about problems.

1. Go to **https://search.google.com/search-console** and sign in with the business Google account
   (ckstudio.org@gmail.com).
2. Click **Add property**. You will see two boxes:
   - **Domain** (recommended, covers every version of the site): type `ckstudio.org` → Continue.
     Google shows a line that starts with `google-site-verification=…` → **Copy** it.
     - Sign in where you bought the domain name (GoDaddy, Hostinger, BigRock, Namecheap, etc.).
     - Open **DNS settings** for ckstudio.org → **Add record** → Type **TXT**, Name/Host **@**,
       Value: paste the line → Save. Don't change or delete any other records (they keep the site online).
     - Back in Search Console click **Verify**. If it fails, wait an hour and click Verify again.
   - **URL prefix** (if DNS is too difficult): type `https://ckstudio.org/` → choose **HTML tag** →
     copy the tag (it looks like `<meta name="google-site-verification" content="…">`) and **send it to
     Claude** to add to the website. Once that update is live, click **Verify**.
3. **Submit the sitemap:** left menu → **Sitemaps** → type `sitemap.xml` → **Submit**.
   After a day or two it should say **Success** with about 57 pages.
4. **Ask Google to read your key pages now:** paste each address into the search bar at the top
   (**URL inspection**) → **Request indexing**. Google allows about 10 a day, so do these first:
   - https://ckstudio.org/
   - https://ckstudio.org/services/ad-films-and-commercials/
   - https://ckstudio.org/services/movie-post-production/
   - https://ckstudio.org/services/design-and-branding/
   - https://ckstudio.org/services/vfx-and-cg/
   - https://ckstudio.org/services/social-media-and-web-design/
   - https://ckstudio.org/blog/ and https://ckstudio.org/faq/
   - Next day: your most important articles (for example the ad film cost guide and the "choosing an ad
     film production company in Hyderabad" guide).
5. **Check once a week for the first month** (left menu):
   - **Pages:** how many pages are indexed. "Discovered – not indexed" is normal for new pages; it shrinks.
   - **Performance:** which searches show your site, and how many people click.
   - **Experience / Core Web Vitals:** speed for real visitors (appears once enough people visit).
   - **Security & Manual actions:** should both say "No issues".

---

## Step 2 — Bing Webmaster Tools (Bing, ChatGPT search, Microsoft Copilot, DuckDuckGo, Yahoo)

1. Go to **https://www.bing.com/webmasters** and sign in (a Google account works).
2. Choose **Import from Google Search Console** (easiest; do Step 1 first) → allow access →
   tick ckstudio.org → **Import**. This verifies the site and copies the sitemap.
   (Or choose **Add site manually**, enter `https://ckstudio.org/`, and verify with the DNS TXT record
   or a meta tag, same idea as Step 1.)
3. Left menu → **Sitemaps**: check that `https://ckstudio.org/sitemap.xml` is listed; if not, add it.
4. Left menu → **URL Submission**: submit the same key pages as in Step 1.

---

## Step 3 — Google Business Profile (Google Maps and "near me" searches)

This is the biggest single factor for local searches such as "ad film production company Hyderabad".

1. Go to **https://business.google.com** → **Manage now** → sign in with the business account.
2. **Business name:** `CK Studio`, exactly as it appears on the website. Don't add extra words like
   "Best Ad Films Hyderabad"; Google suspends profiles for that.
3. **Category:** primary **Video production service**. Then add others that fit, for example
   **Film production company**, **Advertising agency**, **Graphic designer**, **Marketing agency**.
4. **Location:** yes, customers can visit → address exactly as on the website:
   `11-008 N/R, Gajularamaram, IDA Jeedimetla, Hyderabad, Telangana 500055`.
   Put the map pin exactly on the studio (then please send Claude the pin's location so the website's map
   link matches). If you also work at clients' locations, add **service areas** (Hyderabad, Telangana,
   Andhra Pradesh).
5. **Phone:** `+91 9700 970 762`. **Website:** `https://ckstudio.org`.
6. **Verify:** Google offers a video call, a short video of the studio (signboard, entrance and
   equipment), a phone call or a postcard. Follow its instructions; it can take a few days.
7. **Complete everything** once verified:
   - Hours: Monday–Saturday, 9 am – 6 pm (same as the website).
   - Description (up to 750 characters). Ask Claude to draft one from the website text.
   - Services: list each service from the website (Ad films, TVCs, AI ad films, movie post-production,
     DI/colour grading, DCP, teasers and trailers, VFX, logo animation, design, social media…).
   - Photos: logo, a cover photo, the studio, the team at work, editing suites, behind the scenes on
     shoots. Add new photos every month.
   - Posts: share a new project or offer every week or two (they show on Google).
8. **Reviews (very important):** in the profile click **Ask for reviews**, copy the link and send it to
   happy clients by WhatsApp. Reply politely to every review. Never buy reviews or post fake ones;
   Google removes them and can suspend the profile.

---

## Step 4 — Same details everywhere (helps Google and AI tools trust you)

Use exactly the same **name, address, phone and website** on every listing:

- **Bing Places** (https://www.bingplaces.com): import from your Google Business Profile.
- **Apple Business Connect** (https://businessconnect.apple.com): for Apple Maps and Siri.
- **JustDial**, **Sulekha** and other local directories you already use.
- **LinkedIn company page**, plus the Instagram, Facebook, YouTube and X bios: add `https://ckstudio.org`.
- **YouTube:** put `https://ckstudio.org` in every video description and in the channel's "About".

---

## Step 5 — AI search (ChatGPT, Google AI answers, Perplexity, Copilot, Claude)

- These tools mostly find businesses through the Google and Bing indexes, so Steps 1–2 matter most.
- They also learn from mentions on other websites: directory listings, partner websites, articles and
  YouTube. The more places describe CK Studio the same way (Hyderabad ad film and post-production
  studio, AI ad films, movie post-production), the more likely AI tools are to recommend you.
- The website already lets AI tools read it and gives them a summary at https://ckstudio.org/llms.txt.
- Once a month, ask ChatGPT, Perplexity and Google: "best ad film production companies in Hyderabad",
  "movie post-production studio Hyderabad", "AI ad film makers India". Note whether CK Studio appears.

---

## Every month (what moves rankings over time)

1. **Get 2–4 new Google reviews** and reply to all of them.
2. **Add real work:** send Claude thumbnails and YouTube links for portfolio items marked
   "Visuals coming soon", a real studio photo for the About section, and client-approved testimonials.
3. **Links from other websites:** ask clients and partners to link to https://ckstudio.org from their
   websites (for example "Ad film by CK Studio"). Local news, film festival listings and industry
   associations count a lot.
4. **One or two new articles** on questions clients actually ask you. Claude can write them in the same
   answer-first style; check them before publishing.
5. **Look at Search Console → Performance:** if a search shows your site often but few people click,
   ask Claude to improve that page's title and description.

## Send Claude when you have them

- The Search Console verification tag (only if you use the "URL prefix" method).
- The exact map pin of the studio (from Google Maps: right-click the pin → copy the numbers).
- Real photos and videos, client-approved testimonials, the designer's final logo files.
