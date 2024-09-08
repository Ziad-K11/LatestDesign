"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

// Define the type for the state and the value from the Datepicker
type DateValueType = { startDate: Date | null; endDate: Date | null } | null;

const DatePickerComponent = () => {
    // Initialize state with DateValueType, which can be either the date object or null
    const [value, setValue] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });

    // Handle value change from Datepicker
    const handleValueChange = (newValue: DateValueType) => {
        setValue(newValue);
    };

    return (
        <div>
        <Datepicker
            primaryColor={"blue"}
            useRange={false}
            asSingle={true}
            value={value}
            onChange={handleValueChange}
            inputClassName="border-0 border-solid translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 ring-0 ring-offset-0 ring-offset-white ring-blue-500 ring-opacity-50 shadow-none text-xs leading-5 font-light tracking-tight m-0 pt-2.5 pb-2.5 pl-4 pr-14 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#E6EFFF] placeholder:text-[#005CFF] rounded-md "
        /></div>
    );
};

export default DatePickerComponent;
