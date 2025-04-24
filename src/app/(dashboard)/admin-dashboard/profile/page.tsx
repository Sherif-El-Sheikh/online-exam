import {ProfileInfo} from "../../(shared)/_components/profile-info"

const user = {
    username: "shreef99",
    firstName: "sherif",
    lastName: "Tech",
    email: "shreefsheikh99@gmail.com",
    phone: "01027391030",
    role: "user",
    createdAt: "2025-04-15T17:45:13.734Z"
}

export default function Page() {
    return (
        <>
        <ProfileInfo user={user}/>
        </>
    )
}