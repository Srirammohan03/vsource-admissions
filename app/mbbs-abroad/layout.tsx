export default function MBBSLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">MBBS Abroad</h1>
        <p className="mt-2 text-gray-700">Explore top universities, eligibility, fees, and guidance.</p>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
