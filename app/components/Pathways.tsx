"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Code, ShieldCheck, Star } from "lucide-react";  // Import the Star icon

const careerPathways = [
    {
        id: "data-product-manager",
        title: "Data Product Manager",
        salaryRange: "$110K - $150K",
        degrees: ["MBA in Product Management", "MS in Data Science"],
        skills: ["Product Strategy", "Data Analytics"],
        fitScore: 82,
        icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    },
    {
        id: "software-engineer",
        title: "Software Engineer",
        salaryRange: "$90K - $130K",
        degrees: ["BS in Computer Science", "MS in Software Engineering"],
        skills: ["Python", "System Design"],
        fitScore: 75,
        icon: <Code className="w-6 h-6 text-green-500" />,
    },
    {
        id: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        salaryRange: "$95K - $140K",
        degrees: ["BS in Cybersecurity", "Certified Ethical Hacker (CEH)"],
        skills: ["Network Security", "Threat Detection"],
        fitScore: 68,
        icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    },
].sort((a, b) => b.fitScore - a.fitScore);

export default function Pathways() {
    const [selectedPathways, setSelectedPathways] = useState<string[]>([]);
    const router = useRouter();

    const toggleSelection = (id: string) => {
        if (selectedPathways.includes(id)) {
            setSelectedPathways(selectedPathways.filter((path) => path !== id));
        } else if (selectedPathways.length < 3) {
            setSelectedPathways([...selectedPathways, id]);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Career Pathways</h1>
            <p className="text-gray-600 mb-6">
                Based on your skills assessment, here are some career pathways you could explore.
            </p>

            <div className="space-y-6">
                {careerPathways.map((career) => (
                    <div
                        key={career.id}
                        className={`p-4 border rounded-lg cursor-pointer shadow-md flex items-center space-x-4 transition ${selectedPathways.includes(career.id) ? "bg-blue-100 border-blue-400" : "hover:bg-gray-100"
                            }`}
                        onClick={() => toggleSelection(career.id)}
                    >
                        <div>{career.icon}</div>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold flex items-center">
                                {career.title}
                                {career.id === "data-product-manager" && (
                                    <span className="ml-2 text-yellow-400">
                                        <Star className="w-4 h-4 inline" />
                                        <span className="ml-1">Partnership Employer</span>
                                    </span>
                                )}
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Suggested Degrees: {career.degrees.join(", ")}
                            </p>
                            <p className="text-sm text-gray-600">
                                Recommended Skills: {career.skills.join(", ")}
                            </p>
                            <p className="text-sm text-gray-600">
                                Fit Score: {career.fitScore}
                            </p>
                        </div>
                        <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">{career.salaryRange}</span>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/pathways/${career.id}`);
                            }}
                            className="ml-4 text-blue-600 underline"
                        >
                            View Details →
                        </button>
                    </div>
                ))}
            </div>

            <p className="mt-4 text-gray-600">
                You can select up to <strong>3</strong> career pathways you’re interested in.
            </p>
        </div>
    );
}
