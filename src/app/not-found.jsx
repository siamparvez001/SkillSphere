

import Link from "next/link";

const NotFound = () => {
    return (
        <div className="bg-zinc-700 min-h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-9xl font-bold text-blue-400">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-zinc-400 mt-2 text-lg">
                page 
            </p>
            <Link
                href="/"
                className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors"
            >
                Go Back home
            </Link>
        </div>
    );
};

export default NotFound;