import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="https://simp-bot.xyz">
      <img
        src="https://raw.githubusercontent.com/OOF2510/simp-bot-site/master/public/logo192.png"
        width="60"
        height="40"
        className="d-inline-block align-top"
        alt="Simp Bot Logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#/partners" target="_blank">Partners</Nav.Link>
            <Nav.Link href="https://git.io/JcpyV" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://discord.gg/zHtfa8GdPx" target="_blank">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
              Support Server
            </Nav.Link>
      </Nav>
    </>
  );
};

export default Navigation;
