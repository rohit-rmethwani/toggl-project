import { Navbar, Container } from "react-bootstrap";
import Logo from '../assets/logo.png';
const ProjectHeader = () => {
    return(
        <Navbar variant="dark" className="bg bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-start">
            <img src={Logo} alt="" width="40%" className="d-inline-block align-top"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default ProjectHeader;