import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import Logout from "./logout";

export default async function Navbar() {

  const data = await auth();
  

  return (
    
    <header className="h-[60px] w-screen bg-teal-500 px-28 max-sm:px-5 flex items-center justify-between text-white shadow-md fixed z-50">
      {/* <Wrapper> */}
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
              <Image
                alt="logo-blog"
                src={"/logo.png"}
                width={100}
                height={100}
                className="h-8 w-8"
                priority
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Blogger
              </span>
        </Link>

        {
          data ? (
            <div className="flex gap-5">
              <p>{data.user.name}</p>
              <Logout />
            </div>
          ) : (

            /** tombol Login */
            <div className="flex gap-5">
              <Link
                  href={"/login"}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800"
                >
                  Login
              </Link>
              
              <Link
                href={"/register"}
                className="inline-flex items-center border px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-100"
              >
                Register
              </Link>
            </div>
          )
        }

      {/* </Wrapper> */}
    </header>
  );
}
