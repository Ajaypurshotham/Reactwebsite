import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Headers = () => {
  const {carts} = useSelector((state)=>state.allCart);
  console.log(carts);

  return (
    <>
    <Navbar style={{height:"60px", background:"purple", color:"white"}}>
    <Container>
    <NavLink to="/" className="text-decoration-none text-light mx-2">
      <h3 className='text-light'>Shop Your Choice</h3>
      </NavLink>
      <NavLink to="/cart" className="text-decoration-none text-light mx-2">
      <div id='ex4'>
        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length} >
        <FaCartShopping />
        </span>
      </div>
      </NavLink>
    </Container>
  </Navbar>
  </>
  )
}

export default Headers