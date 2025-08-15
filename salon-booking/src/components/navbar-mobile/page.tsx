"use client";
import Link from "next/link";
import { HomeIcon, Settings, User, User2 } from "lucide-react";
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;
  console.log(isActive);

  return (
    <div className="flex justify-between border-t py-4 px-18 text-xs font-medium text-muted-foreground">
      <div>
        <Link
          href={"/dashboard"}
          className="flex flex-col justify-center items-center gap-2"
        >
          <HomeIcon
            className={isActive("/dashboard") ? "text-primary" : ""}
            size={24}
            strokeWidth={1.5}
          />
          <span className={isActive("/dashboard") ? "text-primary" : ""}>
            Home
          </span>
          {isActive("/dashboard") && (
            <div className="h-1 w-6 rounded-full bg-primary mt-1" />
          )}
        </Link>
      </div>
      <div>
        <Link
          href={"/dashboard/profile"}
          className="flex flex-col justify-center items-center gap-2"
        >
          <User2
            className={isActive("/dashboard/profile") ? "text-primary" : ""}
            size={24}
            strokeWidth={1.5}
          />
          <span
            className={isActive("/dashboard/profile") ? "text-primary" : ""}
          >
            Profile
          </span>
          {isActive("/dashboard/profile") && (
            <div className="h-1 w-6 rounded-full bg-primary mt-1" />
          )}
        </Link>
      </div>
      <div>
        <Link
          href={"/dashboard"}
          className="flex flex-col justify-center items-center gap-2"
        >
          <Settings size={24} strokeWidth={1.5} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMobile;
