import React from 'react'
import { FormControl, Navbar } from 'react-bootstrap'
import { CartState } from '../context/CartContext';

const SearchBar = ({classes}) => {

    const { 
        productDispatch
    } = CartState();
  return (
    <>
        <Navbar.Text className={`p-0 ${classes}`}>
            <FormControl
                placeholder='Search a product'
                className='m-auto'
                onChange={e => productDispatch({
                    type: 'FILTER_BY_SEARCH',
                    payload: e.target.value,
                })}
            />

        </Navbar.Text>
    </>
  )
}

export default SearchBar