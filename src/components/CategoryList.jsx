import React from 'react';

const CategoryList = ({ categories, onSelect }) => {
    return (
        <div className="category-list">
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category} onClick={() => onSelect(category)} className="category-item">
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
