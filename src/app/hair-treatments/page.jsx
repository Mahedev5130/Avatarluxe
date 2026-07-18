import { Suspense } from "react";
import HairTreatmentsSeoPage from "@/components/hair-treatments/seo/HairTreatmentsSeoPage";

export const metadata = {
  title: "Best Hair Transplant Clinic in Bangalore | Hair Transplant Cost & Treatment | Avatar Luxe",
  description:
    "Best hair transplant clinic in Bangalore with 4.9★ Google rating. Avatar Luxe offers FUE, FUT, DHT, Sapphire Blade, Bio-fibre & GFC treatments. Transparent hair transplant cost in Bangalore. 10,000+ procedures. KPME Level-2 certified.",
  keywords: [
    "hair transplant in bangalore",
    "best hair transplant clinic in bangalore",
    "hair transplant cost bangalore",
    "FUE hair transplant bangalore",
    "hair transplant price in bangalore",
    "hair grafting bangalore",
    "biofibre hair transplant bangalore",
    "hair transplant near me",
  ],
};

export default function HairTreatmentsPage() {
  return (
    <Suspense fallback={null}>
      <HairTreatmentsSeoPage />
    </Suspense>
  );
}
