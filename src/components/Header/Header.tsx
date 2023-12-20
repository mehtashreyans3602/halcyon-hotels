"use client"
import ThemeContext from "@/context/themeContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const { data: session } = useSession();

    return (
        <div className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between">
            <div className="flex items-center w-full md:2/3">
                <Link href="/" className="font-black text-tertiary-dark">Halcyon Hotels</Link>

                <ul className="flex items-center">
                    <li className="ml-2">
                        {session?.user ?
                            (<Link href={`/users/${session.user.id}`}>
                                {session.user.image ? <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <Image src={session.user.image} height={40} width={40} className="scale-animation img" alt={session.user.name!}/>
                                </div> : <FaUserCircle className="cursor-pointer" />}
                            </Link>) :
                            (<Link href="/auth">
                                <FaUserCircle className="cursor-pointer" />
                            </Link>)}
                    </li>
                    <li className="ml-2">
                        {darkTheme ? (
                            <MdOutlineLightMode
                                className='cursor-pointer'
                                onClick={() => {
                                    setDarkTheme(false);
                                    localStorage.removeItem('hotel-theme');
                                }}
                            />
                        ) : (
                            <MdDarkMode
                                className='cursor-pointer'
                                onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem('hotel-theme', 'true');
                                }}
                            />
                        )}
                    </li>
                </ul>
            </div>
            <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/">Rooms</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </div>

    );
};
export default Header;