import CourseCard from '@/components/CourseCard';


const AllCoursesPage = async () => {
    const res = await fetch("https://skill-sphere-theta-henna.vercel.app/data.json");
    const courses = await res.json();
    console.log(courses)
    return (
        <div className='bg-zinc-700 py-10'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-white font-bold text-2xl'>All Courses</h1>
                {/* search bar */}
                <div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                    {
                        courses.map(course=> 
                            <CourseCard key={course.id} course={course}></CourseCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCoursesPage;