import CourseCard from "./CourseCard";


const TopCourses = async () => {
    const res = await fetch("https://skill-sphere-theta-henna.vercel.app/data.json");
    const courses = await res.json();
    const topCourses = courses.slice(0, 3)

    return (

        <div className=" py-10 bg-zinc-800">
            <div className="max-w-7xl mx-auto text-white">
                <h1 className="text-2xl font-bold my-5">Popular Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        topCourses.map(course =>
                            <CourseCard key={course.id} course={course}></CourseCard>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default TopCourses;