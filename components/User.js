import {useSession,signIn,signOut} from "next-auth/react"
export default function User()
{
    const{ data:session }=useSession();
    if(session)
    {
        return(
            <>
            <img onClick={signOut} src="https://thumbs.dreamstime.com/b/beautiful-purple-butterfly-isolated-white-background-130745321.jpg" alt="user-image" className="bg-gray-500 h-9 w-9 rounded-full hover:bg-blue-400 cursor-pointer p-1" />
            </>
        )
    }
    return(
        <>
        <button className="bg-blue-500 text-white px-4 py-2 font-medium rounded-md hover:brightness-130 hover:shadow-md"onClick={signIn}>Sign In</button>
        </>
    )
}