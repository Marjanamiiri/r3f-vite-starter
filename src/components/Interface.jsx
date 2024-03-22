import { motion } from "framer-motion";
import { useAtom } from "jotai";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { currentProjectAtom, projects } from "./Projects";
import Type from "./Type";
const Section = (props) => {
    const { children } = props;

    return (
        <motion.section
            className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                },
            }}
        >
            {children}
        </motion.section>
    );
};

export const Interface = (props) => {
    const { setSection } = props;
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection setSection={setSection} />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

const AboutSection = (props) => {
    const { setSection } = props;
    return (
        <Section>
            {/* <img className="" src="project/ReadyPlayerMe-Avatar.png" alt="Your Alt Text"/>  */}
            <h1 className="text-8xl text-[#2b2d42] font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="bg-white px-1 italic"> Marjan Amiri</span>
            </h1>
            <motion.p
                className="text-2xl w-90 text-[#2b2d42] leading-snug"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                < Type />
            </motion.p>
            <motion.p
                className="paragraph"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                <p className="text-2xl w-90 text-[#2b2d42]">
                    Welcome to the convergence of computer science and design excellence.<br /><br />
                </p>
            </motion.p>
            <motion.button
                onClick={() => setSection(3)}
                className="sendbutton"
                initial={{
                    opacity: 0,
                    y: 0,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2.5,
                }}
            >
                Contact me
            </motion.button>
        </Section>
    );
};

const skills = [
    {
        title: "React Three Fiber / React.js",
        level: 35,
    },
    {
        title: "Python",
        level: 80,
    },
    {
        title: "UI / UX design + Figma",
        level: 95,
    },
    {
        title: "Front-end (HTML, CSS, JavaScript, jQuery)",
        level: 90,
    },
    {
        title: "Back-end (C, C++, PHP, Node.js, SQL, Java)",
        level: 20,
    },
];
const languages = [
    {
        title: "🇦🇫 Dari",
        level: 100,
    },
    {
        title: "🇮🇷 Farsi",
        level: 100,
    },
    {
        title: "🇺🇸 English",
        level: 80,
    },
    {
        title: "🇸🇦 Arabic",
        level: 20,
    },
];

const SkillsSection = () => {
    return (
        <Section>
            <motion.div whileInView={"visible"}>
                <h2 className="text-5xl text-[#2b2d42] font-bold">Skills</h2>
                <div className=" mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-70" key={index}>
                            <motion.h3
                                className="text-xl font-bold text-[#2b2d42]"
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1 + index * 0.2,
                                        },
                                    },
                                }}
                            >
                                {skill.title}
                            </motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-[#8d99ae] rounded-full "
                                    style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-5xl text-[#2b2d42] font-bold mt-10">Languages</h2>
                    <div className=" mt-8 space-y-4">
                        {languages.map((lng, index) => (
                            <div className="w-64" key={index}>
                                <motion.h3
                                    className="text-xl font-bold text-[#2b2d42]"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 2 + index * 0.2,
                                            },
                                        },
                                    }}
                                >
                                    {lng.title}
                                </motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div
                                        className="h-full bg-[#8d99ae] rounded-full "
                                        style={{ width: `${lng.level}%` }}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 2 + index * 0.2,
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section>
            <div className="flex w-full h-full gap-8 items-center text-[#2b2d42] justify-center">
                <button
                    className="hover:text-[#ef233c] transition-colors"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl font-bold">Projects</h2>
                <button
                    className="hover:text-[#ef233c] transition-colors"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
};
const ContactSection = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_508u6bb', 'template_9j5o9tz', form.current, {
                publicKey: 'r3SBmy3THmKAVUVY1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    const isFormEmpty = () => {
        return !name.trim() || !email.trim() || !message.trim();
    };

    return (
        <Section>
            <h2 className="text-5xl font-bold">Say hi</h2>
            <h3 className="paragraph">Feel free to contact me anywhere on the internet, let's hang out!</h3>
            <motion.p
                className="p-8 max-w-screen-2xl mx-auto item-center leading-snug"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                <form ref={form} onSubmit={sendEmail} className="backdrop-blur-sm bg-white/30 ">
                    <label>Name</label>
                    <input type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <input type="email" name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Message</label>
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} /><br />
                    <input type="submit" value="Send" className="sendbutton" disabled={isFormEmpty()} />
                </form>
            </motion.p>

            <motion.p
                className="p-8 max-w-screen-2xl mx-auto item-center leading-snug"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                <div className="container pt-9">
                    <div className="mb-9 flex justify-center">
                        <a href="https://www.instagram.com/" className="mr-9 text-neutral-800 dark:text-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/marjanamiri/" className="mr-9 text-neutral-800 dark:text-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                href="https://github.com/sudiptob2/simple-react-footer"
                                target="_blank">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                        <a href="https://github.com/Marjanamiiri" className="text-neutral-800 dark:text-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </motion.p>


        </Section>

    );

};



