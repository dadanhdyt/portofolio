import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <footer className="mt-10 border-t py-5 border-t-primary-200">
      <div className="container flex flex-col gap-10">
        <div className="flex gap-5 sm:flex-row flex-col">
          <div className="sm:max-w-sm text-center w-full">
            <h1 className="">Dadan Hidayat</h1>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-3 gap-5 sm:gap-0 place-items-center sm:place-content-start sm:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-text-500 uppercase">Project</span>
                    <ul>
                        <li><a href="">Produk 1</a></li>
                        <li><a href="">Produk 2</a></li>
                        <li><a href="">Produk 3</a></li>
                        <li><a href="">Produk 4</a></li>
                        <li><a href="">Produk 5</a></li>
                        <li><a href="">Produk 6</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-text-500 uppercase">Company</span>
                    <ul>
                        <li><a href="">Produk 1</a></li>
                        <li><a href="">Produk 2</a></li>
                        <li><a href="">Produk 3</a></li>
                        <li><a href="">Produk 4</a></li>
                        <li><a href="">Produk 5</a></li>
                        <li><a href="">Produk 6</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-text-500 uppercase">Colaboration</span>
                    <ul>
                        <li><a href="">Produk 1</a></li>
                        <li><a href="">Produk 2</a></li>
                        <li><a href="">Produk 3</a></li>
                        <li><a href="">Produk 4</a></li>
                        <li><a href="">Produk 5</a></li>
                        <li><a href="">Produk 6</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-text-500 uppercase">MyStack</span>
                    <ul>
                        <li><a href="">Produk 1</a></li>
                        <li><a href="">Produk 2</a></li>
                        <li><a href="">Produk 3</a></li>
                        <li><a href="">Produk 4</a></li>
                        <li><a href="">Produk 5</a></li>
                        <li><a href="">Produk 6</a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <span className="flex items-center gap-2">Build With <Icon icon={"mdi:heart"}></Icon>  Dadan hidayat</span>
        </div>
      </div>
    </footer>
  );
}
