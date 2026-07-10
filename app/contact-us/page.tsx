import type { Metadata } from "next";
import { CareCta } from "@/components/common/CareCta";
import { ContactCards, InnerHero, MapBand, PageShell } from "@/components/pages/InnerPages";
import { TabbedAssessmentForm } from "@/components/pages/TabbedAssessmentForm";
import { contactMethods } from "@/data/pages";

export const metadata: Metadata = {
  title: "Contact Us | Rumax",
  description: "Contact Rumax to request care, arrange an assessment or discuss clinical support."
};

type ContactPageProps = {
  searchParams?: Promise<{
    enquiry?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const activeTab = params?.enquiry === "research" ? "research" : "care";

  return (
    <PageShell>
      <InnerHero
        className="inner-hero--domiciliary"
        title="Contact Us"
        description="Join a team where your work makes a real difference. Whether you're passionate about compassionate care or advancing medical research, we have opportunities for you."
        backgroundImage="rumax-office-hero.png"
        showScrollCue
      />
      <ContactCards items={contactMethods} />
      <TabbedAssessmentForm activeTab={activeTab} />
      <MapBand />
      <CareCta />
    </PageShell>
  );
}
