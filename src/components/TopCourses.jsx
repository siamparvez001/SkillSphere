import CourseCard from "./CourseCard";
import { TbChartBarPopular } from "react-icons/tb";
import CourseSlider from "./CourseSlider";
const TopCourses = async () => {
    const res = await fetch("https://skill-sphere-theta-henna.vercel.app/data.json");
    const courses = await res.json();
    const topCourses = courses.slice(0, 3)

    return (

        <div className=" py-10 bg-zinc-700">
            <div className="max-w-7xl mx-auto px-10 text-white">
                <div className="flex justify-start items-center gap-3">
                    <TbChartBarPopular size="25px"></TbChartBarPopular>
                    <h1 className="text-2xl font-bold my-5">Popular Courses</h1>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        topCourses.map(course =>
                            <CourseCard key={course.id} course={course}></CourseCard>
                        )
                    }
                </div> */}
                <CourseSlider courses={courses} />

            </div>
        </div>
    );
};

export default TopCourses;