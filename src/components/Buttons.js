import React from 'react';
// import Button from 'react-bootstrap/esm/Button';

//  function Buttons() {
//   return (
    
//        <>
//        <div>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//       </div>
//     </>
    
//   );
// }
// export default Buttons;
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Buttons() {
  return (
    <ButtonGroup aria-label="Basic example text-sm rounded-full ">
      <Button className="bg-cyan-700"variant="secondary"> <Button className=' bg-white text-cyan-600' variant="secondary">looking to hire</Button>Looking for job</Button>
      {/* <Button variant="secondary">looking to hire</Button> */}
      
    </ButtonGroup>
  );
}

export default Buttons;
