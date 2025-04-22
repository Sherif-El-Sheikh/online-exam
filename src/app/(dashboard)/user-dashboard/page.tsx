import Subjects from "../(shared)/_components/subjects";
import { UserInfo } from "./_components/user-info";

// Subjects (static data temporary)
const subjects = [
    {
    _id: "670037f6728c92b7fdf434fc",
    name: "HTML",
    icon: "https://exam.elevateegy.com/uploads/categories/6751d734cc3deba60dd5bc80-item_1.png",
    },
    {
    _id: "670038f7728c92b7fdf43501",
    name: "CSS",
    icon: "https://exam.elevateegy.com/uploads/categories/6751d73fcc3deba60dd5bc84-item_2.png",
    },
    {
    _id: "670039c3728c92b7fdf43506",
    name: "Javascript",
    icon: "https://exam.elevateegy.com/uploads/categories/6751d74ccc3deba60dd5bc88-item_3.png",
    },
    {
    _id: "67003a9a728c92b7fdf4350a",
    name: "Angular",
    icon: "https://exam.elevateegy.com/uploads/categories/6751d758cc3deba60dd5bc8c-item_4.png",
    },
    {
    _id: "67c594c55554b3289125e0c3",
    name: "Flutter Development",
    icon: "https://exam.elevateegy.com/uploads/categories/67ee864e5554b32891275c49-flutter.png",
    },
    {
    _id: "67ca2e5d5554b32891261bf4",
    name: "AI & ML Development",
    icon: "https://exam.elevateegy.com/uploads/categories/67ee85615554b32891275c32-ai.png",
    },
    {
    _id: "67ccd8225554b32891264983",
    name: "Back-End Web Development",
    icon: "https://exam.elevateegy.com/uploads/categories/67ee85c85554b32891275c39-tech.png",
    },
    {
    _id: "67d37c435554b3289126a9e5",
    name: "Data Analysis",
    icon: "https://exam.elevateegy.com/uploads/categories/67ee85f95554b32891275c40-tech.png",
    },
    {
    _id: "680176bf5554b32891291d82",
    name: "basics of code",
    icon: "https://exam.elevateegy.com/uploads/categories/680176be5554b32891291d80-dictionary.png",
    }
];

export default function Page() {
    return (
        <div className="p-4 md:p-7 space-y-6 md:space-y-8">
            {/* User Information */}
            <UserInfo/>

            {/* Subjects component, 3 by default */}
            <Subjects subjects={subjects} role="user"/>
        </div>
    )
}