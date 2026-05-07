
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchInput from "./SearchInput";

const Category = ({ courses, search }) => {
    const [searchText, setSearchText] = useState(search || "");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/all-courses?search=${searchText}`);
    };

    return (
        <div>
            <div className='my-5'>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search courses..."
                        className="w-[280px] px-4 py-2 rounded-lg text-white outline-none border border-zinc-400 focus:border-blue-400"
                    />
                    <button
                        type="submit"
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Search
                    </button>
                </form>

                <SearchInput courses={courses} search={search}></SearchInput>
            </div>
        </div>
    );
};

export default Category;
