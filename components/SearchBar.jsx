import React from 'react';

const SearchBar = ({ searchTerm, onSearch, setCurrentPage }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
        setCurrentPage(1);
    };

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="border rounded px-4 py-2"
        />
    );
};

export default SearchBar;