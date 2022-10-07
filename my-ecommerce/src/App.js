import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer';


function App (){
  return(
    <>
    <NavBar></NavBar>
    <ItemListContainer gretting = {'Bienvenidos a "myEcommerce"'}></ItemListContainer>
    </>
  );
}

export default App;
