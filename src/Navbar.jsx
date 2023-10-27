import { Container, Navbar, Nav } from "react-bootstrap";


function NavBar() {
  return (
    <Navbar 
      collapseOnSelect expand="sm" 
      variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="/"><img className="jarvis-logo" src="/jarvis.png" alt="jarvis-head" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/settings">Settings</Nav.Link>
            <Nav.Link href="/release-notes">Release Notes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;