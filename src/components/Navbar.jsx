import { useState } from "react"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {BiX, BiMenu} from "react-icons/bi"
import { Link } from "react-router"
import { HashLink } from "react-router-hash-link"
import logo from "./../assets/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <HashLink to="/#home">
            <img src={logo} className="logo" />
            </HashLink>

            <ul className="hidden md:flex gap-10">
                <HashLink to="/#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </HashLink>
                <HashLink to="/#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </HashLink>
                <HashLink to="/#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Projects</li>
                </HashLink>
                <HashLink to="/#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </HashLink>
            </ul>

            <ul className="hidden md:flex gap-5">
                <li href="#home" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <Link to="https://www.linkedin.com/in/yevgeniy-grebinskiy">
                    <BsLinkedin />
                </Link>
                </li>

                <li href="#home" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                    <Link to="https://github.com/Ygrebinskiy">
                        <BsGithub />
                    </Link>
                </li>
            </ul>

            {isOpen ? (<BiX className="block md:hidden text-4xl" onClick={menuOpen}/>) : <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>}

            {isOpen && (
                <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col gap-8">
                        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Home</li>
                        </a>
                        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Tech</li>
                        </a>
                        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Projects</li>
                        </a>
                        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Contact</li>
                        </a>
                    </ul>
                    <ul className="flex flex-wrap gap-5">
                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                            <Link to="https://www.linkedin.com/in/yevgeniy-grebinskiy">
                                <BsLinkedin />
                            </Link>
                        </li>

                        <li href="#home" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                            <Link to="https://github.com/Ygrebinskiy">
                                <BsGithub />
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar