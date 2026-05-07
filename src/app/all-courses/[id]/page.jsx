import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { BsPersonBadgeFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
const CourseDetails = async ({ params }) => {
    const { id } = await params
    const res = await fetch("https://skill-sphere-theta-henna.vercel.app/data.json");
    const courses = await res.json();
    const course = courses.find(p => p.id == id)
    if (!course) {
        notFound();
    }
    return (
        <div className="bg-[#EEEDFE]">
            <div className="max-w-7xl mx-auto flex py-15 flex-col md:flex-row gap-10 px-10">
                <div className="relative w-56 h-36">
                    <Image
                        src={course.image}
                        fill
                        alt={course.title}
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="space-y-3">
                    <p className="px-3 py-2 bg-[#7F77DD] rounded-2xl w-fit text-white">{course.category}</p>
                    <p className="text-3xl font-semibold text-[#3C3489]">{course.title}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex justify-start items-center gap-2">
                            <BsPersonBadgeFill></BsPersonBadgeFill>
                            <p>{course.instructor}</p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <IoTime></IoTime>
                            <p>{course.duration}</p>
                        </div>
                        
                        <div className="flex justify-start items-center gap-2">
                            <FaStar></FaStar>
                            <p>{course.rating}</p>
                        </div>
                    </div>
                    <p className="text-[#3C3489] text-xl ">{course.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;