"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ setActiveView, activeView }: { setActiveView: (view: string) => void; activeView: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold">Pathways</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        <button
                            className={`hover:text-gray-300 ${activeView === "dashboard" ? "underline" : ""}`}
                            onClick={() => setActiveView("dashboard")}
                        >
                            Dashboard
                        </button>
                        <button
                            className={`hover:text-gray-300 ${activeView === "skills" ? "underline" : ""}`}
                            onClick={() => setActiveView("skills")}
                        >
                            Skills Assessment
                        </button>
                        <button
                            className={`hover:text-gray-300 ${activeView === "pathways" ? "underline" : ""}`}
                            onClick={() => setActiveView("pathways")}
                        >
                            Career Pathways
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="flex flex-col space-y-2 p-4">
                        <button
                            className="hover:text-gray-300"
                            onClick={() => {
                                setActiveView("dashboard");
                                setIsOpen(false);
                            }}
                        >
                            Dashboard
                        </button>
                        <button
                            className="hover:text-gray-300"
                            onClick={() => {
                                setActiveView("skills");
                                setIsOpen(false);
                            }}
                        >
                            Skills Assessment
                        </button>
                        <button
                            className="hover:text-gray-300"
                            onClick={() => {
                                setActiveView("pathways");
                                setIsOpen(false);
                            }}
                        >
                            Career Pathways
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
