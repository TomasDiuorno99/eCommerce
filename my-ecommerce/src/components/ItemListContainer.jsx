import React, {useState, useEffect} from 'react';
import {StockProductos} from '../myproducts/products';
import ItemList from './ItemList';
import { Container } from '@mui/material';

function ItemListContainer(props){

    const[productos, setProducts] = useState ([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout (() =>{
                return resolve(StockProductos);
            }, 5000);
        })
    }

    useEffect( () =>{
    getProducts().then( (res) =>{
        setProducts(res)
    }).finally( () =>{
        console.log("MIS PRODUCTOS")
    })
    }, [])

    return(
        <Container>
            {props.gretting}
            <ItemList items={productos}></ItemList>
        </Container>
    )
}

export default ItemListContainer;