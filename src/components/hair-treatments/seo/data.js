import { FaHospital, FaCheckCircle, FaShieldAlt, FaRupeeSign, FaPhoneAlt } from "react-icons/fa";
import { Layers, Award, ShieldCheck, Heart, IndianRupee, Phone } from "lucide-react";

export const TICKER_ITEMS = [
  "Free Consultation — Book Today",
  "Rated 4.9★ on Google · 500+ Reviews",
  "10,000+ Hair Transplant Procedures Done",
  "KPME Level-2 Certified Hospital, Bangalore",
  "FDA Approved Implants · Lifetime Warranty",
  "FUE · FUT · DHT · Sapphire Blade · Bio-fibre · GFC",
  "Transparent Hair Transplant Cost — No Hidden Fees",
];

export const TRUST_ITEMS = [
  { icon: FaHospital, title: "KPME Level-2", subtitle: "Certified Hospital" },
  { icon: FaCheckCircle, title: "FDA Approved", subtitle: "Implants" },
  { icon: FaShieldAlt, title: "Lifetime Warranty", subtitle: "On Implants" },
  { icon: FaRupeeSign, title: "Transparent Pricing", subtitle: "No Hidden Charges" },
  { icon: FaPhoneAlt, title: "24/7 Support", subtitle: "Post-Op Care" },
];

export const BA_POINTS = [
  { title: "Natural hairline design", text: "each hair graft placed at the correct angle and density" },
  { title: "Permanent hair restoration", text: "DHT-resistant follicles from the donor zone" },
  { title: "Visible results in 6–9 months", text: "full hair density at 12 months" },
  { title: "Back to social life in 3–5 days", text: "minimal downtime across all techniques" },
];

export const TREATMENT_TABS = [
  {
    id: "transplant",
    label: "Hair Transplant",
    treatments: [
      { tag: "Most Popular · Best FUE in Bangalore", name: "FUE Hair Transplant", desc: "Follicular Unit Extraction — individual hair follicles extracted one-by-one from the donor area with zero linear scar. The most popular hair transplant technique in Bangalore. Natural hairline, back to work in 3 days.", featured: true, link: "#cost" },
      { tag: "No Shaving · Discreet", name: "Un-shaved FUE", desc: "Complete FUE hair transplant without shaving your existing hair. Ideal for professionals and women seeking discreet hair restoration in Bangalore with no visible downtime between sessions.", link: "#cta" },
      { tag: "Advanced Precision · Sapphire", name: "Sapphire Blade Hair Transplant", desc: "Ultra-sharp sapphire crystal blades create finer incisions than standard steel — enabling higher hair graft density, faster healing, and a more natural hairline.", link: "#cta" },
      { tag: "FUT · Long Hair Preserved", name: "Long Hair Transplant (FUT)", desc: "FUT strip technique transplanted without trimming your hair — ideal for patients who need maximum grafts in one session. Resume social life within 4–5 days in Bangalore.", link: "#cta" },
      { tag: "Direct · Precise Implantation", name: "Direct Hair Transplant (DHT)", desc: "Hair follicles extracted and implanted in a single continuous step — no pre-cut channels needed. DHT delivers maximum graft survival, precise angle control, and faster recovery.", link: "#cta" },
    ],
    cta: { title: "FUE · FUT · DHT\nSapphire Blade", subtitle: "Not sure which hair transplant technique is right for you?", button: "Get a Free Assessment" },
  },
  {
    id: "fallcontrol",
    label: "Hair Fall Control",
    treatments: [
      { tag: "Advanced · Blood-derived", name: "GFC Hair Treatment", desc: "Growth Factor Concentrate (GFC) derived from your own blood delivers concentrated regenerative signals directly to dormant follicles. Non-surgical, clinically proven hair fall control and hair regrowth in Bangalore.", featured: true, link: "#cta" },
      { tag: "Non-surgical · Popular", name: "PRP Hair Treatment", desc: "Platelet Rich Plasma (PRP) stimulates follicles and extends the anagen growth phase. Clinically proven to reduce hair fall and increase density over 3–6 sessions.", link: "#cta" },
      { tag: "Regenerative · Cutting Edge", name: "Stem Cell Hair Therapy", desc: "Stem cells repair and regenerate damaged hair follicles at a cellular level — ideal for advanced hair loss cases where traditional treatments have not produced sufficient results.", link: "#cta" },
      { tag: "Nutrient Delivery · Scalp", name: "Mesotherapy", desc: "Targeted vitamins, minerals, and amino acids microinjected directly into the scalp — nourishing hair roots where topical products cannot penetrate.", link: "#cta" },
      { tag: "Collagen · Circulation", name: "Microneedling", desc: "Precision micro-channels created in the scalp trigger collagen production and boost blood circulation — amplifying the results of topical hair treatments.", link: "#cta" },
    ],
    cta: { title: "Stop hair fall.\nRegrow naturally.", button: "Free Hair Loss Assessment" },
  },
  {
    id: "cosmetic",
    label: "Hair Replacement",
    treatments: [
      { tag: "Premium · Natural Hairline", name: "French Lace Hair Replacement", desc: "Lightweight, breathable lace base hair replacement system that creates a completely invisible, natural hairline. The best non-surgical hair replacement option for men and women in Bangalore.", featured: true, link: "#cta" },
      { tag: "Ultra-thin · Hollywood Grade", name: "Hollywood Lace Hair Replacement", desc: "Premium ultra-thin lace base for an undetectable hairline under any lighting. Permanent hair fixing solution for professionals who require total discretion.", link: "#cta" },
      { tag: "Textured · Specialist", name: "Afro Style Hair Restoration", desc: "Designed specifically for curly and coily hair textures — matching curl pattern, density, and colour for a perfectly natural-looking result.", link: "#cta" },
      { tag: "Instant · Volume · Length", name: "Hair Extensions", desc: "Premium hair extensions seamlessly blended with your natural hair for instant volume, length, and density.", link: "#cta" },
    ],
  },
  {
    id: "synthetic",
    label: "Synthetic Hair Implant",
    treatments: [
      { tag: "Synthetic Hair Transplant Bangalore", name: "Bio-fibre Synthetic Hair Implant", desc: "Biofibre hair transplant uses biocompatible synthetic hair fibres implanted directly into the scalp — delivering instant hair density with no donor area required. Ideal for advanced hair loss cases.", featured: true, link: "#cost" },
      { tag: "Non-surgical · Custom · Nido", name: "Nido Hair System", desc: "A fully customised synthetic hair patch system matched to your exact hair colour, texture, and density. Instant, natural-looking hair coverage with zero surgery.", link: "#cta" },
    ],
    cta: { title: "Biofibre · Nido\nSynthetic Hair Implant", subtitle: "Instant density, no donor area needed", button: "Speak to Our Specialists" },
  },
];

export const COST_ROWS = [
  ["FUE Hair Transplant (per graft)", "View Cost"],
  ["FUT Hair Transplant (per graft)", "View Cost"],
  ["Sapphire Blade Hair Transplant", "View Cost"],
  ["Direct Hair Transplant (DHT)", "View Cost"],
  ["Un-shaved FUE", "View Cost"],
  ["Bio-fibre Synthetic Hair Transplant", "View Cost"],
  ["GFC Hair Treatment (per session)", "View Cost"],
  ["PRP Hair Treatment (per session)", "View Cost"],
  ["Hair Replacement (Lace System)", "View Cost"],
  ["Stem Cell Hair Therapy", "View Cost"],
];

export const PROCESS_STEPS = [
  { num: "01", title: "Free Hair Consultation", body: "Our senior trichologist evaluates your hair loss pattern (Norwood Scale), scalp health, and donor density. No charge. No commitment — in Koramangala or Whitefield, Bangalore." },
  { num: "02", title: "Personalised Treatment Plan", body: "We design a hair restoration plan specific to your hair loss stage — including technique, graft count, timeline, and transparent hair transplant cost breakdown." },
  { num: "03", title: "Precision Hair Transplant Procedure", body: "Performed under local anaesthesia in our Level-2 KPME certified operating theatre. Most operations take 6–8 hours and are complete in a single day." },
  { num: "04", title: "Aftercare & Hair Restoration Results", body: "24/7 post-op support, clinical-grade aftercare kits, and scheduled follow-ups. New hair growth visible at 3–4 months. Full results at 9–12 months." },
];

export const STATS_BAND = [
  { value: "10,000+", label: "Hair Procedures Done" },
  { value: "4.9 ★", label: "Google Rating · Bangalore" },
  { value: "98%", label: "Clinical Success Rate" },
  { value: "15", label: "Global Awards" },
];

export const REVIEWS = [
  { initials: "RM", name: "Rahul M.", treatment: "FUE Hair Transplant · Koramangala, Bangalore", text: "Six years of hair loss resolved in one FUE procedure at Avatar Luxe, Koramangala. The hair transplant results are completely natural — even my barber couldn't tell. Best hair transplant hospital in Bangalore, no question." },
  { initials: "PS", name: "Priya S.", treatment: "Un-shaved FUE · Whitefield, Bangalore", text: "I researched the top 10 hair transplant hospitals in Bangalore before choosing Avatar Luxe. Their un-shaved FUE was incredible. Back at my desk on day 3. The hair restoration results at 9 months are phenomenal." },
  { initials: "AK", name: "Aditya K.", treatment: "GFC Hair Therapy · Koramangala, Bangalore", text: "My GFC hair treatment at Avatar Luxe reduced shedding within the second month. The hair fall control results are real. The team's after-care support is genuinely excellent." },
];

export const DOCTORS = [
  {
    id: "hair-transplant-surgeon",
    initial: "A",
    name: "Dr. Ashrith Iyannahally",
    image: "/images/hair-treatment/dr-ashrith.webp",
    cred: "MBBS · MS · MCH - Plastic Surgery · Hair Transplant Surgeon  · 15+ Years · Bangalore",
    bio: "Super Senior Hair Transplant Surgeon at Avatar Luxe, Koramangala, with experience performing 6,000+ successful hair transplant procedures. An expert in Sapphire Blade Hair Transplant, Nido Hair Implant, and Biofibre Synthetic Hair Implant techniques.",
  },
  {
    id: "dermatology-trichologist",
    initial: "B",
    name: "Dr. Ankitha",
    image: "/images/hair-treatment/dr-ankitha.webp",
    cred: "MBBS · MD (Dermatology) · Head of Skin & Hair Restoration · Bangalore",
    bio: "A leading specialist in Non-Surgical Hair Restoration, with expertise in GFC, PRP, Stem Cell Hair Therapy, and Hair Fall Management. Has successfully treated 3,000+ patients across Bengaluru.",
  },
];

export const FAQS = [
  { q: "What is the hair transplant cost in Bangalore?", a: "Hair transplant cost in Bangalore at Avatar Luxe depends on the technique and number of grafts. FUE, FUT, and Sapphire Blade pricing are all discussed during your free consultation. We believe in complete transparency — no hidden expenses." },
  { q: "Which is the best hair transplant hospital in Bangalore?", a: "Avatar Luxe is rated 4.9★ on Google with 500+ verified reviews. As Bangalore's only KPME Level-2 certified hair hospital with 10,000+ procedures and 15 global awards, we are the most trusted hair transplant centre in Bangalore." },
  { q: "What is the difference between FUE and FUT hair transplant?", a: "FUE removes individual hair grafts leaving no linear scar — ideal for minimal downtime. FUT extracts a strip of scalp, allowing more grafts in one session. Our doctors recommend the best technique during your free consultation." },
  { q: "How much does a 1000 or 5000 graft hair transplant cost?", a: "A 1,000 graft hair transplant suits early-stage hairline restoration. A 5,000 graft procedure covers advanced baldness. We provide a graft-wise cost breakdown at your free consultation." },
  { q: "What is synthetic hair transplant / Biofibre hair transplant in Bangalore?", a: "Biofibre synthetic hair transplant uses biocompatible synthetic fibres implanted into the scalp — delivering instant hair density without a donor area. Avatar Luxe is one of the few hospitals in Karnataka offering this treatment." },
  { q: "Is hair transplant available for women in Bangalore?", a: "Yes. Avatar Luxe offers ladies hair transplant, Un-shaved FUE, PRP, GFC, and Hollywood Lace systems specifically designed for female hair loss." },
  { q: "When will I see hair transplant results?", a: "Transplanted hair grafts typically shed within 3–4 weeks. New hair growth begins at 3–4 months. Significant density is visible at 6–9 months. Full results are typically achieved at 12 months." },
  { q: "Is hair transplant permanent?", a: "Yes. Hair transplant (FUE, FUT, DHT) delivers permanent hair restoration because transplanted follicles are harvested from the DHT-resistant donor zone and retain that resistance after transplantation." },
];

export const WHY_CARDS = [
  {
    num: "01",
    icon: Layers,
    title: "100% Doctor-Led Procedures",
    before: "Every step — from graft extraction to hairline implantation — is performed exclusively by our qualified surgeons. ",
    strong: "No technicians. No nurses. No delegation.",
    after: " At most hospitals in Bangalore, doctors leave after the first 10 minutes. Not here.",
    pill: "Exclusive to Avatar Luxe",
    featured: false,
  },
  {
    num: "02",
    icon: Award,
    title: "Bangalore's Only KPME Level-2 Certified Hair Hospital",
    before: "Avatar Luxe holds ",
    strong: "KPME Level-2 hospital certification",
    after: " — the highest standard for a hair hospital in Karnataka. This means a fully equipped operating theatre, surgical-grade infrastructure, and compliance standards most hair hospitals in Bangalore simply do not meet.",
    pill: "Only hospital in Bangalore with this certification",
    featured: true,
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "FDA Approved Implants + Lifetime Warranty",
    before: "Every synthetic hair implant and bio-fibre used at Avatar Luxe is ",
    strong: "FDA approved",
    after: " and comes with a lifetime warranty. No other hair hosptal in Bangalore offers this level of guarantee on their materials and outcomes.",
    pill: "Lifetime warranty on implants",
    featured: false,
  },
  {
    num: "04",
    icon: Heart,
    title: "4.9 ★ Google Rating · 500+ Verified Reviews",
    before: "Our ",
    strong: "4.9-star Google rating",
    after: " is earned from 500+ real patients — not managed reviews. Consistently ranked among the top hair transplant hospitals in Bangalore for outcomes, patient experience, and after-care. Read our reviews and judge for yourself.",
    pill: "Highest rated hair hospital in Koramangala",
    featured: false,
  },
  {
    num: "05",
    icon: IndianRupee,
    title: "Transparent Hair Transplant Cost — No Hidden Charges",
    before: "You receive a complete, itemised hair transplant cost breakdown — ",
    strong: "per graft, per technique, total procedure cost",
    after: " — before you commit to anything. No surprise additions on the day of surgery. No pressure. What you see is exactly what you pay.",
    pill: "Zero hidden fees — guaranteed",
    featured: false,
  },
  {
    num: "06",
    icon: Phone,
    title: "24/7 Post-Op Support for Every Patient",
    before: "Your hair restoration journey doesn't end at the hospital door. Every Avatar Luxe patient receives ",
    strong: "round-the-clock post-op access",
    after: " to their care team, scheduled follow-up consultations, a clinical-grade aftercare kit, and a dedicated support line — for as long as needed.",
    pill: "Lifelong patient relationship",
    featured: false,
  },
];
