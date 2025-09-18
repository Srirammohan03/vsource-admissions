import { LightboxGallery } from "@/components/LightboxGallery";
export default function GalleryPage(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Certifications & Gallery</h1>
        <p className="mt-2 text-gray-700">Click any image to view in a popup. Use arrow keys or on-screen controls to navigate and zoom.</p>
        <LightboxGallery large />
      </div>
    </section>
  )
}
