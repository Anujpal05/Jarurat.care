import React from 'react'
import { RxCross1 } from "react-icons/rx";


function Form() {
    return (

        <div className='w-full min-h-screen max-h-fit  bg-black backdrop:blur-[md]  top-0 right-0 flex justify-center items-center'>
            <div className='w-60% min-h-screen h-fit rounded-md  bg-white font-sans p-7 md:p-10 '>
                <div className=' flex justify-end '><div className='text-black p-2 w-fit rounded-full text-2xl bg-red-200 hover:bg-red-300'> <RxCross1 /></div>
                </div>
                <div className=' space-y-1 '>
                    <h1 className=' text-3xl md:text-4xl '>CancerConnect</h1>
                    <p className='text-xl '>We will reach out you within a week</p>
                </div>

                <form action="" className=' space-y-6 pt-7'>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-sm'>FIRST NAME</label>
                        <input type="text" className=' p-3 bg-blue-50 outline-blue-200 rounded-md' placeholder='John' name="text" />
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-sm'>LAST NAME</label>
                        <input type="text" className=' p-3 bg-blue-50 outline-blue-200 rounded-md' placeholder='Doe' name="text" />
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-sm'>EMAIL</label>
                        <input type="text" className=' p-3 bg-blue-50 outline-blue-200 rounded-md' placeholder='john@gmail.com' name="email" />
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-sm'>PHONE</label>
                        <input type="number" className=' p-3 bg-blue-50 outline-blue-200 rounded-md' placeholder='+91 7002 000 000' name="number" />
                    </div>
                    <div className=' flex text-sm'>
                        <input type="checkbox" name='consent' className='outline-none' />
                        <p className='px-1'>Yes, I agree to receive emails from Jarurat Care Foundation to be a part of cancer community</p>
                    </div>
                    <div className='flex justify-center '> <button className=' p-3 b bg-blue-50 border-2 border-blue-200 rounded-md hover:bg-blue-200 transition-all duration-300 text-[1rem]'>Join Jarurat Care</button></div>
                </form>
            </div>
        </div>
    )
}

export default Form
