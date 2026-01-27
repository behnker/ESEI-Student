import { Video, FileText, CheckCircle, UploadCloud, LayoutGrid, ChevronDown, Award, ScrollText } from "lucide-react";

export function HeroSection() {
    return (
        <div className="glass p-8 relative overflow-hidden purple-glow">
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
                    Welcome back, <span className="text-gradient">Zeynep!</span>
                </h1>
                <p className="text-slate-600 text-lg max-w-xl">
                    You have completed <span className="text-fuchsia-600 font-bold">84%</span> of
                    your <span className="italic">Digital Marketing Strategy</span> course. Just
                    one final assessment to go!
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <div className="glass-card px-6 py-4 flex items-center gap-4 bg-white">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <Video className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">24</p>
                            <p className="text-xs text-slate-500">Videos Watched</p>
                        </div>
                    </div>
                    <div className="glass-card px-6 py-4 flex items-center gap-4 bg-white">
                        <div className="p-3 bg-emerald-100 rounded-xl">
                            <FileText className="text-emerald-600" size={24} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">12</p>
                            <p className="text-xs text-slate-500">Docs Read</p>
                        </div>
                    </div>
                    <div className="glass-card px-6 py-4 flex items-center gap-4 bg-white">
                        <div className="p-3 bg-amber-100 rounded-xl">
                            <CheckCircle className="text-amber-600" size={24} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">18</p>
                            <p className="text-xs text-slate-500">Tasks Finished</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-500/5 blur-[80px] rounded-full"></div>
        </div>
    );
}

export function CourseProgress() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-slate-900">
                    <LayoutGrid className="text-fuchsia-500" size={20} />
                    Current Course
                </h3>
                <div className="space-y-6">
                    <div className="p-4 glass-card border-l-4 border-fuchsia-500 bg-white">
                        <p className="text-xs text-fuchsia-600 uppercase font-black">
                            Active Course
                        </p>
                        <h4 className="text-lg font-bold text-slate-900">
                            OM-DM1: Digital Marketing Analytics
                        </h4>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex-1 mr-4">
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full fuchsia-gradient"
                                        style={{ width: "84%" }}
                                    ></div>
                                </div>
                            </div>
                            <span className="text-sm font-bold text-slate-900">84%</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 font-medium flex items-center gap-1.5">
                            <ScrollText className="text-slate-400" size={14} />
                            12 course items to Final Assignment
                        </p>
                    </div>
                    <button className="w-full py-3 glass-card text-sm font-bold flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900">
                        Switch Course <ChevronDown size={16} />
                    </button>
                </div>
            </div>

            <div className="glass p-6">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-slate-900">
                    <Award className="text-fuchsia-500" size={20} />
                    Grade Breakdown
                </h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Quiz Average (40%)</span>
                        <span className="text-lg font-bold text-slate-900">88.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Final Project (60%)</span>
                        <span className="text-lg font-bold text-fuchsia-600 italic">
                            Pending Grading
                        </span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                            Current Estimate
                        </span>
                        <span className="text-3xl font-black text-gradient">--%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SubmissionArea() {
    return (
        <div className="glass p-10 border-2 border-dashed border-slate-200 hover:border-fuchsia-400 hover:bg-fuchsia-50/30 transition-all text-center group bg-white">
            <div className="max-w-md mx-auto">
                <div className="mb-6 inline-block p-6 rounded-full bg-slate-50 group-hover:bg-white transition-all">
                    <UploadCloud className="text-slate-400 group-hover:text-fuchsia-500 transition-all" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                    Submit Final Assessment
                </h3>
                <p className="text-slate-500 mb-8">
                    Drag and drop your PDF project file here or click to browse. Ensure it follows the grading rubric.
                </p>

                <input type="file" id="file-upload" className="hidden" />
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer fuchsia-gradient text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:opacity-90 transition-all inline-block"
                >
                    Select File
                </label>
            </div>
        </div>
    );
}
