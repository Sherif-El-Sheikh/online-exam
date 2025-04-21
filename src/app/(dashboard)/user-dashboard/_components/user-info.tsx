import { Card } from "@/components/ui/card";
import { AvatarPlaceholder } from "./avatar-placeholder";
import { FaCheckCircle, FaFlag } from "react-icons/fa";
import { FaClock} from "react-icons/fa6";

// Hardcoded User Info
export function UserInfo() {
    const studentName = "Shreif99";
    const studentProgress = {
        completedQuizzes: 27,
        totalQuizzes: 36,
        progressPercentage: 75,
    };

    return (
        <Card className="p-4 md:p-6 lg:p-8 border-none rounded-3xl shadow-search">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-poppins">

                {/* Avatar Section */}
                <div className="shrink-0 flex items-center justify-center">
                <AvatarPlaceholder name={studentName} className="!rounded-md"/>
                </div>

                {/* User Overview */}
                <div className="flex-1 w-full text-center md:text-left">
                    {/* User name */}
                    <h1 className="text-2xl lg:text-3xl font-bold text-main">{studentName}</h1>

                    {/* progress */}
                    <div className="flex flex-col md:flex-row items-center gap-2 mt-1">
                    {/* Course progress */}
                        <div className="text-sm lg:text-lg text-gray-500">
                            Course Progress: {studentProgress.progressPercentage}% ({studentProgress.completedQuizzes}/{studentProgress.totalQuizzes} Quizzes Completed)
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-4 bg-gray-100 rounded-full mt-3 md:mt-4 lg:mt-5 mb-6 md:mb-7 overflow-hidden">
                        <div className="h-full bg-main rounded-full transition-all duration-500 ease-in-out flex items-center justify-center text-white text-sm font-medium" style={{ width: `${studentProgress.progressPercentage}% `}}>
                            {studentProgress.progressPercentage}%
                        </div>
                    </div>

                    {/* Progress History */}
                    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 flex flex-wrap justify-between gap-4 md:gap-6 lg:gap-8 ">

                        {/* Quiz Passed */}
                        <div className="flex items-center gap-3 sm:justify-center md:justify-start">
                            {/* Icon */}
                            <div className=" p-3 lg:p-4 bg-blue-50 shadow-2xl rounded-xl shrink-0 align-middle">
                                <FaFlag className="w-5 h-5 lg:w-7 lg:h-7 text-main"/>
                            </div>

                            {/* Info text */}
                            <div className="text-dashboardText">
                                <p className="font-bold md:text-base lg:text-xl xl:text-3xl">27</p>
                                <p className="font-normal text-sm xl:text-base">Quiz Passed</p>
                            </div>
                        </div>

                        {/* Fastest Time */}
                        <div className="flex items-center gap-3 sm:justify-center md:justify-start">
                            {/* Icon */}
                            <div className="p-3 lg:p-4 bg-blue-50 shadow-2xl rounded-xl shrink-0 align-middle">
                                <FaClock className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-main"/>
                            </div>

                            {/* Info text */}
                            <div className="text-dashboardText">
                                <p className="font-bold md:text-base lg:text-xl xl:text-3xl">13 min</p>
                                <p className="font-normal text-sm xl:text-base">Fastest Time</p>
                            </div>
                        </div>

                        {/* Correct Answers */}
                        <div className="flex items-center gap-3 sm:justify-center md:justify-start sm:max-md:col-span-full">
                            {/* Icon */}
                            <div className="p-3 lg:p-4 bg-blue-50 shadow-2xl rounded-xl shrink-0 align-middle">
                                <FaCheckCircle className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-main"/>
                            </div>

                            {/* Info text */}
                            <div className="text-dashboardText">
                                <p className="font-bold md:text-base lg:text-xl xl:text-3xl">200</p>
                                <p className="font-normal text-sm xl:text-base">Correct Answers</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
