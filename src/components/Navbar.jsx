"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className="border-b px-2 bg-gray-700">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">

                    <h3 className=" text-2xl font-bold"><span className="text-[#7F77DD]">Skill</span> <span className="text-white">Sphere</span> </h3>
                </div>

                <ul className="flex text-white items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/courses"}>Courses</Link>
                    </li>

                    <li>
                        <Link href={"/profile"}>My Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4">
                    {!user && (
                        <ul className="flex items-center  text-sm gap-5">
                            <li>
                                <Button variant="outline" className="text-white">
                                    <Link href={"/signup"}>SignUp</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="outline" className="text-white">
                                    <Link href={"/signin"}>SignIn</Link>
                                </Button>
                            </li>
                        </ul>
                    )}

                    {user && (
                        <div className="flex gap-3">
                            <Avatar size="sm">
                                <Avatar.Image
                                    alt="John Doe"
                                    src={user?.image}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>

                            <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;