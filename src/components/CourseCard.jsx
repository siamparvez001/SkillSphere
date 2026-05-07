import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
const CourseCard = ({ course }) => {
    return (
        <Card className="border  bg-zinc-700 space-y-2">
            <div>
                <div className="relative w-full aspect-square">
                    <Image
                        src={course.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={course.title}
                        className="object-cover rounded-xl"
                    />
                    <Chip size="sm" className="absolute right-2 top-2">{course.category}</Chip>
                </div>
                <div>
                    <h2 className="text-xl">{course.title}</h2>
                    <p className="opacity-70">{course.instructor}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                        <FaStar></FaStar>
                        <p>{course.rating}</p>
                    </div>
                    <h1 className="bg-sky-200 px-2 py-1 rounded-2xl text-black">{course.level}</h1>
                </div>
                <div className="mt-5">
                    <Link href={`/all-courses/${course.id}`}>
                        <Button variant="outline" className="w-full text-white">View Details</Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default CourseCard;