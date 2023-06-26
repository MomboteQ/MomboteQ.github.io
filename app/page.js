import Image from 'next/image';

import Navbar from '@/app/components/navbar';
import CustomButton from '@/app/components/customButton';
import Timeline from '@/app/components/timeline';
import Projects from '@/app/components/projects';

import { FiGithub, FiGitlab, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiExpress,
    SiVuedotjs,
    SiNuxtdotjs,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiPython,
    SiGo,
} from 'react-icons/si';
import { TbCurrencyBitcoin, TbCurrencyMonero } from 'react-icons/tb';
import { RxDiscordLogo } from 'react-icons/rx';

import programmingImg from '@/app/images/programming.svg';

const Home = () => {
    return (
        <>
            <header
                id="home"
                className="h-screen min-h-[36rem] bg-ctp-base flex relative md:min-h-[38rem] lg:min-h-[42rem] xl:min-h-[33rem] xl:flex-col"
            >
                <Navbar />
                <div className="px-[2rem] my-[auto] grid grid-rows-[3rem_1fr] w-full justify-center xl:grid-cols-[4rem_1fr_1fr] xl:px-[3rem] xl:h-[calc(100%-var(--nav-height)*2)] xl:gap-x-[2rem] xl:grid-rows-[1fr] xl:max-w-[78rem] xl:mx-auto xl:my-0">
                    <div className="flex w-[6.75rem] justify-between social__icons xl:flex-col xl:items-center xl:w-[4rem] xl:h-[8rem] xl:my-auto">
                        <a href="https://github.com/MomboteQ" target="_blank" rel="noopener noreferrer">
                            <FiGithub />
                        </a>
                        <a href="https://gitlab.com/MomboteQ" target="_blank" rel="noopener noreferrer">
                            <FiGitlab />
                        </a>
                        <a href="https://twitter.com/MomboteQ" target="_blank" rel="noopener noreferrer">
                            <FiTwitter />
                        </a>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <span className="w-fit text-[.9rem] font-bold inline-block p-[.45rem] mb-[1.5rem] bg-ctp-green text-ctp-surface0 rounded-full leading-[.95rem]">
                            Programming & Cybersecurity
                        </span>
                        <h1 className="text-[2rem] font-medium text-ctp-text leading-[3rem] mb-[1.5rem] md:text-[2.7rem] md:leading-[3.1rem]">
                            Hi, I&apos;m
                            <br />
                            MomboteQ
                        </h1>
                        <p className="text-[.85rem] text-ctp-overlay1 leading-[1.3rem] mb-[4rem] max-w-[22rem] md:text-[.95rem] md:leading-[1.4rem]">
                            Developer, Ethical Hacker, and Cryptocurrency Enthusiast. See my projects.
                        </p>
                        <CustomButton text="My projects" url="#projects" />
                    </div>
                    <div className="hidden xl:flex xl:justify-end">
                        <Image src={programmingImg} alt="" width={786.81995} height={572.25773} className="h-full max-w-[28.375rem] w-full" />
                    </div>
                </div>
            </header>
            <main>
                <section id="about">
                    <div className="wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-ctp-base"
                            />
                        </svg>
                    </div>
                    <div>
                        <span>About me</span>
                        <h1>About me and my programming history</h1>
                        <p>
                            Hi, I'm a 17-year-old programmer from Poland. Programming and Ethical Hacking is my passion. I love creating websites, web
                            applications, and scripts.
                        </p>
                    </div>
                    <div>
                        <Timeline />
                    </div>
                </section>
                <section id="skills">
                    <div className="wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-ctp-mantle"
                            />
                        </svg>
                    </div>
                    <div>
                        <span>Skills</span>
                        <h1>My skills</h1>
                        <p>
                            In my free time, I&apos;m constantly developing my skills. I&apos;m constantly learning something new to stay up to date
                            with the latest technologies.
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-[2rem] justify-center text-center icons skills__icons xl:justify-end">
                            <div className="text-ctp-peach">
                                <SiHtml5 />
                                <p>HTML</p>
                            </div>
                            <div className="text-ctp-sapphire">
                                <SiCss3 />
                                <p>CSS</p>
                            </div>
                            <div className="text-ctp-yellow">
                                <SiJavascript />
                                <p>JavaScript</p>
                            </div>
                            <div className="text-ctp-text">
                                <SiExpress />
                                <p>Express.js</p>
                            </div>
                            <div className="text-ctp-green">
                                <SiVuedotjs />
                                <p>Vue.js</p>
                            </div>
                            <div className="text-ctp-teal">
                                <SiNuxtdotjs />
                                <p>Nuxt.js</p>
                            </div>
                            <div className="text-ctp-sapphire">
                                <SiReact />
                                <p>React</p>
                            </div>
                            <div className="text-ctp-text">
                                <SiNextdotjs />
                                <p>Next.js</p>
                            </div>
                            <div className="text-ctp-sapphire">
                                <SiTailwindcss />
                                <p>Tailwind CSS</p>
                            </div>
                            <div className="text-ctp-green">
                                <SiMongodb />
                                <p>MongoDB</p>
                            </div>
                            <div className="text-ctp-blue">
                                <SiPython />
                                <p>Python</p>
                            </div>
                            <div className="text-ctp-sky">
                                <SiGo />
                                <p>Golang</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <div className="wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-ctp-base"
                            />
                        </svg>
                    </div>
                    <div>
                        <span>Projects</span>
                        <h1>My projects</h1>
                        <p>Here you can see my projects. I&apos;m constantly working on new projects.</p>
                    </div>
                    <div>
                        <Projects />
                    </div>
                </section>
                <section id="donate">
                    <div className="wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-ctp-mantle"
                            />
                        </svg>
                    </div>
                    <div>
                        <span>Donate</span>
                        <h1>Donate to me</h1>
                        <p>If you want to support me, you can donate to me. I'll be very grateful for your support.</p>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-[2rem] justify-center icons donate__icons">
                            <div className="text-ctp-yellow">
                                <TbCurrencyBitcoin />
                                <p>Bitcoin</p>
                                <span>bc1qfrd82x6q7pgsqknznk6n4p43rugqklp6flayey</span>
                            </div>
                            <div className="fill-ctp-sapphire">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 256 256" width="2rem" height="2rem">
                                    <path d="m188.9 6.3c3.8-5.8 11.5-7.4 17.3-3.6 5.8 3.7 7.4 11.5 3.7 17.2l-149.2 229.8c-3.8 5.8-11.5 7.5-17.3 3.7-5.8-3.7-7.5-11.5-3.7-17.3z" />
                                    <path d="m44.7 19.9c-3.8-5.7-2.1-13.5 3.7-17.2 5.8-3.8 13.5-2.2 17.3 3.6l149.2 229.8c3.7 5.8 2.1 13.6-3.7 17.3-5.8 3.8-13.5 2.1-17.3-3.7z" />
                                    <path d="m50 170.5c0-6.9 5.6-12.5 12.5-12.5h130c6.9 0 12.5 5.6 12.5 12.5 0 6.9-5.6 12.5-12.5 12.5h-130c-6.9 0-12.5-5.6-12.5-12.5z" />
                                    <path d="m50 121.5c0-6.9 5.6-12.5 12.5-12.5h130c6.9 0 12.5 5.6 12.5 12.5 0 6.9-5.6 12.5-12.5 12.5h-130c-6.9 0-12.5-5.6-12.5-12.5z" />
                                </svg>
                                <p>Nano</p>
                                <span>nano_1hacker1kz4rwm9e6ax8pyd8rpc8ha3amkuar6fu81egek15uzdsbqsjmpbf</span>
                            </div>
                            <div className="text-ctp-peach">
                                <TbCurrencyMonero />
                                <p>Monero</p>
                                <span>49CtFfrhX4GSpEdoW71NmGUxriTApy2cFY8hVZgpThUN5Wz64Fddgayfg1DLSBbVGRWSV6fuenUaYfhTQ2KH48xUQgJkq1A</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-ctp-base"
                            />
                        </svg>
                    </div>
                    <div>
                        <span>Contact</span>
                        <h1>Contact me</h1>
                        <p>If you have any questions or suggestions, please feel free to contact me. I'll try to respond as soon as possible.</p>
                    </div>
                    <div className="xl:flex xl:items-center xl:justify-center">
                        <div className="flex flex-wrap gap-[2rem] justify-center icons contact__icons">
                            <div className="text-ctp-blue">
                                <RxDiscordLogo />
                                <p>momboteq</p>
                            </div>
                            <div className="text-ctp-red">
                                <FiMail />
                                <p>momboteq@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="p-[2rem] pt-[8rem] bg-ctp-base relative sm:p-[3rem] sm:pt-[8rem] md:px-[5rem] lg:px-[9rem]">
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-ctp-mantle"
                        />
                    </svg>
                </div>
                <div className="flex items-center justify-center text-[.85rem] text-ctp-overlay1">
                    Created with{' '}
                    <span className="text-ctp-red mx-[.5rem]">
                        <FiHeart />
                    </span>{' '}
                    in
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.2"
                        viewBox="0 0 1000 1000"
                        width=".85rem"
                        height=".85rem"
                        className="rounded-full mx-[.5rem]"
                    >
                        <path className="fill-[#dc143c]" d="m0 500h1000v500h-1000z" />
                        <path className="fill-[#fff]" d="m0 0h1000v500h-1000z" />
                    </svg>
                    by <span className="text-ctp-green ml-[.5rem]">MomboteQ</span>
                </div>
            </footer>
        </>
    );
};

export default Home;
