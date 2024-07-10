import React from 'react'

const Categories = ({ categoryName, onClick, isSelected }) => {
    return (
        <div className='text-center d-flex flex-column align-items-center justify-content-center'>
            <span className='category-list-item mx-3' style={{ fontWeight: isSelected ? 'bold' : 'normal', cursor: 'pointer', fontSize: '1.25rem' }} onClick={onClick} >{categoryName[0].toUpperCase() + categoryName.slice(1)}</span>
            <div className='category-line' style={{ display: isSelected ? 'block' : 'none', backgroundColor: isSelected ? 'red' : 'transparent', width: '100px', height: '3px' }}>
            </div>
        </div>
    )
}

export default Categories