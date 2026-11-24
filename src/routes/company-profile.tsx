import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import profileSheet from "@/assets/company-profile.png";

export const Route = createFileRoute("/company-profile")({
  head: () => ({
    meta: [
      { title: "Company Profile — SKFF Group of Companies" },
      { name: "description", content: "S Kushalchand International Pvt Ltd, SKFF India Pvt Ltd, SAS SK France and SKFF Middle East LLC — Head Office Mumbai, Creative Center Grasse, Sales Office Sharjah." },
    ],
  }),
  component: CompanyProfile,
});

function CompanyProfile() {
  return (
    <div className="container-luxury py-10 md:py-16">
      <Reveal className="mx-auto max-w-3xl">
        <img
          src={profileSheet}
          alt="SKFF Company Profile — S Kushalchand International Pvt Ltd, SKFF India Pvt Ltd, SAS SK France, SKFF Middle East LLC. Head Office Mumbai, Creative Center Grasse, Sales Office Sharjah."
          className="mx-auto block w-full rounded-xl border border-border bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
          loading="eager"
        />
      </Reveal>
    </div>
  );
}
