"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import { CheckCircle, ClipboardList, GraduationCap, DollarSign, ListChecks, Info, ExternalLink } from "lucide-react";

const careerDetails = {
    "data-product-manager": {
        title: "Data Product Manager",
        salaryRange: "$110K - $150K",
        degrees: ["MBA in Product Management", "MS in Data Science"],
        skills: {
            "Product Strategy": "Learn about product strategy through free courses on Coursera or take a Product Management bootcamp.",
            "Data Analytics": "Master data analytics with SQL and Python. Google's Data Analytics Certification is a great start.",
        },
        tasks: {
            "Take an online course on AI-driven product development": "Enroll in AI & Product Management courses on Udemy or Coursera.",
            "Build a data-driven product roadmap": "Use tools like Notion, Airtable, or JIRA to create product roadmaps.",
        },
        resources: [
            { name: "Product Management in Tech (Coursera)", link: "https://coursera.org" },
            { name: "Data Science for Business (Udemy)", link: "https://udemy.com" },
        ],
        fitScore: 82,
        fitDescription:
            "With my experience in data analytics and problem-solving, I have a strong foundation for transitioning into a Data Product Manager role. My ability to work with cross-functional teams and align business goals with data-driven insights makes me a great fit.",
    },
};

export default function CareerDetailsPage() {
    const { id } = useParams();
    const career = careerDetails[id as keyof typeof careerDetails];

    const [acquiredSkills, setAcquiredSkills] = useState<string[]>([]);
    const [completedTasks, setCompletedTasks] = useState<string[]>([]);

    const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

    if (!career) {
        return <div className="p-6">Career pathway not found.</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="p-6 max-w-3xl mx-auto pt-20">
                <h1 className="text-3xl font-bold flex items-center space-x-2">
                    <ClipboardList className="w-6 h-6 text-blue-500" />
                    <span>{career.title}</span>
                </h1>

                <p className="text-lg mt-2 text-gray-700">
                    <DollarSign className="inline w-5 h-5 text-green-500" /> <strong>Salary Range:</strong> {career.salaryRange}
                </p>

                <p className="text-lg mt-2 text-blue-600">
                    <strong>Fit Score:</strong> {career.fitScore}%
                </p>

                <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                    <h2 className="text-lg font-semibold">Why You Would Be a Good Fit</h2>
                    <p className="text-gray-700">{career.fitDescription}</p>
                </div>

                <div className="mt-6 p-4 border rounded-lg bg-white">
                    <h2 className="text-lg font-semibold flex items-center space-x-2">
                        <GraduationCap className="w-5 h-5 text-purple-500" />
                        <span>Additional Degrees</span>
                    </h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {career.degrees.map((degree, index) => (
                            <li key={index}>{degree}</li>
                        ))}
                    </ul>
                </div>

                {/* SKILLS SECTION */}
                <div className="mt-6 p-4 border rounded-lg bg-white">
                    <h2 className="text-lg font-semibold flex items-center space-x-2">
                        <ListChecks className="w-5 h-5 text-green-500" />
                        <span>Recommended Skills</span>
                    </h2>
                    <ul className="text-gray-600">
                        {Object.entries(career.skills).map(([skill, description]) => (
                            <li key={skill} className="flex items-center space-x-2">
                                <input type="checkbox" checked={acquiredSkills.includes(skill)} onChange={() => setAcquiredSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill])} />
                                <span>{skill}</span>
                                <button onClick={() => setSelectedInfo(description)}>
                                    <Info className="w-4 h-4 text-blue-500" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* TASKS SECTION */}
                <div className="mt-6 p-4 border rounded-lg bg-white">
                    <h2 className="text-lg font-semibold flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span>Tasks to Complete</span>
                    </h2>
                    <ul className="text-gray-600">
                        {Object.entries(career.tasks).map(([task, tips]) => (
                            <li key={task} className="flex items-center space-x-2">
                                <input type="checkbox" checked={completedTasks.includes(task)} onChange={() => setCompletedTasks((prev) => prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task])} />
                                <span>{task}</span>
                                <button onClick={() => setSelectedInfo(tips)}>
                                    <Info className="w-4 h-4 text-blue-500" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RESOURCES SECTION */}
                <div className="mt-6 p-4 border rounded-lg bg-white">
                    <h2 className="text-lg font-semibold">Resources</h2>
                    <ul className="text-gray-600">
                        {career.resources.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.link} target="_blank" className="text-blue-600 flex items-center space-x-2">
                                    <span>{resource.name}</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* MODAL FOR MORE INFO */}
            {selectedInfo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md">
                        <p className="text-gray-700">{selectedInfo}</p>
                        <button onClick={() => setSelectedInfo(null)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}


