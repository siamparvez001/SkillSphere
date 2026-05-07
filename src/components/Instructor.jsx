import { Card } from "@heroui/react";
import Image from "next/image";
import AnimatedCard from "./AnimatedCard";
const Instructor = ({ instructor }) => {
    return (
        <AnimatedCard>
            <Card className="bg-gray-500 py-10 px-5 h-auto">
                <div className="relative w-full h-64 ">
                    <Image
                        src={instructor.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={instructor.name}
                        className="object-cover h-full rounded-xl"
                    />
                </div>
                <div className="text-white flex flex-col justify-center items-center space-y-1">
                    <h1 className="text-2xl font-bold">{instructor.name}</h1>
                    <p className="opacity-70">{instructor.role}</p>
                    <p className="opacity-70 text-purple-900 font-bold text-lg">{instructor.totalCourses} courses</p>
                    <p className="opacity-70">{instructor.totalStudents} students</p>
                </div>
            </Card>
        </AnimatedCard>
    );
};

export default Instructor;