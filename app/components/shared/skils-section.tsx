import { Icon } from "@iconify/react/dist/iconify.js";

export default function SkilsSection() {
  return (
    <div className="">
      <ul className="grid grid-cols-3 sm:grid-cols-10 gap-2">
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="skill-icons:html" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="skill-icons:css" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="skill-icons:javascript" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="skill-icons:remix-dark" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="logos:laravel" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="logos:nodejs" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="logos:mysql" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="logos:php" />
          </a>
        </li>
        <li className="bg-accent-100 shadow ring-accent-200 ring-1 flex items-center justify-center rounded-lg p-3">
          <a href="">
            <Icon width={60} icon="logos:codeigniter-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
