import ButtonLink from "../ui/ButtonLink";

export default function HiroSection() {
  return (
    <section id="hiro">
      <div className="container">
        <div className="text-center  h-screen justify-center flex flex-col gap-4 sm:w-4/6 mx-auto">
          <h1 className="text-4xl sm:text-6xl">
            Hi! I'm{" "}
            <span className="font-bold text-secondary-500">Dadan Hidayat</span>
          </h1>
          <div className="flex gap-3 flex-col">
            <p className="text-1xl sm:text-2xl">
              🧊 I'm helping people like you to be better especially in modern
              career, web development, software engineering, tech business, and
              life in general.
            </p>
            <span>Fun coding since 2020 + Professional coding since 2022</span>
            <div className="flex gap-3 justify-center">
              <ButtonLink className="flex gap-2 bg-[#E1306C]">
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
                Instagram
              </ButtonLink>
              <ButtonLink className="flex gap-2 bg-[#333]">
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
                Github
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
  );
}
