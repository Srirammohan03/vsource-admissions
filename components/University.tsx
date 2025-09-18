import Link from "next/link";

type Props = {
  country: string;
  title: string;
  summary: string;
  highlights: string[];
  feesNote?: string;
};

export default function University({ country, title, summary, highlights, feesNote }: Props) {
  return (
    <article className="card">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="text-sm text-gray-500">MBBS in {country}</div>
          <h1 className="h2 mt-1">{title}</h1>
        </div>
        <Link href="/contact" className="btn btn-primary">
          Apply Now
        </Link>
      </div>

      <p className="mt-4 text-gray-700 leading-7">{summary}</p>

      <h3 className="h3 mt-6">Highlights</h3>
      <ul className="mt-3 grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      {feesNote && (
        <p className="mt-4 text-sm text-gray-600">
          <strong>Fees (indicative):</strong> {feesNote}
        </p>
      )}

      <div className="mt-6 flex gap-3">
        <Link href="/gallery" className="btn btn-outline">
          View Certifications
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Talk to a Counsellor
        </Link>
      </div>
    </article>
  );
}
