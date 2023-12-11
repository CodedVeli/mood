import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {

  const {userId} = auth()

  let href = userId ? "/journal" : "/new-user"
  return (
    <div className=" w-screen h-screen bg-black flex  flex-col justify-center items-center text-white">
      <div className=" w-full max-w-[600px] mx-auto">
      <h1 className="  text-5xl mb-4">Journal App</h1>
      <p className=" text-2xl mb-4 text-white/60">Best app for tracking your mood throughout your life </p>
      <div>
        <Link href={href}>
        <button className=" bg-blue-600 px-4 py-2 text-xl">get started</button>

        </Link>
        </div>
      </div>
    </div>
  )
}
