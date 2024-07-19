import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../../services/apiconnector';
import countrycode from "../../../data/countrycode.json"

const ContacUsForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const submitContactForm = async (data) => {
        console.log("Logging Data", data);
        try {
            setLoading(true);
            // const response = await apiConnector("POST" )
            const response = { status: "OK" };
            console.log("Logging response:", response);
            setLoading(false);

        } catch (err) {
            console.log("error", err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstName: "",
                lastName: "",
                message: "",
                phoneNo: "",
            })
        }
    }, [reset, isSubmitSuccessful])


    return (
        <form onSubmit={handleSubmit(submitContactForm)} className='flex flex-col gap-4'>

            <div className='flex flex-col gap-5'>
                <div className='flex gap-5'>
                    {/* firstName */}
                    <div className='flex flex-col'>
                        <label htmlFor='firstName'>First Name <sup>*</sup></label>
                        <input
                            type='text'
                            name='firstName'
                            id='firstName'
                            placeholder='Enter first name'
                            {...register("firstName", { required: true })}
                            className=' text-black'
                        />{
                            errors.firstName && (
                                <span>
                                    Please Enter Your name
                                </span>
                            )
                        }
                    </div>

                    {/* lastname */}
                    <div className='flex flex-col'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            id='lastName'
                            placeholder='Enter Last name'
                            {...register("lastName")}
                            className=' text-black'
                        />
                    </div>
                </div>

                {/* email */}

                <div className=' flex flex-col'>
                    <label htmlFor='email'>Email Address <sup>*</sup></label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Enter Email Address'
                        {...register("email", { required: true })}
                        className=' text-black'
                    />
                    {
                        errors.email && (
                            <span>
                                Please Enter your email address
                            </span>
                        )
                    }
                </div>

                {/* phone no */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor='phonenumber'>Phone Number</label>
                    <div className='flex gap-5'>

                        {/* drop down */}
                        <select
                            name='dropdown'
                            id='dropdown'
                            {...register("countrycode", { required: true })}
                            className='text-black'
                        >
                            {
                                countrycode.map((element, index) => (
                                    <option key={index} value={element.code}>
                                        {element.code} - {element.country}
                                    </option>
                                ))
                            }
                        </select>

                        {/* phone no */}
                        <div>
                            <input
                                type='phonenumber'
                                name='phonenumber'
                                id='phonenumber'
                                placeholder='12345 67890'
                                className='text-black'
                                {...register("phoneNo",
                                    {
                                        required: { value: true, message: "Please enter phone number" },
                                        maxLength: { value: 11, message: "Invalid Phone Number" },
                                        minLength: { value: 8, message: "Invalid Phone Number" }
                                    }
                                )}
                            />{
                                errors.phoneNo && (
                                    <span>
                                        {
                                            errors.phoneNo.message
                                        }
                                    </span>
                                )
                            }
                        </div>

                    </div>
                </div>


                {/* message */}
                <div className='flex flex-col'>
                    <label htmlFor='message'>Message<sup>*</sup></label>
                    <textarea
                        name='message'
                        id='message'
                        rows={7}
                        cols={30}
                        placeholder='Enter Your message here'
                        {...register("message", { required: true })}
                        className=' text-black'
                    />
                    {
                        errors.message && (
                            <span>
                                Please enter your message
                            </span>
                        )
                    }
                </div>

                <button type='submit' className='flex flex-col rounded-md bg-yellow-50 py-2 text-[16px] items-center text-richblack-900 font-medium'>
                    Send message
                </button>

            </div>


        </form>
    )
}

export default ContacUsForm
