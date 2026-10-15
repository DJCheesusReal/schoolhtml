PROJECT RATIONALE — MCSR Ranked Hub
==================================

1. Problem addressed
--------------------
This single-page site collects resources and streamer links for players who want to practice and play MCSR Ranked. It addresses the problem of finding essential tools (mods, bots, store, stats) and discovering active streamers in one concise hub.

2. Comparable solutions & evidence found
---------------------------------------
I inspected the repository contents (index.html, style.css). There are also external links in the page to authoritative resources:
- Mod page: https://modrinth.com/mod/mcsr-ranked
- Ninjabrain Bot: https://github.com/Ninjabrain1/Ninjabrain-Bot
- Store: https://store.mcsrranked.com/category/tiers
- Stats: https://mcsrranked.com/stats

No separate research files, citations, or user testing artifacts were present in this repository. Missing items you may want to supply:
- Assignment notes, grading rubric, or external research documents that informed design.
- User personas, analytics data, or usability test results.

3. Features adopted and justification
------------------------------------
- Single-page structure with in-page navigation: quick jumps to About, Resources, and Stream sections make it easy for players to find what they need quickly.
- Resource rows with action buttons: each resource has a short description and a clear action link (Get Mod / Download / Open Store / View Stats).
- Streamer cards linking to Twitch channels: provides direct access to live streams; opening in a new tab prevents losing the hub page.
- Dark-green visual theme: retained for brand consistency with site’s original colors and to maintain the intended visual identity.

4. Usability features present and rationale
-------------------------------------------
- Clear headings (h1, h2, h3) and descriptive paragraph text help scanability.
- In-page navigation anchors let users reach sections quickly.
- Action links are explicit and have descriptive labels (Get Mod, Download, Open Store).
- Buttons styled with strong contrast (green on dark background) to aid discoverability.

5. Usability issues found and fixes applied
-------------------------------------------
- Issue: three-column streamer grid caused horizontal scrolling on narrow screens.
  - Fix: added responsive CSS to collapse streamer-list to a single column at <=700px.
- Issue: HTML/CSS selector mismatch (id="stream" vs #streamers) prevented margin on the stream section from applying.
  - Fix: updated stylesheet selector to #stream.
- Accessibility improvements added:
  - Nav given aria-label.
  - Focus outlines for links/buttons to aid keyboard users.

6. Measurable success criteria (testable)
-----------------------------------------
These criteria can be objectively checked:

- Navigation links: each top navigation link navigates to a matching in-page target (anchors #about, #resources, #stream). — CHECKABLE by clicking links.
- Resource links: each resource action link (<a>) points to its intended external URL and opens (mod, bot, store, stats). — CHECKABLE by visiting each href.
- Logo image: <img> has src, alt, width, and height attributes. — CHECKABLE by inspecting index.html.
- External stylesheet: index.html links to style.css and the stylesheet contains explicit uses of background-color, border-color, border-style, border-width, color (both named and hex), font-family, font-size, width, and height. — CHECKABLE by opening style.css.
- Streamer layout: at desktop widths the streamer-list shows three columns; at narrow widths (<=700px) it becomes a single column without horizontal scrolling. — CHECKABLE by resizing the browser or using devtools.
- Keyboard accessibility: landing page links and buttons receive visible focus outlines. — CHECKABLE by tabbing through page elements.

7. Verification performed
-------------------------
- I updated index.html to include logo width/height attributes and added an aria-label to nav.
- I verified the file structure includes index.html and style.css.
- I updated style.css to include explicit border property declarations, both named and hex colors, font-family and font-size, and responsive rules.
- I fixed the CSS selector mismatch: style.css now targets #stream.

8. Missing evidence / items to supply
------------------------------------
- Any assignment-specific research notes or references you want quoted.
- User research, personas, or test data to include.

9. Next steps
-------------
- If you want additional small improvements (e.g., aria labels on resource links, small copy changes), provide them and I will include them.
