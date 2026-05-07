import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { Button } from '@heroui/react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='bg-[#EEEDFE] py-20'>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='flex justify-start items-center bg-white rounded-2xl px-5 py-2 gap-2'>
                    <IoRocketOutline></IoRocketOutline>
                    <p>500+ courses available</p>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <p className='text-[#3C3489] text-3xl font-semibold'>Upgrade Your Skills Today
                    </p>
                    <BsFillRocketTakeoffFill size={25}></BsFillRocketTakeoffFill>
                </div>
                <p className='text-[#7F77DD] text-2xl text-center'>Learn from Industry Experts. Build real projects. Get hired faster.
                </p>
                <div className='flex gap-5'>
                    <Button variant="tertiary">
                        <Link href={"/courses"}>
                            Explore Course
                        </Link>
                    </Button>
                    <Button variant="tertiary">Browse Free</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;