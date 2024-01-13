import type { MetaFunction } from "@remix-run/node";
import ButtonLink from "~/components/ui/ButtonLink";
import fotoKangDadan from "../../public/dadan.jpg";
import TimelineItem from "~/components/ui/TimelineItem";
import HiroSection from "~/components/shared/HiroSection";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <HiroSection/>
      <div className="bg-accesnt-200 mb-3">
        <div className="container">
          <div className="text-center py-5 mb-6">
            <div className="font-semibold  text-lg">Karir</div>
            <div className="text-3xl font-semibold">
              My Work{" "}
              <span className="text-secondary-500 dark:text-accent-400">
                Specialty
              </span>
            </div>
            <p>
              Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Enim, eum.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="border dark:border-none shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-300 dark:ring-primary-500 bg-background-200">
                <span className="text-2xl text-primary-600 font-semibold gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"
                    />
                  </svg>
                  <span>FOUNDER</span>
                </span>
                <p className="text-text-950">
                  it natus labore! Possimus, excepturi! Recusandae molestiae
                  laudantium vel officiis aliquam{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sm:p-12 mt-12 rounded-lg">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="">
              <img className="rounded" src={fotoKangDadan} alt="" />
            </div>
            <div className="md:pb-6 md:pr-16">
              <h2 className="font-heading mb-8 text-3xl font-medium lg:text-3xl">
                TIMELINE
              </h2>
              <TimelineItem end={false} title={"Web Developer"}>
                Saya berpengalaman membuat aplikasi web, Saya menguasai PHP,
                Laravel, CSS+ Javascript Dan Remix JS
              </TimelineItem>
              <TimelineItem end={false} title={"Backend"}>
                Saya pengalaman seorang backend Developer mengunakan techstack
                MERN dan PHP Laravel
              </TimelineItem>
              <TimelineItem end={true} title={"Backend"}>
                Saya pengalaman seorang backend Developer mengunakan techstack
                MERN dan PHP Laravel
              </TimelineItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
