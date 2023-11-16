import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";



const Navi = () => {
    return( 
        <Navbar style={{display: 'flex', justifyContent: 'space-around'}}>
            <h2>MoVieLOgo</h2>
            <div className="nav">
            <NavLink to="/home">home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/latest">latest</NavLink>
            </div>
        </Navbar>
     );
};

export default Navi;