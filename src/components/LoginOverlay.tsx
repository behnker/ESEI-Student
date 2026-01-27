"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface LoginOverlayProps {
    onLogin: () => void;
}

export default function LoginOverlay({ onLogin }: LoginOverlayProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    const handleLogin = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsVisible(false);
            onLogin();
        }, 500);
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-xl transition-all duration-500 ${isFading ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="glass p-10 w-full max-w-md mx-4 purple-glow">
                <div className="text-center mb-8">
                    <img
                        src="https://eseibusinessschool.com/wp-content/uploads/2021/04/Logo-ESEI-Barcelona.png"
                        alt="ESEI"
                        className="h-12 mx-auto mb-6"
                    />
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                        Student Portal
                    </h2>
                    <p className="text-slate-500">Enter your TalentLMS credentials</p>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            defaultValue="testuser1@gmail.com"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            defaultValue="********"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full fuchsia-gradient hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-fuchsia-500/20 transition-all transform active:scale-95"
                    >
                        Access Campus
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                        Authorized ESEI Students Only
                    </p>
                </div>
            </div>
        </div>
    );
}
