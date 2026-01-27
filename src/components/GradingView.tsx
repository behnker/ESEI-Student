import { CheckSquare, BarChart3, MessageCircle, Download } from "lucide-react";

export default function GradingView() {
    return (
        <div className="space-y-10">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-slate-900">
                    Learning <span className="text-gradient">Pathway Feedback</span>
                </h2>
                <div className="glass px-6 py-4 flex items-center gap-6 shadow-sm">
                    <div className="text-center">
                        <p className="text-[10px] uppercase font-bold text-slate-400">
                            Final Grade
                        </p>
                        <p className="text-3xl font-black text-fuchsia-600">84.4%</p>
                    </div>
                    <div className="w-[1px] h-10 bg-slate-100"></div>
                    <div className="text-center">
                        <p className="text-[10px] uppercase font-bold text-slate-400">
                            Letter
                        </p>
                        <p className="text-3xl font-black text-slate-900">B</p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Main Pathway */}
                <div className="lg:col-span-2 space-y-12 pl-10 relative">
                    {/* Node 1: Quizzes */}
                    <div className="relative pathway-node">
                        <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-white border-4 border-fuchsia-500 z-10"></div>
                        <div className="glass p-6">
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-slate-900">
                                <CheckSquare className="text-fuchsia-500" />
                                Assessment Phase 1: Knowledge Check
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    { name: "Quiz 1", score: "92%" },
                                    { name: "Quiz 2", score: "88%" },
                                    { name: "Quiz 3", score: "85%" },
                                    { name: "Quiz 4", score: "95%" },
                                    { name: "Quiz 5", score: "80%" },
                                    { name: "Quiz 6", score: "91%" },
                                ].map((quiz, i) => (
                                    <div key={i} className="glass-card p-4 text-center bg-white">
                                        <p className="text-xs text-slate-400 mb-1">{quiz.name}</p>
                                        <p className="font-bold text-slate-900">{quiz.score}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
                                <span className="text-sm font-semibold text-slate-600">
                                    Average Weight (40%)
                                </span>
                                <span className="font-bold text-fuchsia-600">35.2 Points</span>
                            </div>
                        </div>
                    </div>

                    {/* Node 2: Project Criteria */}
                    <div className="relative pathway-node">
                        <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-white border-4 border-fuchsia-500 z-10"></div>
                        <div className="glass p-6">
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-slate-900">
                                <BarChart3 className="text-fuchsia-500" />
                                Assessment Phase 2: Final Implementation
                            </h4>
                            <div className="space-y-6 text-slate-900">
                                {[
                                    { label: "Application of Concepts", score: 88, text: "22/25" },
                                    { label: "Analytical Presentation", score: 80, text: "20/25" },
                                    { label: "Business Relevance", score: 96, text: "24/25" },
                                    { label: "Innovative Thinking", score: 64, text: "16/25" },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-semibold">{item.label}</span>
                                            <span className="text-sm font-bold">{item.text}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full">
                                            <div
                                                className="h-full bg-purple-500"
                                                style={{ width: `${item.score}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Node 3: Feedback */}
                    <div className="relative pathway-node">
                        <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-white border-4 border-fuchsia-500 z-10"></div>
                        <div className="glass p-6">
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-slate-900">
                                <MessageCircle className="text-fuchsia-500" />
                                AI Mentor Feedback
                            </h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl">
                                    <p className="text-xs text-emerald-600 font-bold uppercase mb-1">
                                        Key Strengths
                                    </p>
                                    <p className="text-sm text-slate-700">
                                        "Your application of data analytics tools was exemplary. The
                                        business relevance section shows a deep understanding of the
                                        Barcelona tech market."
                                    </p>
                                </div>
                                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                                    <p className="text-xs text-amber-600 font-bold uppercase mb-1">
                                        Growth Opportunities
                                    </p>
                                    <p className="text-sm text-slate-700">
                                        "Focus more on visual data storytelling in future
                                        presentations. The innovative component could be pushed
                                        further by exploring AI-predictive models."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass p-6 sticky top-10 shadow-lg bg-white">
                        <h4 className="font-bold mb-4 text-slate-900">Official Transcript</h4>
                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Student</span>
                                <span className="font-bold text-slate-900">
                                    Zeynep Öztürkmen
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Course Code</span>
                                <span className="font-bold text-slate-900">OM-DM1</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Term</span>
                                <span className="font-bold text-slate-900">Fall 2024</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Status</span>
                                <span className="font-bold text-emerald-600">Validated</span>
                            </div>
                        </div>

                        <button className="w-full fuchsia-gradient py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 mb-4 shadow-lg shadow-fuchsia-200">
                            <Download size={20} />
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
