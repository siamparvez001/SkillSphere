
"use client";
import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CourseSlider = ({ courses }) => {
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className="relative">
            <button
                onClick={() => swiperInstance?.slidePrev()}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 hover:bg-[#7F77DD] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md transition"
            >
                <FaChevronLeft size={14} />
            </button>
            <button
                onClick={() => swiperInstance?.slideNext()}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 hover:bg-[#7F77DD] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md transition"
            >
                <FaChevronRight size={14} />
            </button>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {courses.map((course) => (
                    <SwiperSlide key={course.id}>
                        <CourseCard course={course} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CourseSlider;
