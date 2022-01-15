import React from 'react'

const Search = (props) => {
    const {searchItem} = props
    const getData = (e)=>{
        // let searchItem= e.target.value
        searchItem(e.target.value)
    }
    return (
        <div>
            <input type='text'  onChange={getData}/>
        </div>
    )
}

export default Search
