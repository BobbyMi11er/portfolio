"use client";
import React, { useEffect } from "react";
import { CustomLink, DEV, Developer } from "../data/data";

export default function About() {
    const buildCodeSnippet = (data: Developer) => {
        let snippet: string = "";
        snippet +=
            '<p style="color: #d1d5db"><span style="color: #B4DCFE">root</span>.<span style="color: #F0F0BA">render</span><span style="color: #9D6CD4">(</span></p>';
        snippet +=
            '<p style="margin-left: 2%; color: #d1d5db"><<span style="color: #68C9B1">React.StrictMode</span>></p>';
        snippet +=
            '<p style="margin-left: 4%; color: #d1d5db"><<span style="color: #68C9B1">Developer</span></p>';
        snippet += `<p style="margin-left: 6%; color: #d1d5db"><span style="color: light-blue">name</span>=<span style="color: orange">"${data.name}"</span>,</p>`;
        snippet += `<p style="margin-left: 6%; color: #d1d5db"><span style="color: light-blue">education</span>=<span style="color: orange">"${data.education}"</span>,</p>`;

        const contacts = linkListToStr("contact", data.contact);

    const resumeStr = `<p style="margin-left: 6%; color: #d1d5db">resume=<a style="color: cyan" href=${data.resume.link} target="_blank" rel="noopener noreferrer">"${data.resume.text}"</a>,`;

        // Smooth scroll handler
        const scrollToSection = (id: string) => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };

        const projectsStr = (
            <p style={{ marginLeft: "6%", color: "#d1d5db" }}>
                projects=
                <a
                    style={{ color: "cyan", cursor: "pointer" }}
                    onClick={() => scrollToSection("projects")}
                >
                    "Scroll to Projects"
                </a>
                ,
            </p>
        );
        const workExpStr = (
            <p style={{ marginLeft: "6%", color: "#d1d5db" }}>
                workExperience=
                <a
                    style={{ color: "cyan", cursor: "pointer" }}
                    onClick={() => scrollToSection("work-experience")}
                >
                    "Scroll to Work Experience"
                </a>
                ,
            </p>
        );

        const interests = strListToStr("interests", data.interests);

        const skills = strListToStr("skills", data.skills);

        return (
            <div className="inline">
                <div dangerouslySetInnerHTML={{ __html: snippet }} />
                <div dangerouslySetInnerHTML={{ __html: contacts }} />
                <div dangerouslySetInnerHTML={{ __html: resumeStr }} />
                {projectsStr}
                {workExpStr}
                <div dangerouslySetInnerHTML={{ __html: interests }} />
                <div dangerouslySetInnerHTML={{ __html: skills }} />
                <div
                    dangerouslySetInnerHTML={{
                        __html: '<p style="margin-left: 4%; color: #d1d5db"/>/></p>',
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: '<p style="margin-left: 2%; color: #d1d5db">&lt/<span style="color: #68C9B1">React.StrictMode</span>></p>',
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: '<p style="color: #9D6CD4">)</p>',
                    }}
                />
            </div>
        );
    };

    const strListToStr = (name: string, list: string[]) => {
        let str = `<p style="margin-left: 6%; color: #d1d5db">${name}=[`;
        for (let i = 0; i < list.length; ++i) {
            const item = list[i];

            if (i != 0) {
                str += ", ";
            }

            str += `<span style="color: orange">"${item}"</span>`;
        }
        str += "],</p>";
        return str;
    };

    // USE MARGIN-LEFT INSTEAD OF &ensp EVERYWHERE
    const linkListToStr = (name: string, list: CustomLink[]) => {
        let str = `<p style="margin-left: 6%; color: #d1d5db">${name}=[`;
        for (let i = 0; i < list.length; ++i) {
            const item = list[i];

            if (i != 0) {
                str += ", ";
            }

            // If it's a mailto link, don't open in new tab
            if (item.link.startsWith("mailto:")) {
                str += `<a style="color: cyan" href="${item.link}">"${item.text}"</a>`;
            } else {
                str += `<a style="color: cyan" href="${item.link}" target="_blank" rel="noopener noreferrer">"${item.text}"</a>`;
            }
        }
        str += "],</p>";
        return str;
    };

    return (
        <div className="mt-[20vh]">
            <div className="terminal">
                <div className="terminal-header h-7 bg-[#e4e3e5] rounded-t-lg flex justify-start items-center">
                    <div className="header-button w-3 h-3 rounded-full ml-2.5 bg-[#f96256] border border-[#f65549]"></div>
                    <div className="header-button w-3 h-3 rounded-full ml-2.5 bg-[#fdbc3d] border border-[#ffb524]"></div>
                    <div className="header-button w-3 h-3 rounded-full ml-2.5 bg-[#33c948] border border-[#2dbb41]"></div>
                </div>
                <div className="terminal-window bg-slate-800 text-grey-200 p-2 rounded-b-lg shadow-lg font-mono overflow-auto">
                    {buildCodeSnippet(DEV)}
                </div>
            </div>
        </div>
    );
}
