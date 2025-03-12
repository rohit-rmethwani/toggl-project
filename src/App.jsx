import ProjectCard from './Components/ProjectCard'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

function App() {

  return (
    <Container fluid="xxl">
      <Row>
        <Col><ProjectCard/></Col>
        <Col><ProjectCard/></Col>
        <Col><ProjectCard/></Col>
      </Row>
    </Container>
  )
}

export default App
