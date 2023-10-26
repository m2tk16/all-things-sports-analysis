import { Container, Navbar, Nav } from "react-bootstrap";


function NavBar() {
  return (
    <Navbar 
      collapseOnSelect expand="sm" 
      variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="/">Jarvis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/settings">Settings</Nav.Link>
            <Nav.Link href="/updates-notes">Update Notes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;