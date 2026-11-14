// Single place for site-wide text and every outbound link.
// Entries marked TODO are placeholders that still need the real destination.

export const site = {
  name: 'cancermodel.eu',
  title: 'European Common Cancer Data Model',
  tagline: 'One shared model for cancer data across Europe.',
  description:
    'Adopt the European Common Cancer Data Model (ECCDM) and join the Phoenix Initiative by HL7 Europe.',
};

export const links = {
  // Published implementation guide (current ballot/release).
  guide: 'https://hl7.eu/fhir/cancer-common/',
  // Continuous build: the working draft, changes regularly.
  guideDraft: 'https://build.fhir.org/ig/hl7-eu/cancer-common/',
  // Source repository and issue tracker for the guide.
  repo: 'https://github.com/hl7-eu/cancer-common',
  issues: 'https://github.com/hl7-eu/cancer-common/issues',
  hl7Europe: 'https://hl7europe.org/',
  // TODO: replace with the real page or calendar invite for the Phoenix calls.
  calls: 'mailto:TODO@example.org?subject=Phoenix%20calls',
  // TODO: replace with the real Phoenix membership page or contact.
  membership: 'mailto:TODO@example.org?subject=Phoenix%20membership',
};

export const actions = [
  {
    step: '1',
    title: 'Use the ECCDM',
    body: 'Read the implementation guide and map your cancer data to the model. It is free to use, with a FHIR representation and mappings to OMOP.',
    cta: 'Open the guide',
    href: links.guide,
  },
  {
    step: '2',
    title: 'Give feedback on the model',
    body: 'Tried it on real data? Tell us what fits and what is missing. Every issue raised shapes the next version.',
    cta: 'Raise an issue',
    href: links.issues,
  },
  {
    step: '3',
    title: 'Join the Phoenix calls',
    body: 'Sit in on the working calls where the model is discussed, tested against use cases and extended.',
    cta: 'Get the invite',
    href: links.calls,
  },
  {
    step: '4',
    title: 'Become a Phoenix member',
    body: 'Help steer the initiative: set priorities, contribute expertise and represent your organisation.',
    cta: 'Ask about membership',
    href: links.membership,
  },
];
