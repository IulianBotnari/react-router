import Style from './AppSearch.module.css'
import { useState } from 'react'

export default function AppSearch({ setSearchData }) {


    const handleSearch = (e) => {
        setSearchData(e.target.value)
    }



    return (
        <>

            <input type="search" className={`form-control ${Style.input}`} placeholder='Search...' onChange={handleSearch} />
        </>

    )

}