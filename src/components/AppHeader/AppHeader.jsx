import Style from './AppHeader.module.css'
import { useState } from 'react'

export default function Appheader({ setSearchData }) {


    const handleSearch = (e) => {
        setSearchData(e.target.value)
    }



    return (
        <>
            <h1 className={Style.h1}>Il mio blog</h1>

            <input type="search" className={`form-control ${Style.input}`} placeholder='Search...' onChange={handleSearch} />
        </>

    )

}