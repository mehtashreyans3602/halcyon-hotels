"use client"
import { ChangeEvent, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
const defaultFormData = {
    email:"",
    name:"",
    password:"",
}
const Auth = () => {
    const [formData,setFormData] = useState(defaultFormData);
    const inputStyles = "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none"
    function handleInputChange (event:ChangeEvent<HTMLInputElement>){
        const {name,value} = event.target;
        setFormData({...formData,[name]:value});
    }
    async function handleSubmit(event:ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            console.log(formData)
        } catch (error) {
            console.log(error)
            
        }finally{
            setFormData(defaultFormData);
        }
    }
    return (
        <section className="Container mx-auto">
            <div className="p-6 space-y-4 md:space-x-6 sm:p-8 w-80 md:w-[70%] mx-auto justify-center">
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an Account</h1>
                    <p>OR</p>
                    <span className=" inline-flex items-center">
                        <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
                        |
                        <FcGoogle className="ml-3 text-4xl cursor-pointer" />
                    </span>

                </div>
                <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}  placeholder='johndoe@gmail.com' className={inputStyles} required />
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='John Doe' className={inputStyles} required />
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder='Password' minLength={8} className={inputStyles} required />
                    <button type="submit" className='w-full bg-tertiary-light focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Submit</button>
                    </form>
                <button className='text-blue-700 underline'>Login</button>
            </div>
        </section>
    )
}

export default Auth