'use client'

import { useSession, signOut } from "next-auth/react"
import NewChat from "./NewChat"

function SideBar() {
    const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                <NewChat />
                <div>
                    {/*ModelSelectoion*/}
                </div>

                {/*ChatRows*/}
            </div>
        </div>
        {session && (
            <img onClick={() => signOut()}
                src={session.user?.image!} alt="Profile Picture" 
                className="rounded-full h-12 w-12 cursor-pointer mx-auto mb-2 hover:opacity-50"
            />
        )}
    </div>
  )
}

export default SideBar