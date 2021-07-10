import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/#">Simp Bot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://discord.gg/zHtfa8GdPx">
              Support Server
            </Nav.Link>
            <Nav.Link href="https://discord.com/api/oauth2/authorize?client_id=808822189905936405&permissions=8&scope=bot">
              Invite
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
