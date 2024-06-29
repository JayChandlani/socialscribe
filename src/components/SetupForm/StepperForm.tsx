"use client";
import { useState } from "react";
import Header from "../Header";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    example: string;
    exampleRequired: string;
}

const StepperForm: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example"))

    return (
        <>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="w-full bg-gray-200 h-1 dark:bg-gray-700">
                <div className="bg-blue-600 h-1 rounded-full" style={{ width: "50%" }}></div>
            </div>
            <div className="  bg-white dark:border-strokedark dark:bg-boxdark lg:px-52 lg:py-18 h-screen">
                <div className=" flex justify-between items-center">
                    <div>
                        <p className=" lg:text-4xl font-bold">Enter your company details</p>
                        <p className=" lg:text-xl font-light mt-2">You can always change these later</p>
                    </div>
                    <button
                        className="rounded-lg bg-primary px-10 py-4  font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Continue
                    </button>
                </div>
                <form className=" grid grid-cols-3 mt-10 gap-4 ">
                    <div className="">
                        <label className="mb-3 ml-1 block text-sm font-medium text-black dark:text-white">
                            Company Name
                        </label>
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div className="">
                        <label className="mb-3 ml-1 block text-sm font-medium text-black dark:text-white">
                            What are you selling?
                        </label>
                        <input
                            type="text"
                            placeholder="Rental Clothes"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div className="">
                        <label className="mb-3 ml-1 block text-sm font-medium text-black dark:text-white">
                            Who buyes your product or service?
                        </label>
                        <input
                            type="text"
                            placeholder="Womens and girls"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default StepperForm;
