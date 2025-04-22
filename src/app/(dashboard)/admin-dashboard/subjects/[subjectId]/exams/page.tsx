// Exams by subjectId

function getExamsBySubject (subjectId: string) {
    return subjectId
}

export default function Page({params}: SubjectPageParams) {
    const exams = getExamsBySubject(params.subjectId);
    return (
        <>
        Exams by subjectId = {exams}
        </>
    )
}