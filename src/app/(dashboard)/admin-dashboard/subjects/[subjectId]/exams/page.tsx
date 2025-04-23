// Exams by subjectId

function getExamsBySubject (subjectId: string) {
    return subjectId
}

function getSubjectById(subjectId: string) {
    return <div>{`single subject by ${subjectId} to get subject name `}</div>
}

export default function Page({params}: SubjectIdParams) {
    const exams = getExamsBySubject(params.subjectId);
    const subject = getSubjectById(params.subjectId)
    return (
        <> 
        using ExamsList component
        Exams by subjectId = {exams}
        and title from = {subject}
        </>
    )
}