"use client";

import { useState } from "react";
import LoginOverlay from "@/components/LoginOverlay";
import AITutor from "@/components/AITutor";
import { HeroSection, CourseProgress, SubmissionArea } from "@/components/DashboardComponents";
import GradingView from "@/components/GradingView";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<"dashboard" | "grading">("dashboard");

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <main>
      {!isAuthenticated && <LoginOverlay onLogin={handleLogin} />}

      <div
        id="main-content"
        className={`max-w-7xl mx-auto space-y-8 pb-20 transition-opacity duration-1000 ${isAuthenticated ? "opacity-100" : "opacity-0 hidden"
          }`}
      >
        {/* Navbar */}
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="p-2 glass rounded-2xl shadow-sm">
              <img
                src="https://eseibusinessschool.com/wp-content/uploads/2021/04/Logo-ESEI-Barcelona.png"
                alt="ESEI"
                className="h-8"
              />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold">
                Academic Year 2026
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Student Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => setCurrentView("dashboard")}
                className={`text-sm font-semibold px-4 py-2 rounded-full hover:bg-slate-100 transition-all ${currentView === "dashboard" ? "bg-slate-100 text-slate-900" : "text-slate-600"
                  }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView("grading")}
                className={`text-sm font-semibold px-4 py-2 rounded-full hover:bg-slate-100 transition-all ${currentView === "grading" ? "bg-slate-100 text-slate-900" : "text-slate-600"
                  }`}
              >
                Grading
              </button>
            </div>
            <div className="flex items-center gap-3 glass px-4 py-2 shadow-sm">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">
                  Zeynep Öztürkmen
                </p>
                <p className="text-[10px] text-fuchsia-600 font-bold uppercase">
                  Masters Student
                </p>
              </div>
              <div className="w-10 h-10 rounded-full fuchsia-gradient border-2 border-white flex items-center justify-center font-bold text-white">
                ZÖ
              </div>
            </div>
          </div>
        </nav>

        {/* Views */}
        {currentView === "dashboard" ? (
          <div className="space-y-10 animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <HeroSection />
                <CourseProgress />
              </div>
              <div className="lg:col-span-1">
                <AITutor />
              </div>
            </div>
            <SubmissionArea />
          </div>
        ) : (
          <div className="animate-fade-in">
            <GradingView />
          </div>
        )}
      </div>
    </main>
  );
}
