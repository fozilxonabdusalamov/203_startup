# JobLink — Information Architecture & Wireframe Specs

1. Sitemap & URL Structure
Public
- /                Home (Landing)
- /jobs            Jobs list (filters, map toggle)
- /jobs/:slug      Job detail
- /companies       Companies directory
- /company/:slug   Company profile
- /mardikor        “Mardikor Bazori” mode (map-first)
- /pricing         Pricing & plans
- /blog            Blog list
- /blog/:slug      Blog detail
- /help            Help Center
- /legal/terms, /legal/privacy, /legal/cookies
- /auth/login, /auth/register, /auth/forgot

Job Seeker (Dashboard)
- /u/dashboard         Overview (cards)
- /u/profile           Profile editor (multi-step)
- /u/applications      Applications (kanban/list)
- /u/saved             Saved jobs
- /u/messages          Messages (chat)
- /u/notifications     Notifications
- /u/settings          Account, privacy, language

Employer (Dashboard)
- /e/dashboard         Overview
- /e/company           Company profile
- /e/jobs              Job listings
- /e/jobs/new          Create job (wizard)
- /e/jobs/:id          Job detail (pipeline)
- /e/candidates        Search CVs (if Pro)
- /e/messages          Messages
- /e/team              Team & Roles
- /e/billing           Plans, invoices
- /e/analytics         Analytics

Admin (separate base)
- /admin/login
- /admin/dashboard
- /admin/moderation/jobs, companies, reports
- /admin/users, /admin/companies
- /admin/plans, invoices, transactions
- /admin/cms (pages, posts, banners)
- /admin/taxonomy (categories, skills, locations)
- /admin/settings (feature flags, localization)
- /admin/audits, /admin/disputes

2. Key Page Wireframe Specifications (Component-level)

2.1. Landing (/)
- Hero: search bar (keywords, location), CTA (Find Jobs / Post Job)
- Stats: jobs posted, hires made, active users
- Categories: top industries grid (icons)
- How it works: 3-step for seekers & employers
- Featured Jobs: horizontal cards
- Testimonials: carousel
- Blog highlights
- Footer: links, language switcher, socials

2.2. Jobs List (/jobs)
- Filters sidebar: keyword, location (radius slider), job type, salary range, experience, category, skills (multi-select), remote toggle
- Top bar: total count, sort, view toggle (list/map)
- Results: job cards with hover states (title, company, salary, tags, distance, posted time)
- Empty state: tips to adjust filters
- SEO: indexable facets (canonical)

2.3. Job Detail (/jobs/:slug)
- Header: title, company, location, salary, job type, posted time
- CTA: Apply, Save, Share
- Tabs: Description, Requirements, Company, Location map
- Sidebar: recruiter contact (private), similar jobs
- Schema.org: JobPosting structured data

2.4. “Mardikor Bazori” (/mardikor)
- Map-first view with pins (jobs/workers)
- Toggle: “I’m available now” (duration, rate)
- Quick post: title, rate, location, headcount
- Safety tips & verification badges
- Real-time updates (websocket)

2.5. Job Seeker Profile (/u/profile)
- Multi-step wizard:
  1) Basic info & photo
  2) Experience timeline (positions)
  3) Education, certifications
  4) Skills (levels), languages
  5) Portfolio (images, links)
  6) Preferences (location, salary, types)
  7) Visibility & notifications
- Completeness meter; inline validation

2.6. Applications (/u/applications)
- Kanban or table views
- Columns: submitted, reviewed, shortlisted, interviewed, offered, hired, rejected
- Actions: withdraw, message, schedule, upload

2.7. Employer: Create Job (/e/jobs/new)
- Step 1: Basics (title, category, type, headcount)
- Step 2: Details (desc, responsibilities, requirements)
- Step 3: Compensation (range, currency, benefits)
- Step 4: Location (map, remote flag)
- Step 5: Screening (questions, must-have skills)
- Step 6: Publish & Boost (payment)
- Preview mode, draft autosave, validation

2.8. Messaging (/messages)
- Thread list, recipient info panel
- Composer: text, emojis, attachments, templates
- Indicators: online, typing, delivered, read
- Translate toggle (Uz/Ru/En)

3. Components Library (mapping to design system)
- Form: TextField, Select, MultiSelect (chips), RangeSlider, FileUpload (drag & drop), Stepper
- Data: Cards, ListItem, Table, Pagination, Badges, Tags
- Feedback: Toast, Snackbar, Modal, EmptyState, Skeletons
- Navigation: Header, Sidebar, Tabs, Breadcrumbs
- Map: Pin, Cluster, Drawer
- Charts (Analytics): Bar, Line, Donut

4. States & Edge Cases
- Loading: skeletons + spinners
- Empty: guidance copy
- Error: retry, contact support
- Offline (PWA): cache critical pages; queue actions

5. Accessibility (WCAG 2.1 AA)
- Keyboard navigable
- Contrast ratio compliance
- Aria labels; focus management
- Captions for video interview feature

6. Localization
- Language switch persists; server-side negotiated
- All static copy via i18n keys
- Right pluralization & date/time formats

7. SEO Strategy
- SSR/Pre-render for public pages
- Clean slugs: /jobs/senior-react-developer-tashkent-1234
- Structured data: JobPosting, Organization
- Canonicals, meta, sitemap.xml, robots.txt