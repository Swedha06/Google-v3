import {useSession,signIn,signOut} from "next-auth/react"
export default function User()
{
    const{ data:session }=useSession();
    if(session)
    {
        return(
            <>
            
            <p className="bg-gray-500 text-white px-4 py-2 font-sm rounded-md hover:brightness-130 hover:shadow-md">Signed in as {session.user.name}</p>
            <button className="bg-blue-500 text-white px-4 py-2 font-medium rounded-md hover:brightness-130 hover:bg-blue-700 hover:shadow-md"onClick={signOut}>Sign Out</button>
            
            </>
        )
    }
    return(
        <>
        <button className="bg-blue-500 text-white px-4 py-2 font-medium rounded-md hover:brightness-130 hover:bg-blue-800 hover:shadow-md"onClick={signIn}>Sign In</button>
        </>
    )
}