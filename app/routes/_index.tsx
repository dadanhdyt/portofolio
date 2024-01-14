import type { MetaFunction } from "@remix-run/node";
import Education from "~/components/shared/education-section";
import IntroSection from "~/components/shared/intro-section";
import SertifikatSection from "~/components/shared/sertifikat-section";
import SkilsSection from "~/components/shared/skils-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Porfolio Dadan hidayat" },
    { name: "description", content: "Selamat datang guys!" },
  ];
};

export default function Index() {
  return (
    <div>
      <IntroSection />
      <div className="bg-background-100 py-9">
        <div className="container mb-10">
          <span className="text-text-950 mb-5 block text-2xl font-bold">
            SKILS
            <p className="text-sm font-thin">Skils yang di kuasai dan di pelajari.</p>
          </span>
          <SkilsSection />
        </div>
      </div>

      <div className="bg-background-50 py-5 mt-12">
        <div className="container mb-10">
          <span className="text-text-950 mb-3 block text-2xl font-bold">
            Pendidikan
            <p className="text-sm font-thin">Pendidikan yang telah dan sedang di duduki.</p>
          </span>
          <Education />
        </div>
      </div>

      <div className="bg-background-50 py-5">
        <div className="container mb-10">
          <span className="text-text-950 mb-3 block text-2xl font-bold">
            Sertifikat
            <p className="text-sm font-thin">Sertifikat yang pernah di dapatkan baik perlombaan ataupun kegiatan.</p>
          </span>
          <SertifikatSection />
        </div>
      </div>
    </div>
  );
}
