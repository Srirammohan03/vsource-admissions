import Link from "next/link";

export default function RussiaPage() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link href="/mbbs-abroad/russia/belgorod-state-national-research-university" className="card hover:shadow-lg">
        <h3 className="h3">Belgorod State National Research University</h3>
        <p className="mt-2 text-gray-700">Overview, eligibility, fees, intakes, and how we help.</p>
      </Link>
    </div>
  );
}
