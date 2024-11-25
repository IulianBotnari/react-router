import { Outlet, NavLink } from "react-router";
import StyleHeader from './AppSearch/AppSearch.module.css'
import AppSearch from "./AppSearch/AppSearch";

export default function Layout({ setSearchData }) {
    return (
        <>


            <div className="container d-flex flex-column mb-3">

                <header className="d-flex justify-content-between p-5">
                    <h1 className={StyleHeader.h1}>Il mio blog</h1>
                    <AppSearch setSearchData={setSearchData} />

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to="/about">Posts</NavLink>


                </header>

                <main className="p-5">
                    <Outlet />

                </main>


                <footer>
                    <p>Copyright © 2023 Il mio blog. All rights reserved.</p>
                </footer>


            </div>

        </>

    )
}