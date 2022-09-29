import styled from 'styled-components'

function ItemListContainer(props){
    return(
        <ItemList>
            <div className='title-container'>
                <h1 className='title'> {props.gretting} </h1>
            </div>
        </ItemList>
    )
}

export default ItemListContainer

const ItemList = styled.div `
display:flex;
justify-content: center;
.title-container{
    margin-top: 0.5rem;
    padding: 10px;
    .title{
    }&:hover{
        color: white;
        background-color: #0288d1;
        transition: background-color 2s, color 2s;
        }
    }
}
`