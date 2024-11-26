
import AppForm from "../components/AppForm/AppForm"
import AppPost from "../components/AppPost/AppPost"

export default function Posts({ searchData }) {
    return (
        <>

            <AppPost setPostSearchData={searchData} />
        </>
    )
}
