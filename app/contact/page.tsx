export default function ContactPage(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="h1">Contact Us</h1>
          <p className="mt-4">Have questions about admissions, fees, or eligibility? We’re here to help.</p>

          <div className="mt-6 space-y-4">
            <div className="card">
              <h3 className="h3">Corporate Office – Dilsukhnagar</h3>
              <p>Vsource, Near Shashi Hospital, Metro pillar no-1519, Dilsukhnagar, Hyderabad- 500060, Telangana.</p>
            </div>
            <div className="card">
              <h3 className="h3">Ameerpet</h3>
              <p>Vsource Building, Kamma Sangam lane, Ameerpet, Hyderabad- 500073, Telangana.</p>
            </div>
            <div className="card">
              <h3 className="h3">KPHB – JNTU</h3>
              <p>Beside JNTU Metro station Near ICICI Bank, Hyderabad, Telangana.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card">
            <h3 className="h3">Phone & Email</h3>
            <p className="mt-2">+91 9912611119</p>
            <p>support@vsourceadmissions.com</p>
            <p>director@vsourceadmissions.com</p>
          </div>
          <div className="card">
            <h3 className="h3">Branches – Andhra Pradesh</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Vijayawada – Mouli Towers, Benz Circle</li>
              <li>Tirupathi – Renigunta Rd, Postal Colony</li>
              <li>Visakhapatnam – Lawsons Bay, Dr NTR Beach Rd</li>
              <li>Anantapur – CPV Residency, Beside Chandra Super Specialty Hospital</li>
              <li>Ongole – City Cafe Building, Mangamur Donka</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">Karnataka</h3>
            <p>Bengaluru – #88, 9th cross G- Block Sahakar Nagar 560092</p>
          </div>
        </div>
      </div>
    </section>
  )
}
