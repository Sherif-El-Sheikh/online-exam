import Image from "next/image";
import ExamsButtons from "./exams-buttons";
import { getExamImage } from "@/lib/utils/get-exam-image";



export function ExamsList({exams, title, role}: ExamsListProps) {
    return (
        <div className="min-h-screen flex">

            {/* Main Content */}
            <div className="flex-1 py-6 px-8">
                <section className="space-y-6">
                    {/* Subject title - All Exams */}
                    <h2 className="font-inter font-medium text-lg mb-4">{title}</h2>

                    <div className="space-y-4">
                        {exams.map((exam) => (
                            <div key={exam._id} className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow-exams">
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-12 h-12 flex-shrink-0 align-middle">
                                        <Image
                                        src={getExamImage(exam.title)}
                                        alt={exam.title}
                                        width={70}
                                        height={70}
                                        priority
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <h3 className="font-inter font-medium text-base">
                                            {exam.title}
                                        </h3>
                                        <p className="font-inter font-normal text-sm text-dashboardSubText">
                                            {exam.numberOfQuestions} Question
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end md:items-center gap-3 my-2">
                                    <p className="font-inter font-normal text-sm">{exam.duration} Minutes</p>
                                    <ExamsButtons role={role}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
