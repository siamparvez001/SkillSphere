
import CourseCard from "./CourseCard";

const SearchInput = ({ courses = [], search }) => {
    const filteredCourses = search
        ? courses.filter(course =>
            course.title.toLowerCase().includes(search.toLowerCase())
        )
        : courses;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 text-white'>
            {filteredCourses.length > 0 ? (
                filteredCourses.map(course =>
                    <CourseCard key={course.id} course={course}></CourseCard>
                )
            ) : (
                <p className="text-white col-span-3 text-center text-lg">
                    কোনো course পাওয়া যায়নি।
                </p>
            )}
        </div>
    );
};

export default SearchInput;