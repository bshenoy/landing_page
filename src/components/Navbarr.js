import Nav from 'react-bootstrap/Nav';

function Navbarr() {
  return (
    <>
      <Nav className=" space-x-5 h-24 justify-content-end bg-sky-500 text-pink-400" activeKey="/home">
       
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Content</Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-4 ">
          <Nav.Link eventKey="link-3">Contanct</Nav.Link>
        
        </Nav.Item>
      </Nav>
      
    </>
  );
}

export default Navbarr;