import Button from 'react-bootstrap/Button';
import React from 'react'
import { $authData } from '../../story/authAtom';
import { useRecoilState } from 'recoil';
import { NavLink } from 'react-bootstrap';

export default function LogoutButton() {
    const [Auth,setAuth] = useRecoilState($authData);
    function handelLogout(){
setAuth({
    isAuth : false,
    userid:null
})
      localStorage.removeItem('loggedinuser');
    }
  return (
    <>
  
     <NavLink 
     variant="danger"
     onClick={handelLogout}
     >Logout</NavLink>
    </>

  )
}
