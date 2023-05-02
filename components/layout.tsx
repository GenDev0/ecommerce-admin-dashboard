import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='flex bg-blue-700 min-h-screen'>
        <Nav />
        <div className='bg-white flex-grow mt-2 mr-2 mb-2 p-4 rounded-lg'>
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className='flex items-center bg-blue-700  min-h-screen'>
      <div className='w-full text-center'>
        <button
          onClick={() => signIn("google")}
          className='bg-white p-2 rounded-lg'
        >
          Login With Google
        </button>
      </div>
    </div>
  );
}
