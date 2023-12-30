"use client";
import { SideBar } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <div className="">
        <Image
          src="/svg/logo.svg"
          alt="logo"
          width={64}
          height={64}
          priority={true}
        />
      </div>
      <div className="mt-4 flex flex-col gap-8 text-md lg:text-2xl group  ">
        {SideBar.map((item) => (
          <div
            className="flex flex-col gap-4 items-start justify-center  p-4 rounded-full cursor-pointer hover:bg-gray-500/35 transition-all duration-100"
            key={item.title}
          >
            <Link href={item.path} className="flex gap-4 items-center">
              {item.icon}
              <span
                className={`${
                  pathname === item.path
                    ? "font-bold text-primary"
                    : "font-normal text-white"
                } hidden md:block`}
              >
                {item.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
