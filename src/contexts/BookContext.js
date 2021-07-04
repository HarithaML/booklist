import React,{createContext,useReducer} from "react";

import {BookReducer} from "../reducers/BookReducer";

export const BookContext = createContext(0);

const BookContextProvider = (props) => {
    const [books,dispatch] =useReducer(BookReducer,[],()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    })
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
