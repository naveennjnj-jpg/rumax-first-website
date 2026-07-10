import type { Metadata } from "next";
import { ContactVariantForm, ResourcePage } from "@/components/pages/ExpandedPages";
import { complaintsVariants } from "@/data/expanded-pages";

export const metadata: Metadata = {
  title: "Complaints, Concerns & Feedback | Rumax",
  description: "Share complaints, concerns or feedback with Rumax."
};

type FeedbackProps = {
  searchParams?: Promise<{ type?: string }>;
};

export default async function FeedbackPage({ searchParams }: FeedbackProps) {
  const params = await searchParams;
  const active = complaintsVariants.find((item) => item.id === params?.type) ?? complaintsVariants[0];

  return (
    <ResourcePage eyebrow={active.eyebrow} title={active.title} description={active.description}>
      <section className="page-section variant-tabs-section">
        <div className="container variant-tabs">
          {complaintsVariants.map((variant) => (
            <a className={variant.id === active.id ? "is-active" : undefined} href={`/complaints-concerns-feedback?type=${variant.id}`} key={variant.id}>
              {variant.label}
            </a>
          ))}
        </div>
      </section>
      <ContactVariantForm title={active.title} description={active.description} />
    </ResourcePage>
  );
}
