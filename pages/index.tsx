import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='flex items-center bg-blue-700 w-screen h-screen'>
        <div className='w-full text-center'>
          <span>
            Signed in as {session?.user?.email} <br />
          </span>
          <button onClick={() => signOut()} className='bg-white p-2 rounded-lg'>
            SignOut
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className='flex items-center bg-blue-700 w-screen h-screen'>
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
