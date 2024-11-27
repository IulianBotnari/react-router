import Style from './AppSearch.module.css'
import { useContext, useState } from 'react'
import SetSearchPostContext from '../../Context/SetSearchPostContext'
import AppPost from '../AppPost/AppPost'


export default function AppSearch() {

    const [searchData, setSearchData] = useState('')


    const handleSearch = (e) => {
        setSearchData(e.target.value)
    }





    <SetSearchPostContext.Provider value={searchData} >
        <AppPost />

    </SetSearchPostContext.Provider>



    return (
        <>

            <input type="search" className={`form-control ${Style.input}`} placeholder='Search...' onChange={handleSearch} />
        </>

    )

}