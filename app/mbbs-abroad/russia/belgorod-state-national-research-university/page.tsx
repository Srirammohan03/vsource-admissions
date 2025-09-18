import University from "@/components/University";
export default function Page(){
  return (
    <University
      country="Russia"
      title="Belgorod State National Research University"
      summary="Top research university with strong emphasis on medical sciences and clinical exposure."
      highlights=["Research focus", "English-medium programs", "Clinical exposure"]
      feesNote="Tuition ~US$3,500–$4,500/year (indicative)."
    />
  );
}