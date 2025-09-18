import University from "@/components/University";
export default function Page(){
  return (
    <University
      country="Georgia"
      title="Tbilisi State Medical University"
      summary="Flagship public medical university with strong clinical affiliations and research."
      highlights=["Public university", "Strong research", "Extensive hospital tie-ups"]
      feesNote="Tuition ~US$6,000–$7,000/year (indicative)."
    />
  );
}