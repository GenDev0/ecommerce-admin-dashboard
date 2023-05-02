import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className='flex flex-row items-center justify-center space-x-2 text-blue-900'>
      <Image
        className='rounded-full'
        src={session?.user?.image!}
        alt={"ProfilePic"}
        width={40}
        height={40}
      />
      <span className=' text-blue-900'>{session?.user?.name}</span>
    </div>
  );
}
