import React from 'react'

const Categories = ({ categoryName, onClick }) => {
    return (
        <button type="button" className="btn btn-outline-primary" onClick={onClick} >{categoryName}</button>
    )
}

export default Categories