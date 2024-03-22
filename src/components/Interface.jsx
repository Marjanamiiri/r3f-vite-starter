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

export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
};

const AboutSection = () => {
    return (
        <Section>
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
                    Welcome to the convergence of computer science and design excellence.<br />
                </p>
            </motion.p>
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
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className=" mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-70" key={index}>
                            <motion.h3
                                className="text-xl font-bold text-gray-800"
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
                    <h2 className="text-5xl font-bold mt-10">Languages</h2>
                    <div className=" mt-8 space-y-4">
                        {languages.map((lng, index) => (
                            <div className="w-64" key={index}>
                                <motion.h3
                                    className="text-xl font-bold text-gray-800"
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

const ProjectSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section>
            <div className="flex w-full h-full gap-8 items-center justify-center">
                <button
                    className="hover:text-indigo-600 transition-colors"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl font-bold">Projects</h2>
                <button
                    className="hover:text-indigo-600 transition-colors"
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
            <form ref={form} onSubmit={sendEmail} className="backdrop-blur-sm bg-white/30 ">
                <label>Name</label>
                <input type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type="email" name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Message</label>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} /><br />
                <input type="submit" value="Send" className="sendbutton" disabled={isFormEmpty()} />
            </form>
        </Section>
    );
};



