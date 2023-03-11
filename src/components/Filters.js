import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/CartContext';
import { useFilterBarState } from '../context/FilterBar';
import { useTheme } from '../context/ThemeContextProvider';
import { useWindowSize } from '../hooks/useWindowSize';
import Rating from './Rating'

const Filters = () => {
    const { productState : {
                byStock, byFastDelivery, sort, byRating
            }, 
            productDispatch } = CartState();

    const { theme } = useTheme();

    const windowSize = useWindowSize();

    const {visible} = useFilterBarState();
    
    return (
        <div 
            className={`filters ${theme === 'light' ? 'lightFilter' : 'darkFilter'}`} 
            style={{display: windowSize.width <= 965 && !visible && 'none'}}
        >
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label='Ascending'
                    name='group1'
                    type='radio'
                    id={`inline-1`}
                    onChange={() => productDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: 'lowToHigh',
                    })}
                    checked= {sort === 'lowToHigh' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Descending'
                    name='group1'
                    type='radio'
                    id={`inline-2`}
                    onChange={() => productDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: 'highToLow',
                    })}
                    checked= {sort === 'highToLow' ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Include Out of Stock'
                    name='group1'
                    type='checkbox'
                    id={`inline-3`}
                    onChange={() => productDispatch({
                        type: 'FILTER_BY_STOCK',
                    })}
                    checked= {byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Fast Delivery Only'
                    name='group1'
                    type='checkbox'
                    id={`inline-4`}
                    onChange={() => productDispatch({
                        type: 'FILTER_BY_DELIVERY',
                    })}
                    checked= {byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating 
                    rating={byRating} 
                    style={{ cursor: 'pointer' }} 
                    onClick={ i => productDispatch({
                        type: 'FILTER_BY_RATING',
                        payload: i + 1,
                    })}
                />
            </span>
            <Button 
                variant='light' 
                onClick={() => productDispatch({
                    type: 'CLEAR_FILTERS'
                })}
            >
                Clear Filters
            </Button>
        </div>
    );
}

export default Filters;

/**
 * useRef() hook creates an object with mutable variable which will not re render the component
 * it is used to access the DOM directly
 */