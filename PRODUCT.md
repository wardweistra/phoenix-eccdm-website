# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is European and national standards organisations, and collaborations working in oncology, that are choosing a cancer data model to build on. They must be convinced that the European Common Cancer Data Model (ECCDM) is the right foundation, rather than a competing or home-grown model. They arrive weighing credibility, governance, maturity and fit with European policy, such as the European Health Data Space.

Secondary audiences follow from that decision. Implementers (FHIR/OMOP engineers and data managers at hospitals, registries and vendors) map their data to the model. Clinicians, researchers and standards experts join the PHOENIX working calls. Organisations consider PHOENIX membership.

## Product Purpose

cancermodel.eu is the front door to the ECCDM and to PHOENIX (Patient Health Oncological Expertise Network for International eXchange), the HL7 Europe initiative carrying the model forward. It explains why a shared cancer data model is needed now, what the ECCDM is and how mature it is, and how to get involved.

Success means **adoption of the model**: visitors open the implementation guide, map their data to the ECCDM, and choose it as the base for their own standards work. Feedback, joining the calls and membership are the follow-on steps.

## Positioning

The ECCDM is developed by the HL7 Europe cancer working group and has a founding coalition: national cancer institutes, comprehensive cancer centres, hospitals, research institutes and a vendor. It builds on earlier research projects (IDEA4RC, PanCareSurPass, FLUTE). It aligns primary and secondary use in one model, is cancer-type agnostic, is designed to be realistic for EHRs, and is published as an HL7 implementation guide with FHIR and OMOP representations. The site's case is that this is the European, standards-body-backed, community-governed model, so others should build on it instead of starting another.

## Operating Context

- The calls to action form a ladder (`src/data/site.ts`): use the ECCDM (implementation guide), give feedback (GitHub issues), join the PHOENIX calls (email), become a PHOENIX member (email).
- Outbound destinations: the published guide at hl7.eu, the continuous build at build.fhir.org, the source and issues at github.com/hl7-eu/cancer-common, hl7europe.org, and phoenix@hl7europe.org.
- The blog carries release notes, implementation stories and meeting summaries.

## Capabilities and Constraints

- Static Astro site; content is Markdown in the repo, edited directly or through Sveltia CMS at `/admin/`. Saving in the CMS commits to `main` and triggers a deploy.
- Deployed to bunny.net storage and CDN in an EU region. **No third-party tracking and no assets or fonts served from outside the EU**: keep hosting and dependencies privacy-first.
- Model status on the site: conceptual and logical models done; implementation guide ballot closed with comment reconciliation pending; OMOP mapping started; FHIR profiling and mapping pending. Keep this current; never overstate maturity.
- Use cases named: data exchange for direct patient care, computable guidelines, cancer registry reporting, EHR endpoints for clinical trials, trial matching.
- Open: dedicated pages for the PHOENIX calls and membership (they are emails for now).

## Brand Commitments

- The PHOENIX logos and emblem in `public/brand/` (blue, white, white-tight, emblem) are binding and used as supplied.
- The site name is `cancermodel.eu`. The model is the "European Common Cancer Data Model (ECCDM)" and the initiative is "PHOENIX, an HL7 Europe initiative".
- Voice: plain, factual, European English (organisation, -ise spellings).

## Evidence on Hand

- Founding organisations listed on the landing page: HL7 Europe, INCa, IKNL, PSCC, BIH, Centre Antoine Lacassagne, InterSystems Belgium, AP-HP, Charité Berlin, Charleroi Hospital.
- Context statistics on the landing page: 21 million new cancer cases and 10 million deaths worldwide in 2024; 34 million new cases a year projected for 2050.
- Predecessor projects: IDEA4RC, PanCareSurPass, FLUTE.
- No testimonials, adoption figures, case studies or press exist yet. Do not fabricate them.

## Product Principles

1. **Earn trust with standards bodies.** Credibility, governance and honest maturity status come before persuasion techniques.
2. **Adoption first.** Every surface should make the path to the implementation guide obvious; involvement in PHOENIX follows from use.
3. **State status honestly.** Show what is done, in progress and next; never imply the model is more complete than it is.
4. **European by construction.** Align with EHDS and HL7 Europe, and keep hosting and data handling privacy-first and EU-based.
5. **Editable by the community.** Content must survive CMS editing as plain Markdown.

## Accessibility & Inclusion

WCAG 2.2 AA is a hard requirement.
