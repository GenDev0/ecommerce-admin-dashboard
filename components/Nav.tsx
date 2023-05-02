import {
  ArrowLeftOnRectangleIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  HomeIcon,
  QueueListIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

type Props = {};

export default function Nav({}: Props) {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-blue-700 rounded-l-lg ";
  const router = useRouter();
  const { pathname } = router;
  return (
    <aside className='text-white p-4 pr-0'>
      <Link href={"/"} className='flex gap-1 mb-4 mr-4 '>
        <BuildingStorefrontIcon className='h-8 w-8 ' />
        <span className='text-lg'>EcommerceAdmin</span>
      </Link>
      <nav className='flex flex-col gap-2'>
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <HomeIcon className='h-8 w-8 ' />
          <span className='text-lg'>Home</span>
        </Link>
        <Link
          href={"/products"}
          className={pathname === "/products" ? activeLink : inactiveLink}
        >
          <RectangleGroupIcon className='h-8 w-8 ' />
          <span className='text-lg'>Products</span>
        </Link>
        <Link
          href={"/orders"}
          className={pathname === "/orders" ? activeLink : inactiveLink}
        >
          <QueueListIcon className='h-8 w-8 ' />
          <span className='text-lg'>Orders</span>
        </Link>
        <Link
          href={"/settings"}
          className={pathname === "/settings" ? activeLink : inactiveLink}
        >
          <Cog6ToothIcon className='h-8 w-8 ' />
          <span className='text-lg'>Settings</span>
        </Link>
        <Link
          href={"#"}
          onClick={() => signOut()}
          className={` flex gap-1 p-1 hover:bg-white hover:text-blue-700 hover:rounded-l-lg `}
        >
          <ArrowLeftOnRectangleIcon className='h-8 w-8 ' />
          <span className='text-lg'>logout</span>
        </Link>
      </nav>
    </aside>
  );
}
