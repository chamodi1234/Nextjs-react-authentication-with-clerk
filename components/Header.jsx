"use client";

import Link from "next/link";

import { useAuth, UserButton } from "@clerk/nextjs";
const Header = () => {


    const {userId} = useAuth();
    
  return (
    <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">

            
            <Link href={'/'}>
            <div className="text-lg uppercase font-bold text-white">
                Clerk App
            </div>
            </Link>
        </div>
        <div className="text-white flex items-center">

            {!userId && (
                <>


<Link href={'sign-in'} className="text-gray-300 hover:text-white mr-4 " >Sign In
        </Link>

        <Link href={'sign-up'} className="text-gray-300 hover:text-white mr-4 " >Sign Up
        </Link>


                
                </>

            )}

            {userId && (
                <Link href='profile' className="text-grey-300 hover:text-white mr-4">
                    Profile
                </Link>
            )}

            <div className="ml-auto"></div>

            <UserButton afterSignOutUrl="/" />
        
        </div>
    </nav>
  )
}

export default Header