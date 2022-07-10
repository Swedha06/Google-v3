import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

export default function search()
{
    return(
        <div>
            <Head>
              <title>Search Page</title>
            </Head>
            {/*Search header*/}
            <SearchHeader/>
            {/*Search results*/}
        </div>
    )
}