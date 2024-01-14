import { Icon } from "@iconify/react/dist/iconify.js";
import SkilItem from "../ui/skil-item";

export default function SkilsSection() {
  return (
    <div className="">
      <ul className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        <SkilItem>
          <Icon width={60} icon="skill-icons:html" />
          <span>HTML</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="skill-icons:css" />
          <span>CSS</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="vscode-icons:file-type-reactjs" />
          <span>ReactJS</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="skill-icons:javascript" />
          <span>Javascript</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="skill-icons:remix-dark" />
          <span>RemixJS</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="logos:laravel" />
          <span>Laravel</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="skill-icons:git" />
          <span>GIT</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="logos:nodejs-icon" />
          <span>NodeJS</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="skill-icons:mysql-light" />
          <span>MYSQL</span>
        </SkilItem>

        <SkilItem>
          <Icon width={60} icon="devicon:php" />
          <span>PHP</span>
        </SkilItem>
        <SkilItem>
          <Icon width={60} icon="logos:codeigniter-icon" />
          <span>Codeigniter</span>
        </SkilItem>
      </ul>
    </div>
  );
}
