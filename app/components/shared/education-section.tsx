import logoIfsu from "~/images/smkifsu.png";
import LogoMardira from "~/images/mardira.png";
export default function Education() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="hover:bg-background-200 shadow-lg ring-background-200 bg-primary-100 hover:ring-primary-200 ring-1 rounded-lg">
        <div className="p-2 gap-3 flex">
          <img
            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
            src={logoIfsu}
            alt=""
          />
          <div className="flex flex-col items-start justify-center">
            <span className="text-1xl sm:text-xl text-text-900 font-bold">
              REKAYASA PERANGKAT LUNAK
            </span>
            <span className="text-sm md:text-lg text-text-500">
              SMK INFORMATIKA SUMEDANG
            </span>
            <span>2020-2023</span>
          </div>
        </div>
      </div>
      <div className="hover:bg-background-200 shadow-lg ring-background-200 bg-primary-100 hover:ring-primary-200 ring-1 rounded-lg">
        <div className="p-2 gap-3 flex">
          <img
            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
            src={LogoMardira}
            alt=""
          />
          <div className="flex flex-col items-start justify-center">
            <span className="text-1xl sm:text-xl text-text-900 font-bold">
              TEKNIK INFORMATIKA
            </span>
            <span className="text-sm md:text-lg text-text-500">
              STMIK MARDIRA INDONESIA
            </span>
            <span>2023-SEKARANG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
//end