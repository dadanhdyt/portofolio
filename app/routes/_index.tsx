import type { MetaFunction } from "@remix-run/node";
import ButtonLink from "~/components/ui/ButtonLink";
import fotoKangDadan from "../../public/dadan.jpg"
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <section id="hiro">
        <div className="container">
          <div className="text-center  h-screen justify-center flex flex-col gap-4 sm:w-4/6 mx-auto">
            <h1 className="text-4xl sm:text-6xl">
              Hi! I'm{" "}
              <span className="font-bold text-secondary-500">Dadan</span>
            </h1>
            <div className="flex gap-3 flex-col">
              <p className="text-1xl sm:text-2xl">
                🧊 I'm helping people like you to be better especially in modern
                career, web development, software engineering, tech business,
                and life in general.
              </p>
              <span>
                Fun coding since 2020 + Professional coding since 2022
              </span>
              <div className="flex gap-3 justify-center">
                <ButtonLink className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                  Github
                </ButtonLink>
                <ButtonLink className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  Instagram
                </ButtonLink>
              </div>
              <ul className="flex flex-col sm:flex-row gap-3  mt-5 justify-center">
                <li className="font-bold">#prabowogibran</li>
                <li>#fullstackdev</li>
                <li>#sofwareengginer</li>
                <li>#codingentusiast</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-accesnt-200 mb-3">
        <div className="container">
          <div className="text-center py-5 mb-6">
            <div className="font-semibold">Karir</div>
            <div className="text-3xl font-semibold">
              My Work <span className="text-secondary-500">Specialty</span>
            </div>
            <p>
              Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Enim, eum.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
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
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
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
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
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
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
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
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary-500">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-secondary-500 icon-bold"
                      astro-icon="tabler:arrow-down"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="icon-tabler"
                      >
                        <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="h-full w-px bg-text-500" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-xl font-medium text-text-500">
                  Frontend Web
                </p>
                <p>
                  All things interface and interaction. Including UI, UX, Figma,
                  HTML, CSS, JavaScript, TypeScript, and React.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary-500">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-secondary-500 icon-bold"
                      astro-icon="tabler:arrow-down"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="icon-tabler"
                      >
                        <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="h-full w-px bg-text-500" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-xl font-medium text-text-500">
                  Backend Web
                </p>
                <p>
                  All things API and database. Including DBMS, ORM, REST API,
                  and GraphQL.
                </p>
              </div>
            </div>
         
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-secondary-500 icon-bold"
                      astro-icon="tabler:check"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m5 12 5 5L20 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-xl font-medium text-text-500">
                  <span>Insyaalah Super Developer!</span>
                </p>
                <p className="text-gray-700" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
