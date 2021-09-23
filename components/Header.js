import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div>
      <header className="bg-[0x131921]">
        {/* Top Nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
            <Image
              onClick={() => router.push("/")}
              src="/logo1.png"
              width={50}
              height={40}
              alt="web Logo"
            />
          </div>
          {/* search */}
          <div className="sm:flex items-center  flex-grow cursor-pointer  bg-amazon_blue text-white  ">
            <p className="mr-0">ኢ-ገበያ</p>
          </div>
          {/* Right */}
          <div className="text-white flex items-center text-xs mx-6 space-x-6 whitespace-nowrap">
            <div className="link">
              <p className="font-extrabold md:text-sm">ስለ </p>
            </div>

            <div
              //   onClick={() => router.push("/checkout")}
              className="link relative flex items-center"
            >
              <ShoppingCartIcon className="h-10" />
              <p
                onClick={() => router.push("/auction")}
                className="hidden md:inline cursor-pointer  font-extrabold md:text-sm mt-2 "
              >
                ገበያ
              </p>
            </div>
          </div>
        </div>
        {/* Botton Nav */}
      </header>
    </div>
  );
}

export default Header;
