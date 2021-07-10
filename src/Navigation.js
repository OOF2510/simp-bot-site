import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Simp Bot</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/#">Home</Nav.Link>
          <Nav.Link href="/#/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
