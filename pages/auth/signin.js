import React from 'react'
import Header from '../../components/Header'
import {getProviders,signIn} from "next-auth/react"

export default function signin({providers})//client side 
{
    return(
        <>
            <Header/>
            <div className="mt-40">
               {Object.values(providers).map(provider =>(
                   <div key={provider.name} className="flex flex-col items-center">
                       <img 
                       className="w-60 object-cover"
                       src="https://cdn.pixabay.com/photo/2013/01/29/22/07/google-76659_960_720.png" alt="google-logo" />
                       <p className="text-l bold my-10 text-center">This website is created purely for learning purposes</p>
                       <button className="bg-blue-600 rounded-lg text-white p-3 hover:bg-blue-800" onClick={()=>signIn(provider.id,{callbackUrl: "/"})}>Sign In with {provider.name}</button>
                    </div>
               ))}
            </div>
        </>
    )
}
export async function getServerSideProps()//server side
{
    const providers = await getProviders();
    return {
        props: { providers },
    };
}