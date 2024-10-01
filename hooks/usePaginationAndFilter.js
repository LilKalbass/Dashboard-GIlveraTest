import { useState, useMemo } from 'react';

export default function usePaginationAndFilter(items, itemsPerPage, searchTerm) {
    const [currentPage, setCurrentPage] = useState(1);

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [items, searchTerm]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = useMemo(() => {
        return filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    }, [filteredItems, indexOfFirstItem, indexOfLastItem]);

    const totalPages = useMemo(() => {
        return Math.ceil(filteredItems.length / itemsPerPage);
    }, [filteredItems.length, itemsPerPage]);

    return { currentPage, setCurrentPage, currentItems, totalPages };
}
