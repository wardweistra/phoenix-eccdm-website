# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is European and national standards organisations, and collaborations working in oncology, that are choosing a cancer data model to build on. They must be convinced that the European Common Cancer Data Model (ECCDM) is the right foundation, rather than a competing or home-grown model. They arrive weighing credibility, governance, maturity, how the model relates to what they already use (HL7 FHIR, OMOP/OHDSI, mCODE, openEHR) and fit with European policy, above all the European Health Data Space (EHDS).

Secondary audiences follow from that decision. Implementers (FHIR/OMOP engineers and data managers at hospitals, registries and vendors) map their data to the model. Clinicians, researchers and standards experts join the PHOENIX working calls. Organisations consider PHOENIX membership.

## Product Purpose

cancermodel.eu is the front door to the ECCDM and to PHOENIX (Patient Health Oncological Expertise Network for International eXchange), the HL7 Europe initiative carrying the model forward. It explains why a shared cancer data model is needed now, what the ECCDM is and how mature it is, and how to get involved.

PHOENIX's vision, as stated in its kick-off material: *a Europe where cancer data can be understood and reused consistently, across institutions, borders and use cases.* Its mission verbs are **Unify** (one common approach instead of one model per project), **Connect** (clinical care and research along the whole cancer data value chain), **Standardise** (within HL7 Europe processes) and **Collaborate** (hospitals, clinicians, researchers, registries, vendors, policy makers).

Success means **adoption of the model**: visitors open the implementation guide, map their data to the ECCDM, and choose it as the base for their own standards work. Feedback, joining the calls and membership are the follow-on steps.

## Positioning

The ECCDM is developed by the HL7 Europe cancer working group and has a founding coalition: national cancer institutes, comprehensive cancer centres, hospitals, research institutes and a vendor. It builds on earlier research projects (IDEA4RC, PanCareSurPass, FLUTE). It aligns primary and secondary use in one model, is cancer-type agnostic, is designed to be realistic for EHRs, and is published as an HL7 implementation guide with FHIR and OMOP representations. The site's case is that this is the European, standards-body-backed, community-governed model, so others should build on it instead of starting another.

The arguments the initiative already makes, which the site can draw on:

- **One backbone, multiple representations.** The ECCDM is a conceptual and logical model ("a model, rather than a dataset"; "a model, rather than a format") with FHIR and OMOP as representations, not another competing format.
- **Map once.** Today each project builds its own ad hoc FHIR↔OMOP mapping; with the ECCDM, meaning is defined once and mapped once, aligned with mCODE/CodeX and the OHDSI Oncology working group.
- **Collect once, use many times; care first, research second.** Secondary use is derived from well-structured care data instead of re-abstracting data at every step.
- **The oncology layer for EHDS.** EHDS (Regulation (EU) 2025/327, in force since March 2025, phased application up to 2031) builds on HL7 Europe FHIR specifications (patient summary, laboratory, imaging, discharge report). PHOENIX adds the oncology layer on top (tumour, staging, treatments, outcomes) for primary use, and documented, comparable, OMOP-ready cancer data for secondary use through Health Data Access Bodies.
- **An accelerator, like CodeX in the US.** PHOENIX is an HL7 Europe accelerator: open, consensus-based, publishing public artefacts, in the mould of HL7 accelerators such as CodeX (mCODE), Vulcan and Helios.
- **Reuse where possible, align where needed, create only where necessary.**
- **From project-based to shared capacity.** So far the work was carried by individual projects and a small active group; PHOENIX gives it structured workstreams, implementation capacity and long-term sustainability.

## Operating Context

- The calls to action form a ladder (`src/data/site.ts`): use the ECCDM (implementation guide), give feedback (GitHub issues), join the PHOENIX calls (email), become a PHOENIX member (email).
- Outbound destinations: the published guide at hl7.eu, the continuous build at build.fhir.org, the source and issues at github.com/hl7-eu/cancer-common, hl7europe.org, and phoenix@hl7europe.org.
- The blog carries release notes, implementation stories and meeting summaries.
- Path from model to practice, as the initiative presents it: agree on meaning (ECCDM) → specify exchange (FHIR profiles and IG) → align for analytics (OMOP mapping, FHIR→OMOP tooling) → test on real data (reference implementations, connectathons) → adopt and feed back (pilots in cancer centres). "We need real implementations to feed the model."
- Ecosystem PHOENIX positions itself within: ESMO, ECO, EURACAN, OECI, ENCR, EUnetCCC, CANDLE, DIGICORE, FALCON, CancerWatch, UNCAN-Connect, EUCAIM, CodeX, OMOP/OHDSI, Hospitals on FHIR, and vendors such as Epic and InterSystems. These are context, not endorsements or partners; do not present them as such.

## Capabilities and Constraints

- Static Astro site; content is Markdown in the repo, edited directly or through Sveltia CMS at `/admin/`. Saving in the CMS commits to `main` and triggers a deploy.
- Deployed to bunny.net storage and CDN in an EU region. **No third-party tracking and no assets or fonts served from outside the EU**: keep hosting and dependencies privacy-first.
- Model status (November 2026): conceptual and logical models v1 completed and agreed by the working group; implementation guide ballot closed, comment reconciliation pending; OMOP mapping started; FHIR profiling and mapping next; scientific article in preparation. Keep this current; never overstate maturity.
- Known next domains: model evolution, genomics and new domains, FHIR profiling, formalising the OMOP mapping, implementation and testing, tools, adoption and sustainability. "The first version is a milestone, not the destination."
- The model is cancer-type agnostic (from breast to paediatric cancers), minimal and extensible: a cancer-history backbone, not an exhaustive dataset.
- Use cases named: data exchange for direct patient care, computable guidelines, cancer registry reporting, EHR endpoints for clinical trials, trial matching.
- Open: dedicated pages for the PHOENIX calls and membership (they are emails for now).

## Brand Commitments

- The PHOENIX logos and emblem in `public/brand/` (blue, white, white-tight, emblem) are binding and used as supplied.
- The site name is `cancermodel.eu`. The model is the "European Common Cancer Data Model (ECCDM)" and the initiative is "PHOENIX, an HL7 Europe initiative".
- Voice: plain, factual, European English (organisation, -ise spellings). The initiative's own lines can be reused: "PHOENIX brings the cancer community together to make health data interoperable: first for care, then for research and other uses"; "The only way forward is together. Help us shape the oncology standards of the future."
- The PHOENIX PowerPoint template (supplied by the user, not stored in this repo) is the reference for the PHOENIX identity: the full logo with the expansion "Patient Health Oncological Expertise Network for International eXchange" and "an HL7 Europe initiative", white and PHOENIX-blue variants, and soft blurred colour fields. Record the visual specifics in DESIGN.md, not here.
- HL7 trademark notice, as used in PHOENIX material: "® Health Level Seven and HL7 are registered trademarks of Health Level Seven International, registered with the United States Patent and Trademark Office."

## Evidence on Hand

- Founding organisations listed on the landing page: HL7 Europe, INCa, IKNL, PSCC, BIH, Centre Antoine Lacassagne, InterSystems Belgium, AP-HP, Charité Berlin, Charleroi Hospital.
- Context statistics on the landing page: 21 million new cancer cases and 10 million deaths worldwide in 2024; 34 million new cases a year projected for 2050.
- Predecessor projects: IDEA4RC, PanCareSurPass, FLUTE.
- Evidence of the problem: a survey of European cancer projects by the HL7 Europe working group (Athens, 2024) found heterogeneous models, OMOP/FHIR hard to map, a research focus on secondary use, the cancer journey needing reconstruction, and EHR availability still unknown.
- Formal collaboration: OHDSI Oncology working group and mCODE/CodeX.
- PHOENIX was launched at Hospitals on FHIR, Pisa, 21 October 2026. Source talks: "Why PHOENIX? Why now?" (Melle Sieswerda, IKNL), "The European Cancer Common Data Model project" (Roberta Gazzarata, ECCDM co-leader, HL7 Europe), "PHOENIX: from vision to a European cancer data ecosystem" (Renaud Schiappa, Centre Antoine Lacassagne). The ECCDM deck contains conceptual and logical model diagrams as images that could be reused with permission.
- No testimonials, adoption figures, implementation case studies or press exist yet. Do not fabricate them.

## Product Principles

1. **Earn trust with standards bodies.** Credibility, governance and honest maturity status come before persuasion techniques. Show how the ECCDM complements FHIR, OMOP and mCODE rather than competing with them.
2. **Adoption first.** Every surface should make the path to the implementation guide obvious; involvement in PHOENIX follows from use.
3. **State status honestly.** Show what is done, in progress and next; never imply the model is more complete than it is.
4. **European by construction.** Align with EHDS and HL7 Europe, and keep hosting and data handling privacy-first and EU-based.
5. **Editable by the community.** Content must survive CMS editing as plain Markdown.

## Accessibility & Inclusion

WCAG 2.2 AA is a hard requirement.
