/* Using context api to pass the basket and user details 
directly to the far-of child components in DOM tree */

import React, { useReducer } from 'react';
import { useContext, createContext } from 'react';
import reducer, { initialState } from './Reducer';

// 1- Create the context (define what data to pass)
export const Context = createContext()

// 2- Provide the context (who will provide the data?)
export const ContextProvider = (props) => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        {props.children}
    </Context.Provider>
)

// 3- Use the context (who will consume the data?)
export const ContextConsumer = () => useContext(Context)