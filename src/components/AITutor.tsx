"use client";

import { Mic } from "lucide-react";
import { useState } from "react";

export default function AITutor() {
    const [active, setActive] = useState(false);

    return (
        // Removed overflow-hidden from here to allow widget popups to show
        <div className="glass h-full p-8 flex flex-col items-center justify-center text-center relative purple-glow bg-white">
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-50 to-transparent"></div>

            <div className="tutor-ring mb-8 relative flex flex-col items-center justify-center animate-float">
                {/* Decorative Glow completely separate from widget container */}
                <div className="absolute w-32 h-32 rounded-full fuchsia-gradient blur-2xl opacity-40 pointer-events-none"></div>

                {/* Widget Container - Strict Z-Index Layering */}
                <div className="relative z-50">
                    {/* @ts-ignore */}
                    <elevenlabs-convai agent-id="agent_3001k2eqr5yrfh7t0s9wmt7myhd6"></elevenlabs-convai>
                </div>
            </div>

            <h2 className="text-2xl font-black mb-2 text-slate-900">AI Course Tutor</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Need help with your Analytics assignment? I've read all the course materials and
                transcripts.
            </p>

            <div
                id="tutor-box"
                className="w-full glass-card p-4 rounded-2xl mb-6 text-left min-h-[100px] border-slate-100 bg-slate-50/50"
            >
                <p className="text-xs text-fuchsia-600 font-bold uppercase mb-2">
                    Live Transcript
                </p>
                <p className="text-sm text-slate-700 italic">
                    "Click the agent above to start speaking..."
                </p>
            </div>
        </div>
    );
}
