import React from 'react'

const Categories = ({ categoryName, onClick }) => {
    return (
        <span className='category-list-item mx-3' style={{ cursor: 'pointer', fontSize: '1.25rem' }} onClick={onClick} >{categoryName[0].toUpperCase() + categoryName.slice(1)}</span>
    )
}

export default Categories