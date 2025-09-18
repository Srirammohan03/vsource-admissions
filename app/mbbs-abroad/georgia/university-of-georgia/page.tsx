import University from "@/components/University";

export default function Page() {
  return (
    <University
      country="Georgia"
      title="The University Of Georgia"
      summary="A leading private university in Tbilisi known for modern infrastructure and high FMGE performance."
      highlights={[
        "English-medium MBBS",
        "Modern clinical facilities",
        "International student support",
      ]}
      feesNote="Tuition ~US$5,000–$6,000/year (indicative)."
    />
  );
}
