// Single place for site-wide text and every outbound link.

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
  // Source repository for the guide.
  repo: 'https://github.com/hl7-eu/cancer-common',
  // Open issues on the guide in HL7 Jira (filter; needs a free HL7 Jira account).
  issues: 'https://jira.hl7.org/issues/?filter=24865',
  hl7Europe: 'https://hl7europe.org/',
  contact: 'mailto:phoenix@hl7europe.org',
  calls: 'mailto:phoenix@hl7europe.org?subject=Joining%20the%20PHOENIX%20calls',
  membership: 'mailto:phoenix@hl7europe.org?subject=PHOENIX%20membership',
};

export const actions = [
  {
    step: '1',
    title: 'Use the ECCDM',
    body: 'Read the implementation guide and map your cancer data to the model. The conceptual and logical models are agreed; FHIR and OMOP representations are being built on top.',
    cta: 'Open the implementation guide',
    via: 'hl7.eu',
    href: links.guide,
  },
  {
    step: '2',
    title: 'Give feedback on the model',
    body: 'Tried it on real data? Tell us what fits and what is missing. The first version is a milestone, and feedback decides what comes next.',
    detail: 'Issues are tracked in HL7 Jira (free account). To report one, choose <b>Create</b>, then project <b>FHIR Specification Feedback (FHIR)</b> and specification <b>EU Common Cancer Model (R4) (FHIR)</b>.',
    cta: 'See open issues',
    via: 'HL7 Jira',
    href: links.issues,
  },
  {
    step: '3',
    title: 'Join the PHOENIX calls',
    body: 'Sit in on the working calls where clinicians, researchers and standards experts discuss, test and extend the model.',
    cta: 'Email for the invite',
    via: 'phoenix@hl7europe.org',
    href: links.calls,
  },
  {
    step: '4',
    title: 'Become a PHOENIX member',
    body: 'Join the founding organisations in steering the work: set priorities, add capacity and represent your organisation.',
    cta: 'Ask about membership',
    via: 'phoenix@hl7europe.org',
    href: links.membership,
  },
];

// Label used for every link to the published implementation guide.
export const guideLabel = 'Open the implementation guide';
// Shown under the main guide buttons; update when the guide's status changes.
export const guideNote = 'HL7 Europe implementation guide · ballot closed, comments being reconciled';
