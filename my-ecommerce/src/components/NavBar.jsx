import React, {useState} from 'react';
import styled from 'styled-components'
import BurgerButton from './BurgerButton'


function NavBar(){

    const [clicked, setClicked] = useState (false)
    const handleClick = () => {
        // cuando es true lo pasa a false y al reves
        setClicked(!clicked)
    }
    return(
        <>
         <NavContainer>
            <div className='icono'>
             <ion-icon name="cart-outline"></ion-icon>
            </div>
            <h2>my<span>Ecommerce</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onCLick={handleClick} href="/"> Home</a>
                <a onCLick={handleClick} href="/"> Tienda</a>
                <a onCLick={handleClick} href="/"> Nosotros</a>
                <a onCLick={handleClick} href="/"> Contacto</a>
            </div>
            <div className= 'burger'>
                <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
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
            color: cyan;
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
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: white;
            font-size: 1.5rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            color: white;
            margin-top: 1rem;
        }
    }
    .burger{
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    background-color: #222;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
        &.active{
            border-radius: 0 0 80% 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
`