declare type Exam = {
    _id: string,
    title: string,
    duration: number,
    subject: string,
    numberOfQuestions: number
}

declare type ExamsListProps = {
    exams: Exam[],
    title: string,
    role: "admin" | "user"
}

type Role = "user" | "admin";

declare type ExamButtonProps = {
    role: Role;
};