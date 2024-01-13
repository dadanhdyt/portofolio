import type { MetaFunction } from "@remix-run/node";
import ButtonLink from "~/components/ui/ButtonLink";

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
            <h1 className="text-6xl">
              Hi! I'm <span className="font-bold text-primary">Dadan</span>
            </h1>
            <div className="flex gap-3 flex-col">
              <p className="text-2xl">
                🧊 I'm helping people like you to be better especially in modern
                career, web development, software engineering, tech business,
                and life in general.
              </p>
              <span>
                Fun coding since 2000 + Professional coding since 2010
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
              <ul className="flex gap-3 mt-5 justify-center">
                <li>#mahasiswa</li>
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
            <div className="text-3xl font-semibold">My Work <span className="text-secondary-500">Specialty</span></div>
            <p>
              Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eum.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
              <span className="text-2xl text-primary-500 font-semibold gap-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
                <span>FOUNDER</span>
              </span>
              <p className="text-text-950">it natus labore! Possimus, excepturi! Recusandae molestiae laudantium vel officiis aliquam </p>
            </div>
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
              <span className="text-2xl text-primary-500 font-semibold gap-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
                <span>FOUNDER</span>
              </span>
              <p className="text-text-950">it natus labore! Possimus, excepturi! Recusandae molestiae laudantium vel officiis aliquam </p>
            </div>
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
              <span className="text-2xl text-primary-500 font-semibold gap-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
                <span>FOUNDER</span>
              </span>
              <p className="text-text-950">it natus labore! Possimus, excepturi! Recusandae molestiae laudantium vel officiis aliquam </p>
            </div>
            <div className="border shadow flex flex-col gap-4 rounded ring-1 px-3 py-4 ring-background-200 bg-background-100">
              <span className="text-2xl text-primary-500 font-semibold gap-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
                <span>FOUNDER</span>
              </span>
              <p className="text-text-950">it natus labore! Possimus, excepturi! Recusandae molestiae laudantium vel officiis aliquam </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="bg-primary-400 mt-5 rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi nemo maxime harum temporibus! Alias accusamus est, tempore aperiam optio dicta veritatis autem, temporibus, sunt labore incidunt dolor dolorum omnis?
        Neque laudantium nesciunt autem officiis, ipsa voluptatibus quod deserunt modi dolor aliquam esse maxime nobis veniam deleniti unde voluptatum eius dolores veritatis totam? Ea cum tenetur sed est sequi. Provident.
        Tenetur, sit odio assumenda cupiditate nam tempora sapiente, odit ab animi recusandae dicta deleniti? Hic provident corporis reprehenderit praesentium, id repellendus explicabo. Tempora exercitationem nostrum, sint iusto voluptatum recusandae accusantium?
        Nostrum perferendis ipsa earum quaerat velit quas ea dolor debitis sunt rem! Dolores itaque, ab placeat debitis laborum repudiandae hic corrupti ratione impedit officiis deserunt molestiae dolore obcaecati laboriosam quis!
        Magnam sunt vel blanditiis inventore aliquam laborum quos sapiente ipsum molestiae incidunt nam, porro, eius distinctio fugit architecto? Laudantium minus reiciendis cum nulla delectus quisquam eaque sunt sit, ab nisi.
        Voluptatum fuga, illum, iusto temporibus cupiditate at asperiores quisquam dolorum velit provident rem, magnam quia laudantium aut similique distinctio officiis voluptates voluptate dolores explicabo nisi? Minima, quas! Architecto, ut dignissimos.
        Sunt, consequatur. Nesciunt magnam error dolor natus, repellat vel fugit explicabo. Sequi vel, molestiae quae maiores similique aliquid vero fugit, a tenetur minus aspernatur nesciunt reiciendis, corporis modi. Voluptatibus, qui?
        In porro dignissimos nisi totam necessitatibus quod modi sed quas ipsa, eaque iste consectetur veniam maiores debitis sit molestiae inventore cum quasi non omnis pariatur velit hic? Natus, ipsum eius!
        Blanditiis esse voluptates numquam expedita minus voluptatem repellendus quas! Nemo perspiciatis consectetur quidem dignissimos dolorum! Voluptatibus veritatis quisquam enim non doloribus id. Omnis eveniet, vitae deserunt magni sit neque odio.
        Quibusdam excepturi quos aliquid quia totam nisi, quasi, similique ipsa inventore, sit vel cum modi sunt numquam fugit deserunt nemo nobis eius distinctio impedit expedita? Animi rem facere debitis necessitatibus.
        </div>
      </div>
    </div>
  );
}
