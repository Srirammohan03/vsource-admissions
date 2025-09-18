export function Testimonials(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { name: "Aarav S.", text: "VSource made my MBBS journey simple and stress-free. Highly recommended!" },
            { name: "Pooja R.", text: "Clear guidance on universities and fees. Got my visa on time." },
            { name: "Rahul K.", text: "Great support even after landing. Thank you, team VSource!" },
          ].map(t => (
            <div key={t.name} className="card">
              <p className="text-gray-700 leading-7">“{t.text}”</p>
              <div className="mt-4 font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
