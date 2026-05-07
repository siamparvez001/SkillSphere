
"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const isPending = userData.isPending;
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navClass = (href) =>
        pathname === href
            ? "bg-[#7F77DD] text-white px-3 py-1.5 rounded-md"
            : "text-white px-3 py-1.5";

    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success("Signed out successfully!");
    };

    return (
        <div className="border-b px-2 bg-zinc-700">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

                <div className="flex gap-2 items-center">
                    <h3 className="text-2xl font-bold">
                        <span className="text-[#7F77DD]">Skill</span>{" "}
                        <span className="text-white">Sphere</span>
                    </h3>
                </div>

                <ul className="hidden md:flex text-white items-center gap-5 text-sm">
                    <li><Link className={navClass("/")} href="/">Home</Link></li>
                    <li><Link className={navClass("/all-courses")} href="/all-courses">Courses</Link></li>
                    <li><Link className={navClass("/profile")} href="/profile">My Profile</Link></li>
                </ul>

                <div className="hidden md:flex gap-4">
                    {isPending ? (
                        <p className="text-white text-sm">Loading...</p>
                    ) : !user ? (
                        <ul className="flex items-center text-sm gap-5">
                            <li>
                                <Button variant="outline" className="text-white">
                                    <Link href="/signup">SignUp</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="outline" className="text-white">
                                    <Link href="/signin">SignIn</Link>
                                </Button>
                            </li>
                        </ul>
                    ) : (
                        <div className="flex gap-3">
                            <Avatar size="sm">
                                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
                        </div>
                    )}
                </div>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {menuOpen && (
                <div className="md:hidden bg-zinc-800 border-t border-zinc-700 px-4 pb-4">
                    <ul className="flex flex-col text-white gap-4 text-sm pt-4">
                        <li><Link className={navClass("/")} href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link className={navClass("/all-courses")} href="/all-courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
                        <li><Link className={navClass("/profile")} href="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link></li>
                    </ul>

                    <div className="mt-4">
                        {isPending ? (
                            <p className="text-white text-sm">Loading...</p>
                        ) : !user ? (
                            <ul className="flex items-center text-sm gap-5">
                                <li>
                                    <Button variant="outline" className="text-white">
                                        <Link href="/signup">SignUp</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="outline" className="text-white">
                                        <Link href="/signin">SignIn</Link>
                                    </Button>
                                </li>
                            </ul>
                        ) : (
                            <div className="flex gap-3">
                                <Avatar size="sm">
                                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                                <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;