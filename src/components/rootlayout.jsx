import { Outlet } from "react-router-dom";
import Navi from "./nav";
import { Container } from "react-bootstrap";


 const Rootlayout = () => {
    return ( <Container
        style={{
            minhieght:'100vh' ,
            display:'flex',
            flexdirection:'colum',
            justifycontent:'space-between'
        }}>
    <Navi/>
    <Outlet/>
    <footer>
        &copy; 2023
    </footer>    
    </Container>)
}

export default Rootlayout;