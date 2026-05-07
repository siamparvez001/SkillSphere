import Top from "./Top";
import { HiTrendingUp } from "react-icons/hi";

const TrandingCourse = async () => {
    const res = await fetch("https://skill-sphere-theta-henna.vercel.app/tranding_data.json");
    const courses = await res.json();
    return (
        <div className="bg-zinc-800 py-10">
            <div className="max-w-7xl mx-auto px-10">
                <div className="flex justify-between items-center my-5">
                    <div className="flex justify-start items-center gap-3">
                        <HiTrendingUp size="25px" color="white"></HiTrendingUp>
                        <h1 className="text-2xl text-white font-bold">Trending Now</h1>
                    </div>
                    <p className="px-3 py-1 rounded-2xl bg-lime-200">New</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        courses.map(course =>
                            <Top key={course.id} course={course}></Top>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TrandingCourse;