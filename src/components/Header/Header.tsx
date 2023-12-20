"use client"
import ThemeContext from "@/context/themeContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

interface ThemeToggleProps {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkTheme, toggleTheme }) => {
    return (
        <button
            className="cursor-pointer"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
        >
            {darkTheme ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
    );
};

const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const { data: session } = useSession();

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => {
            const newTheme = !prevTheme;
            localStorage.setItem('hotel-theme', String(newTheme));
            return newTheme;
        });
    };

    return (
        <div className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between">
            <div className="flex gap-2 items-center w-full md:2/3 justify-between md:justify-normal md:flex-row flex-row-reverse">
            <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={darkTheme}
                                onChange={toggleTheme}
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-primary dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                <Link href="/" className="font-black text-tertiary-dark header-animation">Halcyon Hotels</Link>

                <ul className="flex items-center flex-row-reverse md:flex-row">
                    
                    <li className="ml-2 items-center">
                        
                    </li>
                </ul>

            </div>
            <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
            <li className="ml-2 flex items-center">
                        {session?.user ? (
                            <Link href={`/users/${session.user.id}`}>
                                {session.user.image ? (
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <Image
                                            src={session.user.image}
                                            height={32}
                                            width={32}
                                            className="scale-animation img"
                                            alt={session.user.name!}
                                        />
                                    </div>
                                ) : (
                                    <FaUserCircle className="cursor-pointer" />
                                )}
                            </Link>
                        ) : (
                            <Link href="/auth">
                                <FaUserCircle className="cursor-pointer" />
                            </Link>
                        )}
                    </li>
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