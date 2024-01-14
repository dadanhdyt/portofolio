import LogoLks from "~/images/logo_lks.png";
export default function SertifikatSection() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="ring-1 ring-accent-100 dark:bg-accent-50 rounded-lg bg-accent-50 dark:border-t-2 dark:border-t-background-100 dark:ring-0 dark:shadow-lg dark:border-1 ">
        <div className="p-2 py-3 gap-3 flex items-center">
          <img
            className="w-[80px] rounded sm:w-[120px] h-[80px] sm:h-[120px]"
            src={LogoLks}
            alt=""
          />
          <div className="flex flex-col cursor-pointer items-start gap-3 justify-center">
            <div className="flex flex-col">
              <span className="text-1xl sm:text-xl text-text-900 font-bold">
                JUARA 1 TEKNIK DESIGN LAMAN
              </span>
              <span className="text-sm md:text-lg text-text-500">
                LKS Tingkat kabupaten Sumedang
              </span>
              <span>2022</span>
            </div>
            <button className="bg-primary-50 dark:bg-accent-600 dark:ring-accent-700 ring-1 px-2  rounded-lg dark:text-text-900 text-text-800">
              Lihat Sertifikat
            </button>
          </div>
        </div>
      </div>
      <div className="ring-1 ring-accent-100 dark:bg-accent-50 rounded-lg bg-accent-50 dark:border-t-2 dark:border-t-background-100 dark:ring-0 dark:shadow-lg dark:border-1 ">
        <div className="p-2 py-3 gap-3 flex items-center">
          <img
            className="w-[80px] rounded sm:w-[120px] h-[80px] sm:h-[120px]"
            src={LogoLks}
            alt=""
          />
          <div className="flex flex-col cursor-pointer items-start gap-3 justify-center">
            <div className="flex flex-col">
              <span className="text-1xl sm:text-xl text-text-900 font-bold">
                JUARA 2 WEB TECHNOLOGY
              </span>
              <span className="text-sm md:text-lg text-text-500">
                LKS Tingkat Propinsi Jawa Barat
              </span>
              <span>2022</span>
            </div>
            <button className="bg-primary-50 dark:bg-accent-600 dark:ring-accent-700 ring-1 px-2  rounded-lg dark:text-text-900 text-text-800">
              Lihat Sertifikat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
