import React, {useState} from 'react';
import styled from 'styled-components'
import CartWidget from './CartWidget';


function NavBar(){

    const [clicked, setClicked] = useState (false)
    const handleClick = () => {
        // cuando es true lo pasa a false y al reves
        setClicked(!clicked)
    }
    return(
        <>
         <NavContainer>
         <CartWidget/>
            <h2>my<span>Ecommerce</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onCLick={handleClick} href="/"> Home</a>
                <a onCLick={handleClick} href="/"> Tienda</a>
                <a onCLick={handleClick} href="/"> Nosotros</a>
                <a onCLick={handleClick} href="/"> Contacto</a>
            </div>
         </NavContainer>
        </>
    );
}

export default NavBar

const NavContainer = styled.nav `
    h2{
        font-weight: 400;
        color: white;
        span{
            font-weight: bold;
            color: #0288d1;
        }
    }
    .icono{
        font-size: 32px;
        color: white;
    }
    padding: 1rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    
`