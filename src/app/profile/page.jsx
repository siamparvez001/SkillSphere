








"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import Loading from "../all-courses/loading";


const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const isPending = userData.isPending;

    if (isPending) return <Loading />;

    const joinDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
        : null;

    return (
        <div className="flex justify-center items-start min-h-screen p-6 bg-default-50">
            <div className="w-full max-w-md rounded-2xl border border-default-200 bg-white overflow-hidden shadow-sm">

             
                <div className="h-20 bg-gradient-to-br from-emerald-500 to-emerald-800 relative">
                    <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-18 h-18 rounded-full border-4 border-white bg-emerald-600 flex items-center justify-center overflow-hidden">
                        {user?.image ? (
                            <img
                                src={user.image}
                                referrerPolicy="no-referrer"
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-2xl font-medium text-emerald-50">
                                {user?.name?.charAt(0)}
                            </span>
                        )}
                    </div>
                </div>

                <div className="pt-12 pb-4 px-6 text-center">
                    <h2 className="text-lg font-semibold text-default-900">{user?.name}</h2>
                    <p className="text-sm text-default-500 mt-0.5">{user?.email}</p>
                    <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-default-100 text-xs text-default-500">
                        ✓ Verified account
                    </span>
                </div>

                <hr className="border-default-100 mx-6" />

               
                <div className="px-6 py-4 space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-default-400 text-lg">👤</span>
                        <div>
                            <p className="text-xs text-default-400">Full name</p>
                            <p className="text-sm font-medium text-default-800">{user?.name}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-default-400 text-lg">✉️</span>
                        <div>
                            <p className="text-xs text-default-400">Email address</p>
                            <p className="text-sm font-medium text-default-800">{user?.email}</p>
                        </div>
                    </div>
                    {joinDate && (
                        <div className="flex items-center gap-3">
                            <span className="text-default-400 text-lg">📅</span>
                            <div>
                                <p className="text-xs text-default-400">Member since</p>
                                <p className="text-sm font-medium text-default-800">{joinDate}</p>
                            </div>
                        </div>
                    )}
                </div>

              
                <div className="px-6 pb-6">
                    <UpdateUserModal />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;