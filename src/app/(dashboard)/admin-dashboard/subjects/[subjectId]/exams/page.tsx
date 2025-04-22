// Exams by subjectId

function getExamsBySubject (subjectId: string) {
    return subjectId
}

export default function Page({params}: SubjectIdParams) {
    const exams = getExamsBySubject(params.subjectId);
    return (
        <>
        Exams by subjectId = {exams}
        </>
    )
}