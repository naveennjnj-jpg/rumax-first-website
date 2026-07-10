import type { Metadata } from "next";
import { CareCta } from "@/components/common/CareCta";
import { Compliance } from "@/components/home/Compliance";
import { InnerHero, PageShell } from "@/components/pages/InnerPages";
import { AssetImage } from "@/components/ui/AssetImage";

export const metadata: Metadata = {
  title: "About Us | Rumax",
  description: "Learn about Rumax Limited, our care values, clinical governance and healthcare team."
};

const storyParagraphs = [
  "RUMAX LIMITED was founded with a clear and simple mission: to provide high-quality, professional healthcare services where they are most effective and comfortable - in the home.",
  "Our journey began with a focus on Domiciliary Care in Essex. We recognised that for many individuals and families, the best care is not just about clinical tasks; it is about dignity, independence, and the peace of mind that comes from being in familiar surroundings. By combining a compassionate, person-centred approach with rigorous professional standards, we established ourselves as a trusted local provider across Basildon, Southend, Brentwood, and the wider Essex area.",
  "As our reputation for reliability and quality grew, so did our vision. We saw a significant gap in the clinical research landscape: the need for dependable, protocol-driven clinical trial delivery that could reach participants across the UK. Leveraging our deep roots in homecare and our commitment to clinical excellence, we launched our Homecare Clinical Trials Service - and today we are proud to partner with global vendors, CROs, and NHS Trusts to deliver complex protocol activities, from PK sampling to IMP administration, in participants' homes nationwide."
];

const values = [
  {
    description:
      "We treat every individual - whether a frail elderly resident in Basildon or a clinical trial participant in Aberdeen - with the respect, patience, and kindness they deserve. Care is personal. We never forget that.",
    icon: "about-value-compassion-reference.svg",
    title: "Compassion"
  },
  {
    description:
      "Our ISO 9001:2015 certification and CQC registration are not just compliance badges. They are our promise that every process, every visit, and every interaction is governed by the highest professional standards - independently verified.",
    icon: "about-value-quality-reference.svg",
    title: "Quality"
  },
  {
    description:
      "In both homecare and clinical research, being there when we say we will be is the foundation of trust. Families depend on us. Sponsors depend on us. We do not take that lightly.",
    icon: "about-value-reliability-reference.svg",
    title: "Reliability"
  }
];

const videos = [
  { image: "about-video-left-reference.png", title: "Patient Journey - Supported Living" },
  { image: "about-video-main-reference.png", title: "Patient Journey - Supported Living", featured: true },
  { image: "about-video-right-reference.png", title: "Patient Journey - Supported Living" }
];

const careBullets = [
  "Enhanced DBS checked before commencement of employment",
  "Verified for the right to work in the UK",
  "Trained to RUMAX LIMITED's induction standards",
  "Supervised and supported through regular supervision and appraisal",
  "Subject to ongoing training and competency assessment"
];

const awards = [
  {
    description: "Personal Care, Treatment of Disease, Disorder or Injury, Nursing Care",
    icon: "about-award-cqc-registration-reference.svg",
    title: "CQC Registration"
  },
  {
    description: "Quality Management Certification",
    icon: "about-award-iso-reference.svg",
    title: "ISO 9001:2015"
  },
  {
    description: "Fully compliant with all CQC regulatory standards",
    icon: "about-award-cqc-compliance-reference.svg",
    title: "CQC Compliance"
  }
];

function SectionHeading({ copy, title }: { copy?: string; title: string }) {
  return (
    <div className="about-section-heading">
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <div className="about-page">
        <InnerHero
          className="inner-hero--about"
          title="About Rumax Limited"
          description="Rumax Limited is one of the leading that simultaneously holds CQC registration for domiciliary care and delivers ICH-GCP-compliant clinical trials homecare nursing at a national scale, under a single governance framework and a single point of accountability."
          backgroundImage="about-hero.png"
          showScrollCue
        />

        <section className="about-story">
          <div className="container about-story__inner">
            <div className="about-story__copy">
              <h2>Our Story</h2>
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-story__media">
              <AssetImage name="about-story-reference.png" alt="Rumax team members standing beside a Rumax banner" />
            </div>
          </div>
        </section>

        <Compliance />

        <section className="about-values">
          <div className="container">
            <SectionHeading title="Our Values" />
            <div className="about-card-grid about-card-grid--values">
              {values.map((item) => (
                <article className="about-info-card" key={item.title}>
                  <AssetImage name={item.icon} alt="" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="container">
            <SectionHeading title="The Rumax Team" copy="Our dedicated team of healthcare professionals committed to delivering exceptional care" />
            <div className="about-video-grid">
              {videos.map((video) => (
                <article className={`about-video-card${video.featured ? " about-video-card--featured" : ""}`} key={video.image}>
                  <AssetImage name={video.image} alt={video.title} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-care-team">
          <div className="container about-care-team__inner">
            <div className="about-care-team__media">
              <AssetImage name="about-care-team-reference.png" alt="Rumax care and nursing team" />
            </div>
            <div className="about-care-team__copy">
              <SectionHeading title="Our Care & Nursing Team" />
              <p>
                RUMAX LIMITED is proud to employ a diverse, skilled, and compassionate team of registered nurses, senior carers,
                care workers, phlebotomists, and clinical trials assistants. Every member of our team is:
              </p>
              <ul>
                {careBullets.map((item, index) => (
                  <li key={item}>
                    <AssetImage name={`about-care-check-${index + 1}.svg`} alt="" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="container">
            <SectionHeading title="Awards & Recognition" />
            <div className="about-card-grid about-card-grid--awards">
              {awards.map((item) => (
                <article className="about-award-card" key={item.title}>
                  <AssetImage name={item.icon} alt="" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CareCta title="Enquire About Care Services" />
      </div>
    </PageShell>
  );
}
