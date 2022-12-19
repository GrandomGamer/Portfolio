import Link from 'next/link';
import React, { useState } from "react";
import {Router, useRouter} from 'next/router';
import Tilt from "react-parallax-tilt";

export default function Navbar({ }) {
    const user = null;
    const userID = null;

    return (
        <div className='bg-neutral fixed inline-flex h-full w-24 items-center'>
            <div className='absolute pt-5 p-3 top-0 w-full'>
                <Link href="/">
                    <Tilt
                    glareMaxOpacity={0}
                    scale={1.2}
                    gyroscope={true}
                    tiltReverse={true}>
                        <img src='/logo.png' className='bg-primary rounded-full outline outline-1 outline-white'></img>
                    </Tilt>
                </Link>
            </div>
            <ul className='menu w-full'>
                <li>
                    <NavItem to="#home" text='Home'></NavItem>
                </li>
                <li>
                    <NavItem to="#about" text='About'></NavItem>
                </li>
                <li>
                    <NavItem to="#skills" text='Skills'></NavItem>
                </li>
                <li>
                    <NavItem to="#projects" text='Projects'></NavItem>
                </li>
                <li>
                    <NavItem to="#contact" text='Contact'></NavItem>
                </li>
            </ul>
        </div>
    );
}

function NavItem({ text, to }: { text: string, to: string}) {

    return (
        <Link href={to} className='active:text-primary group h-20 justify-center text-white text-center bg-transparent transition-all duration-500 font-bold hover:text-primary'>
            <button>{text}
            </button>
            <span className="block w-0 h-0.5 left-0 absolute bottom-0 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
            <span className="block w-0 h-0.5 left-0 absolute top-0 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
        </Link>
    );
}