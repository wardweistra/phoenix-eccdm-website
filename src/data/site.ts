// Single place for site-wide text and every outbound link.
// Entries marked TODO are placeholders that still need the real destination.

export const site = {
  name: 'cancermodel.eu',
  title: 'European Common Cancer Data Model',
  tagline: 'One shared model for cancer data across Europe.',
  description:
    'Adopt the European Common Cancer Data Model (ECCDM) and join PHOENIX, the HL7 Europe initiative making cancer data interoperable.',
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
  // TODO: replace with the real page or calendar invite for the PHOENIX calls.
  calls: 'mailto:TODO@example.org?subject=Phoenix%20calls',
  // TODO: replace with the real PHOENIX membership page or contact.
  membership: 'mailto:TODO@example.org?subject=Phoenix%20membership',
};

export const actions = [
  {
    step: '1',
    title: 'Use the ECCDM',
    body: 'Read the implementation guide and map your cancer data to the model. The conceptual and logical models are agreed; FHIR and OMOP representations are being built on top.',
    cta: 'Open the guide',
    href: links.guide,
  },
  {
    step: '2',
    title: 'Give feedback on the model',
    body: 'Tried it on real data? Tell us what fits and what is missing. The first version is a milestone, and feedback decides what comes next.',
    cta: 'Raise an issue',
    href: links.issues,
  },
  {
    step: '3',
    title: 'Join the PHOENIX calls',
    body: 'Sit in on the working calls where clinicians, researchers and standards experts discuss, test and extend the model.',
    cta: 'Get the invite',
    href: links.calls,
  },
  {
    step: '4',
    title: 'Become a PHOENIX member',
    body: 'Join the founding organisations in steering the work: set priorities, add capacity and represent your organisation.',
    cta: 'Ask about membership',
    href: links.membership,
  },
];
