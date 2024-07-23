
import { Outlet } from "react-router-dom"
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"
import {Col, Container, Row} from "react-bootstrap";

export default function Layout() {
    return (
        <Container >
            <Row>
                <Col className="my-3">
                    <Header />
                </Col>
            </Row>
            <Row className="my-3">
                <Col className={'col-lg-3'}/>
                <Col className="text-center">
                    <Outlet/>
                </Col>
                <Col className={'col-lg-3'}/>
            </Row>
            <Row className="my-3 fixed-bottom">
                <Col className="text-center">
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}