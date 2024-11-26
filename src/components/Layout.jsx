import { Outlet, NavLink } from "react-router";
import StyleHeader from './AppSearch/AppSearch.module.css'
import AppSearch from "./AppSearch/AppSearch";

export default function Layout({ setSearchData }) {
    return (
        <>


            <div className="container d-flex flex-column height100">

                <header className="d-flex justify-content-between align-content-center p-4">
                    <h1 className={StyleHeader.h1}>Il mio blog</h1>
                    <AppSearch setSearchData={setSearchData} />

                    <NavLink className="align-content-center p-1 ancor_tag" to="/">Home</NavLink>
                    <NavLink className="align-content-center p-1 ancor_tag" to="/posts">Posts</NavLink>
                    <NavLink className="align-content-center p-1 ancor_tag" to="/about">About</NavLink>
                    <NavLink className="align-content-center p-1 ancor_tag" to="/addpost">Add Post</NavLink>



                </header>

                <main className="p-5">
                    <Outlet />

                </main>


                <footer className="container">
                    <p>Copyright © 2023 Il mio blog. All rights reserved.</p>
                </footer>

            </div>

        </>


    )
}