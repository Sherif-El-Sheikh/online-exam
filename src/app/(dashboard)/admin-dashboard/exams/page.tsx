import { ExamsList } from "../../(shared)/_components/exams-list";

const exams = [
    {
    _id: "6700707030a3c3c1944a9c5d",
    title: "JavaScript Quiz",
    duration: 20,
    subject: "670039c3728c92b7fdf43506",
    numberOfQuestions: 25,
    },
    {
    _id: "6700708d30a3c3c1944a9c60",
    title: "CSS Quiz",
    duration: 20,
    subject: "670038f7728c92b7fdf43501",
    numberOfQuestions: 25,
    },
    {
    _id: "670070a830a3c3c1944a9c63",
    title: "HTML Quiz",
    duration: 25,
    subject: "670037f6728c92b7fdf434fc",
    numberOfQuestions: 40,
    },
    {
    _id: "670070cc30a3c3c1944a9c66",
    title: "React Quiz",
    duration: 25,
    subject: "67003aad728c92b7fdf4350e",
    numberOfQuestions: 25,
    },
]

export default function Page() {
    return (
        <>
        <ExamsList exams={exams} title="All Exams" role="admin"/>
        </>
    )
}