import Link from "next/link";

export function Footer(){
  return (
    <footer className="mt-20 bg-[#0e0e0e] text-white">
      <div className="container grid md:grid-cols-4 gap-10 py-14">
        <div>
          <div className="text-2xl font-bold">VSource Admissions</div>
          <p className="mt-3 text-white/80 leading-7">
            We have 18+ years of professional experience in MBBS abroad admissions. Our team is committed to successful admissions, personalised consultation, affordable fees, and student satisfaction.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="#" className="badge border-white/20 text-white/80">Facebook</Link>
            <Link href="#" className="badge border-white/20 text-white/80">Instagram</Link>
            <Link href="#" className="badge border-white/20 text-white/80">YouTube</Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Universities</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><Link href="/mbbs-abroad/georgia/university-of-georgia">The University Of Georgia</Link></li>
            <li><Link href="/mbbs-abroad/georgia/ken-walker-international-university">Ken Walker International University</Link></li>
            <li><Link href="/mbbs-abroad/georgia/tbilisi-state-medical-university">Tbilisi State Medical University</Link></li>
            <li><Link href="/mbbs-abroad/georgia/ilia-state-university">Ilia State University</Link></li>
            <li><Link href="/mbbs-abroad/georgia/akaki-tsereteli-state-university">Akaki Tsereteli State University</Link></li>
            <li><Link href="/mbbs-abroad/russia/belgorod-state-national-research-university">Belgorod University</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Branches</h3>
          <div className="mt-3 space-y-3 text-white/80">
            <p><strong>Corporate Office – Dilsukhnagar</strong><br/>Near Shashi Hospital, Metro pillar no-1519, Hyderabad – 500060</p>
            <p><strong>Ameerpet</strong><br/>Vsource Building, Kamma Sangam lane, Hyderabad – 500073</p>
            <p><strong>KPHB – JNTU</strong><br/>Beside JNTU Metro station Near ICICI Bank, Hyderabad</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-3 text-white/80">+91 9912611119<br/>support@vsourceadmissions.com<br/>director@vsourceadmissions.com</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 text-sm text-white/70 flex flex-wrap gap-x-6 gap-y-2 items-center justify-between">
          <div>Copyright 2025 Vsource Educational Consultants Pvt Ltd. All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link href="#">Terms and Conditions</Link>
            <span>•</span>
            <Link href="#">Privacy Policy</Link>
            <span>•</span>
            <Link href="#">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
