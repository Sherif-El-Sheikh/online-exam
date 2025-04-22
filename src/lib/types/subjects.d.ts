declare type Subject = {
    _id: string,
    name: string,
    icon: string,
}

declare type SubjectsProps = {
    subjects: Subject[],
    showAll?: boolean,
    role: "admin" | "user"
}

declare type SubjectPageParams = {
    params: {
        subjectId: string;
    }
}