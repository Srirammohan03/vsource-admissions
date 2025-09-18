import Link from "next/link";

export default function GeorgiaPage() {
  const universities = [
    { name: "The University Of Georgia", slug: "university-of-georgia" },
    { name: "Ken Walker International University", slug: "ken-walker-international-university" },
    { name: "Tbilisi State Medical University", slug: "tbilisi-state-medical-university" },
    { name: "Ilia State University", slug: "ilia-state-university" },
    { name: "Akaki Tsereteli State University", slug: "akaki-tsereteli-state-university" },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {universities.map(u => (
        <Link key={u.slug} href={`/mbbs-abroad/georgia/${u.slug}`} className="card hover:shadow-lg">
          <h3 className="h3">{u.name}</h3>
          <p className="mt-2 text-gray-700">Overview, eligibility, fees, intakes, and how we help.</p>
        </Link>
      ))}
    </div>
  );
}
