// SearchAndSort.js
import React, { useState } from 'react';

const SearchAndSort = ({ onSearch, onSort }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortField(value);
        onSort(value);
    };

    return (
        <div className="flex items-center justify-between mb-8">
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
                value={sortField}
                onChange={handleSortChange}
                className="ml-4 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="paymentStatus">Payment Status</option>
                <option value="paymentDate">Payment Date</option>
            </select>
        </div>
    );
};

export default SearchAndSort;
