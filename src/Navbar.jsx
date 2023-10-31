import { Container, Navbar, Nav } from "react-bootstrap";
import SignOutButton from './SignOutButton';

interface NavBarProps {
  user: string,
  firstNameProps: any
}

function NavBar(props: NavBarProps) {
  const { user, firstNameProps } = props;

  return (
    <Navbar 
      collapseOnSelect expand="sm" 
      variant="dark"
      className="navbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href={"/jarvis/user="+ user}>
          <img className="jarvis-logo" src="/jarvis.png" alt="jarvis-head" />
        </Navbar.Brand>
        <div className="nav-user-name">Welcome, {firstNameProps[0]}!</div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={"/jarvis/user="+ user}>Jarvis</Nav.Link>
            <Nav.Link href={"/settings/user="+ user} >Settings</Nav.Link>
            <Nav.Link href="/release-notes">Release Notes</Nav.Link>
            <hr className="card-hr"></hr>
            <Nav.Link href=""><SignOutButton /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;