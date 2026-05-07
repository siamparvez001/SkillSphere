import Link from "next/link";

import { MdEmail } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
const Footer = () => {
    return (
        <footer className="relative mt-24 bg-zinc-800 text-white">
            <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />


            <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />


            <div
                className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">

                            <h2 className="text-xl font-semibold tracking-tight ">
                                <span>Skill</span> <span>Sphere</span>
                            </h2>
                        </div>

                        <p className="text-sm leading-relaxed  opacity-70 max-w-xs">
                            Learn skills that matter from industry experts.
                        </p>
                        <div className="flex justify-start items-center gap-2 ">
                            <MdEmail></MdEmail>
                            <p className="opacity-70"> support@skillsphere.com
                            </p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <GrLocationPin></GrLocationPin>
                            <p className="opacity-70">  Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold  dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link
                                    href="/"
                                    className=" text-white opacity-70  transition"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/all-courses"
                                    className="text-white opacity-70 transition"
                                >
                                    All Courses
                                </Link>
                            </li>
                            
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-white opacity-70 transition"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-white opacity-70 transition"
                                >
                                    Terms & Conditions

                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    {/* Social Links */}
                    <div>
                        <p>Social Links</p>
                        <div className="opacity-70 flex flex-col gap-1 mt-3">
                            <Link href={'/facebook'}>Facebook</Link>
                            <Link href={'/gitHub'}>GitHub</Link>
                            <Link href={'/linkedin'}>Linkedin</Link>
                        </div>
                    </div>
                    
                </div>

                {/* Divider */}
                <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                {/* Bottom */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs ">
                    <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;