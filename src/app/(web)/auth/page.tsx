"use client"
import { ChangeEvent, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {signUp} from 'next-auth-sanity/client';
import { signIn,useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
const defaultFormData = {
    email:"",
    name:"",
    password:"",
}
const Auth = () => {
    const [formData,setFormData] = useState(defaultFormData);
    const inputStyles = "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none"
    function handleInputChange (event:ChangeEvent<HTMLInputElement>){
        const {name,value} = event.target;
        setFormData({...formData,[name]:value});
    }

    const {data:session} = useSession();
    console.log(session);

    const router = useRouter()
    const loginHander = async ()=>{
        try {
            await signIn();
            //push the User to HomePage.
            router.push("/")
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong")
        }
    }

    useEffect(()=>{
        if(session){
            router.push("/")
        }
    },[router,session])

    async function handleSubmit(event:ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const user = await signUp(formData)
            if(user){
                toast.success("Success. You can now Sign In.");
            }
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong")
            
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
                        <AiFillGithub onClick={loginHander} className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
                        |
                        <FcGoogle onClick={loginHander} className="ml-3 text-4xl cursor-pointer" />
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