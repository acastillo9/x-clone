import { useContext } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function Layout() {

    const [setIsLogged] = useOutletContext()
    const user = useContext(UserContext);

    return (
        <>
            <header>
                <h1>X Clone</h1>
                <p>{user?.name}</p>
                <button onClick={() => setIsLogged(false)}>Log Out</button>
            </header>
            <Outlet />
        </>
    )
}

export default Layout