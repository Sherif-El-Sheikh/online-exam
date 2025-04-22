import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Subjects({subjects, showAll= false, role}: SubjectsProps) {
    // which subjects to display based on showAll - the first 3 subjects are displayed by default
    const displayedSubjects = showAll ? subjects : subjects.slice(0, 3);

    // Base URL path for the subjects, dynamically set based on
    const basePath = `/${role}-dashboard/subjects`;

    return (
        <div className="p-4 md:p-6 lg:p-8 rounded-3xl shadow-search">

            {/* Quizes - view All */}
            <div className="flex items-center justify-between mb-4 md:mb-6 mt-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-medium text-main">Quizes</h3>

                {/* Display "View All" button in dashboard */}
                {!showAll &&
                            <Link href={basePath}>
                                <Button variant="link" className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-medium text-main">
                                View All
                                </Button>
                        </Link>
                }
            </div>
            
            {/* subjects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {displayedSubjects.map((subject) => (

                    // Link to the exams of a specific subject
                    <Link key={subject._id} href={`${basePath}/${subject._id}/exams`}>
                        <Card key={subject._id} title={subject.name} className="overflow-hidden group cursor-pointer border-none shadow-md">

                            {/* aspect ratio of the image */}
                            <div className="relative">
                                <AspectRatio ratio={330 / 292}>
                                    <div className='w-full h-full relative'>
                                        <Image
                                        src={subject.icon}
                                        alt={subject.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                        priority
                                        className='object-cover w-full h-full transition-all group-hover:scale-105'
                                        />

                                        {/* Overlay for subject name */}
                                        <div className="absolute left-1/2 bottom-7 transform -translate-x-1/2 w-56 sm:w-64 md:max-xl:max-w-40 2xl:w-72 bg-gradient-to-b from-[#1935CA66]/30 to-[#1100FF66]/30 p-4 text-white rounded-lg">

                                        {/* subject name */}
                                            <h4 className="font-poppins font-bold text-xs sm:text-sm md:text-xs 2xl:text-base text-start">{subject.name}</h4>
                                        </div>
                                    </div>
                                </AspectRatio>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
