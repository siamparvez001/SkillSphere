import Instructor from "./Instructor";
import { GiWindsock } from "react-icons/gi";

const TopInstructor = async () => {
    const res = await fetch("https://skill-sphere-theta-henna.vercel.app/top_instructors_data.json");
    const instructors = await res.json();
    return (
        <div className="bg-zinc-700 py-10">
            <div className="max-w-7xl mx-auto px-10 text-white">
                <div className="flex justify-start items-center gap-3">
                    <GiWindsock size="25px"></GiWindsock>
                    <h1 className="text-2xl font-bold my-5 ">Top Instructors</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        instructors.map(instructor =>
                            <Instructor key={instructor.id} instructor={instructor}></Instructor>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TopInstructor;