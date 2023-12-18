import { useState } from 'react';
import '../Navbar/Navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { $authData } from '../../story/authAtom';
import { useRecoilState } from 'recoil';
import LogoutButton from '../LogoutButton/LogoutButton';
import { Fragment } from 'react';
import Logo from '../../Assets/logo.png';


export default function NavBar() {
  const [Auth] = useRecoilState($authData);
  const [innerwidth,setinnerwidth] = useState(window.innerWidth);
  window.addEventListener("resize",()=>{
    setinnerwidth(window.innerWidth);
  });
  
  return (
        
        <nav>
            <div className='logoDiv'>
                <img src={Logo}  alt="" />
            </div>
            <div className='navDiv'>
              <ul>
             
                {Auth.isAuth  ? (<Fragment> 
                  <>
                  <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
                <li><NavLink to='/Shop'>Shop</NavLink></li>
                <li><NavLink to='/Blog'>Blog</NavLink></li>
                <li><NavLink to='/Contact'>Contact</NavLink></li>
                  </>

                    <li> <LogoutButton/>  </li></Fragment>) :
                (  <>
                       <li><NavLink to='/Login'>Login</NavLink></li>
                       {/* <li><NavLink to='/Register'>Register</NavLink></li> */}
                   </> 
               )}
           
              </ul>
            </div>
            <div className='barsNamv'>
            <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
  );
}










{/* <Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}