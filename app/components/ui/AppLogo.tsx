export default function AppLogo() {
  return (
    <span className="flex py-2 items-center justify-start gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <g fill="none">
          <path
            fill="#433B6B"
            d="M2 5a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
          />
          <path
            fill="#FFB02E"
            d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4S4 9.373 4 16s5.373 12 12 12m0-9a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
          />
          <path
            fill="#FCD53F"
            d="m22.42 8.997l-4.055 4.423A3.487 3.487 0 0 0 16 12.5a3.48 3.48 0 0 0-1.942.588l-3.33-4.995c-.458-.688-.276-1.63.469-1.992A10.955 10.955 0 0 1 16 5c2.327 0 4.485.723 6.263 1.956c.68.472.716 1.43.157 2.04m-1.617 16.902c.745-.362.927-1.303.468-1.992l-3.33-4.994A3.484 3.484 0 0 1 16 19.5a3.487 3.487 0 0 1-2.365-.92L9.58 23.003c-.56.61-.523 1.57.157 2.041A10.95 10.95 0 0 0 16 27c1.722 0 3.352-.396 4.803-1.101"
          />
          <path
            fill="#FF822D"
            d="M16 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-1a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
          />
          <path
            fill="#D3D3D3"
            d="M20 13a2 2 0 0 1 2-2h8v10h-8a2 2 0 0 1-2-2z"
          />
        </g>
      </svg>
      <a className="font-semibold text-text" href="">
        Dadan Hidayat
      </a>
    </span>
  );
}