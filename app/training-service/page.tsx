import type { Metadata } from "next";
import { CareCta } from "@/components/common/CareCta";
import { QualityGovernanceStrip } from "@/components/common/QualityGovernanceStrip";
import { ReasonsGrid } from "@/components/common/ReasonsGrid";
import { AssetImage } from "@/components/ui/AssetImage";
import { FaqSection, InnerHero, PageShell } from "@/components/pages/InnerPages";

export const metadata: Metadata = {
  title: "Training Services | Rumax",
  description: "Rumax healthcare training services."
};

type TrainingProps = {
  searchParams?: Promise<{ step?: string }>;
};

type TrainingField =
  | {
      kind?: "input" | "select" | "textarea";
      label: string;
      placeholder: string;
      width?: "wide";
    }
  | {
      kind: "choice";
      label: string;
      options: string[];
      width?: "wide";
    }
  | {
      kind: "upload";
      label: string;
      width?: "wide";
    }
  | {
      kind: "checkbox";
      label: string;
      width?: "wide";
    }
  | {
      kind: "notice";
      title: string;
      body: string;
      consent: string;
      width?: "wide";
    };

const trainingIntro =
  "Kickstart your journey in the care sector with Rumax Limited.\nBased in Basildon, Essex, we offer modern, streamlined training services designed to equip you with the practical skills and confidence you need to thrive. Whether you are taking your first steps into healthcare or looking to upskill, our expert-led programs are built around your success. Start building a career with purpose today.";

const trainingFeatures = [
  {
    iconAsset: "supported-feature-person-centred.svg",
    title: "Person-Centred Support",
    description: "Your goals, preferences, and aspirations are at the heart of everything we do. We support you to live the life you choose."
  },
  {
    iconAsset: "supported-feature-skill-development.svg",
    title: "Skill Development",
    description: "We help you develop practical life skills including budgeting, cooking, cleaning, and managing your tenancy."
  },
  {
    iconAsset: "supported-feature-community.svg",
    title: "Community Integration",
    description: "Support to access community activities, education, employment, and build meaningful social connections."
  },
  {
    iconAsset: "supported-feature-health.svg",
    title: "Health & Wellbeing",
    description: "Assistance with managing health appointments, medication, and maintaining physical and mental wellbeing."
  },
  {
    iconAsset: "supported-feature-safety.svg",
    title: "Safety & Safeguarding",
    description: "Ensuring you are safe and protected, with risk assessments and safeguarding procedures in place."
  },
  {
    iconAsset: "supported-feature-quality.svg",
    title: "Quality of Life",
    description: "Supporting you to enjoy hobbies, interests, relationships, and activities that bring you happiness and fulfillment."
  }
];

const trainingReasons = [
  {
    iconAsset: "supported-why-cqc.svg",
    title: "CQC Registration",
    description: "Fully regulated and compliant with all Care Quality Commission standards."
  },
  {
    iconAsset: "supported-why-trained.svg",
    title: "Trained Professionals",
    description: "All carers are DBS checked, fully trained, and experienced in person-centred care."
  },
  {
    iconAsset: "supported-why-compassionate.svg",
    title: "Compassionate Care",
    description: "We treat every individual with kindness, dignity, and respect they deserve."
  },
  {
    iconAsset: "supported-why-flexible.svg",
    title: "Flexible Support",
    description: "From a few hours a week to full-time care, we adapt to your needs and schedule."
  },
  {
    iconAsset: "supported-why-personalised.svg",
    title: "Personalised Plans",
    description: "No two people are the same. Your care plan is uniquely yours and regularly reviewed."
  },
  {
    iconAsset: "supported-why-availability.svg",
    title: "24/7 Availability",
    description: "Our office team is always available to support you, your family, and our care team."
  }
];

const portfolioItems = [
  ["training-portfolio-vendor.svg", "Vendor Companies", "North America and EU companies requiring UK home-visit delivery"],
  ["training-portfolio-cro.svg", "CROs & Sponsors", "Seeking scalable decentralised trial operations"],
  ["training-portfolio-sites.svg", "Investigator Sites", "Needing additional capacity and scheduling support"],
  ["training-portfolio-nhs.svg", "NHS Trusts", "Healthcare partners delivering research activity"]
];

const trainingSteps = [
  {
    id: "1",
    label: "Personal & Contact",
    title: "Learner Details",
    description: "Tell us who is booking training and how we can contact them.",
    fields: [
      { label: "Full Legal Name (as it appears on ID)*", placeholder: "e.g. Margaret Anne Davies" },
      { label: "Preferred Name", placeholder: "e.g. Maggie" },
      { label: "Date of Birth*", placeholder: "Select", kind: "select" },
      { label: "Duration at this address*", placeholder: "Select", kind: "select" },
      { label: "Current UK Address*", placeholder: "Street address, town/city, postcode", width: "wide" },
      { label: "Email Address*", placeholder: "e.g. m.davies@gmail.com" },
      { label: "Phone Number *", placeholder: "e.g. 07700 900000" },
      { label: "National Insurance (NI) Number*", placeholder: "AB123456C", width: "wide" }
    ] satisfies TrainingField[]
  },
  {
    id: "2",
    label: "Emergency Contacts",
    title: "Emergency Contacts",
    description: "Add the best contact routes and emergency contact information.",
    fields: [
      { label: "Primary Emergency Contact Name*", placeholder: "e.g. Robert Davies" },
      { label: "Relationship to Trainee*", placeholder: "e.g. Spouse, Parent, Sibling" },
      { label: "Contact Phone Number*", placeholder: "e.g. 07700 900123", width: "wide" }
    ] satisfies TrainingField[]
  },
  {
    id: "3",
    label: "Eligibility & Vetting",
    title: "Eligibility & Vetting",
    description: "Help us confirm the checks required before training begins.",
    fields: [
      { kind: "choice", label: "Do you have the legal right to work in the UK?*", options: ["Yes", "No"], width: "wide" },
      { kind: "upload", label: "", width: "wide" },
      { kind: "choice", label: "Do you hold a current Enhanced DBS certificate registered on the Update Service?*", options: ["Yes", "No"], width: "wide" },
      { label: "Certificate Number*", placeholder: "e.g. 00254554102120210", width: "wide" },
      { kind: "checkbox", label: "I consent to a check of this DBS certificate against the Update Service as part of the vetting process for this training programme.", width: "wide" }
    ] satisfies TrainingField[]
  },
  {
    id: "4",
    label: "Experience & Quals",
    title: "Experience & Qualifications",
    description: "Tell us about your current experience and learning goals.",
    fields: [
      { kind: "choice", label: "Have you previously completed the Care Certificate?*", options: ["Yes", "No"], width: "wide" },
      { label: "Relevant Health and Social Care Qualifications", placeholder: "e.g. NVQ Level 3 Health & Social Care (2019, Northumbria College), BTEC Level 2 Award in Healthcare...", width: "wide" },
      { kind: "upload", label: "Upload Qualification Certificates", width: "wide" },
      { kind: "textarea", label: "Previous Care Sector Experience", placeholder: "e.g. 3 years as a healthcare assistant in a residential care home supporting adults with dementia. Volunteered at a day centre for adults with learning disabilities (2021-2022)...", width: "wide" }
    ] satisfies TrainingField[]
  },
  {
    id: "5",
    label: "Health & Accessibility",
    title: "Health & Accessibility",
    description: "Let us know about any adjustments needed for your training.",
    fields: [
      { kind: "choice", label: "Fitness to Work*", options: ["Yes", "No"], width: "wide" },
      { kind: "textarea", label: "Please provide details", placeholder: "Please briefly describe any relevant health conditions or disabilities...", width: "wide" },
      { kind: "choice", label: "Reasonable Adjustments*", options: ["Yes", "No"], width: "wide" },
      { kind: "textarea", label: "Please describe the adjustments required", placeholder: "Please describe the reasonable adjustments you require...", width: "wide" }
    ] satisfies TrainingField[]
  },
  {
    id: "6",
    label: "Declarations & Consents",
    title: "Declarations & Consents",
    description: "Your personal and sensitive data will be stored securely and processed for training administration purposes. It may be shared with regulated bodies as required by law.",
    fields: [
      {
        kind: "notice",
        title: "Criminal Convictions Declaration",
        body: "Due to the nature of care work, the Rehabilitation of Offenders Act 1974 exceptions apply. Both spent and unspent convictions relevant to vulnerable sector work must be disclosed. Disclosure does not automatically disqualify you from the programme.",
        consent: "I declare my status regarding unspent and spent convictions, subject to the Rehabilitation of Offenders Act 1974 exceptions for vulnerable sector work. I understand that failure to disclose relevant convictions may result in removal from the programme.",
        width: "wide"
      },
      {
        kind: "notice",
        title: "Data Protection & GDPR Consent",
        body: "Your personal and sensitive data will be stored securely and processed for training administration purposes. It may be shared with regulated bodies (e.g. CQC, DBS Update Service) as required by law. You retain the right to access, rectify, or erase your data at any time.",
        consent: "I provide explicit GDPR consent for my personal and sensitive data to be stored, processed, and shared as described above. I understand I may withdraw this consent at any time by contacting our Data Protection Officer.",
        width: "wide"
      },
      {
        kind: "notice",
        title: "Declaration of Truth",
        body: "",
        consent: "I confirm that all information provided in this application is accurate, complete, and truthful to the best of my knowledge. I understand that providing false information may result in removal from the programme and referral to the appropriate authorities.",
        width: "wide"
      }
    ] satisfies TrainingField[]
  }
];

const trainingFaqs = [
  {
    question: "Can I pause my application if I don't have all my documents on hand?",
    answer:
      "Yes, the portal features an active Auto-Save function. You may pause your progress and return at a later time if you need to locate specific information or documents, such as your National Insurance (NI) number."
  },
  { question: "2. What documents can I use to prove my Right to Work in the UK?" },
  { question: "3. What happens if I do not have an Enhanced DBS certificate registered on the Update Service?" },
  { question: "4. Why do I need to provide information about my health and fitness to work?" },
  { question: "5. How is my personal data and criminal record declaration handled?" }
];

export default async function TrainingServicePage({ searchParams }: TrainingProps) {
  const params = await searchParams;
  const currentStep = trainingSteps.find((step) => step.id === params?.step) ?? trainingSteps[0];

  return (
    <PageShell>
      <InnerHero
        actions={[
          { href: "/training-service?step=1#book-training", label: "Book a Training" },
          { href: "/careers", label: "Work for us", variant: "secondary" }
        ]}
        className="inner-hero--supported-living inner-hero--training"
        title="Training Services"
        description={trainingIntro}
        backgroundImage="rumax-team-hero.png"
        showCallback
        showScrollCue
      />
      <QualityGovernanceStrip />
      <ReasonsGrid title="Key Features Of Our Service" items={trainingFeatures} variant="supported-scale" />
      <TrainingPortfolio />
      <ReasonsGrid title="Why Choose Rumax for Personal Care" items={trainingReasons} variant="supported-scale" />
      <TrainingBookingForm active={currentStep} />
      <FaqSection items={trainingFaqs} variant="supported-living" />
      <CareCta />
    </PageShell>
  );
}

function TrainingBookingForm({ active }: { active: (typeof trainingSteps)[number] }) {
  const currentIndex = trainingSteps.findIndex((step) => step.id === active.id);
  const previous = trainingSteps[Math.max(0, currentIndex - 1)];
  const next = trainingSteps[Math.min(trainingSteps.length - 1, currentIndex + 1)];

  return (
    <section className="page-section training-booking" id="book-training">
      <div className="container">
        <div className="training-booking__heading">
          <span aria-hidden="true" />
          <h2>Start Your Journey today</h2>
        </div>
        <form className="training-booking__form">
          <div className="training-booking__stepper" aria-label="Training booking progress">
            {trainingSteps.map((step, index) => (
              <a
                className={`${index < currentIndex ? "is-complete" : ""}${step.id === active.id ? " is-active" : ""}`.trim() || undefined}
                href={`/training-service?step=${step.id}#book-training`}
                key={step.id}
              >
                <span>{step.id}</span>
                <em>{step.label}</em>
              </a>
            ))}
          </div>
          <div className="training-booking__copy">
            <small>Step {active.id} of {trainingSteps.length}</small>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
          </div>
          <div className="training-booking__grid">
            {active.fields.map((field) => (
              <TrainingFieldControl field={field} key={"label" in field ? field.label : field.title} />
            ))}
          </div>
          <div className="training-booking__actions">
            {currentIndex > 0 ? <a href={`/training-service?step=${previous.id}#book-training`}>Previous Step</a> : <span aria-hidden="true" />}
            <a className="is-primary" href={`/training-service?step=${next.id}#book-training`}>
              {active.id === "6" ? "Submit" : active.id === "1" ? "Next Step" : "Save & Continue"}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function TrainingPortfolio() {
  return (
    <section className="page-section training-portfolio">
      <div className="container training-portfolio__inner">
        <div className="training-portfolio__copy">
          <div className="dom-care-reasons__heading">
            <span aria-hidden="true" />
            <h2>Our Training Portfolio</h2>
          </div>
          <p>We offer a robust selection of mandatory and specialized training courses. Explore our current portfolio below:</p>
          <div className="training-portfolio__grid">
            {portfolioItems.map(([icon, title, description]) => (
              <article key={title}>
                <AssetImage name={icon} alt="" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="training-portfolio__media">
          <AssetImage name="training-portfolio.png" alt="Rumax training support" />
        </div>
      </div>
    </section>
  );
}

function TrainingFieldControl({ field }: { field: TrainingField }) {
  const className = field.width === "wide" ? "is-wide" : undefined;

  if (field.kind === "choice") {
    return (
      <fieldset className={`training-booking__choice ${className ?? ""}`}>
        <legend>{field.label}</legend>
        <div>
          {field.options.map((option, index) => (
            <label key={option}>
              <input defaultChecked={index === 0} name={field.label} type="radio" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (field.kind === "upload") {
    return (
      <div className={`training-booking__upload ${className ?? ""}`}>
        {field.label ? <span>{field.label}</span> : null}
        <div>
          <AssetImage name="training-upload-icon.svg" alt="" aria-hidden="true" />
          <strong>Drag and drop files here or click to browse</strong>
          <small>Accepts PDF, DOCX. Max file size 20MB. Fully encrypted and GDPR compliant.</small>
          <button type="button">Browse Files</button>
        </div>
      </div>
    );
  }

  if (field.kind === "checkbox") {
    return (
      <label className={`training-booking__checkbox ${className ?? ""}`}>
        <input type="checkbox" />
        <span>{field.label}</span>
      </label>
    );
  }

  if (field.kind === "notice") {
    return (
      <div className={`training-booking__notice ${className ?? ""}`}>
        <h3>{field.title}</h3>
        {field.body ? <p>{field.body}</p> : null}
        <label className="training-booking__checkbox">
          <input type="checkbox" />
          <span>{field.consent}</span>
        </label>
      </div>
    );
  }

  return (
    <label className={className}>
      <span>{field.label}</span>
      {field.kind === "select" ? (
        <select defaultValue="">
          <option value="" disabled>
            {field.placeholder}
          </option>
        </select>
      ) : field.kind === "textarea" ? (
        <textarea placeholder={field.placeholder} />
      ) : (
        <input placeholder={field.placeholder} type="text" />
      )}
    </label>
  );
}
