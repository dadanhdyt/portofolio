
import logoIfsu from '~/images/smkifsu.png'
import LogoMardira from '~/images/mardira.png'
export default function Education(){
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="shadow bg-secondary-100 hover:bg-primary-100 hover:ring-primary-200 ring-1 ring-secondary-200 rounded-lg">
                <div className="p-2 gap-3 flex">
                <img className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]' src={logoIfsu} alt="" />
                <div className="flex flex-col items-start justify-center">
                    <span className='text-1xl sm:text-2xl font-bold'>REKAYASA PERANGKAT LUNAK</span>
                    <span className='text-sm md:text-lg'>SMK INFORMATIKA SUMEDANG</span>
                    <span>2020-2023</span>
                </div>
                </div>
            </div>
            <div className="shadow bg-secondary-100 hover:bg-primary-100 hover:ring-primary-200 ring-1 ring-secondary-200 rounded-lg">
                <div className="p-2 gap-3 flex">
                <img className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]' src={LogoMardira} alt="" />
                <div className="flex flex-col items-start justify-center">
                    <span className='text-1xl sm:text-2xl font-bold'>TEKNIK INFORMATIKA</span>
                    <span className='text-sm md:text-lg'>STIMIK MARDIRA INDONESIA</span>
                    <span>2023-Sekarang</span>
                </div>
                </div>
            </div>
        </div>
    )
}