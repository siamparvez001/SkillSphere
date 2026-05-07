import {  Label, SearchField } from "@heroui/react";
import SearchInput from "./SearchInput";

const Category = async () => {
    const res = await fetch("https://skill-sphere-theta-henna.vercel.app/data.json");
    const courses = await res.json();
    return (
        <div>
            <div className='my-5'>
                <SearchField name="search">
                    <Label className='text-2xl'>Search</Label>
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-[280px]" placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
               <SearchInput></SearchInput> 

            </div>
        </div>
    );
};

export default Category;