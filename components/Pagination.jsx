export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const getPaginationGroup = () => {
        const pageNumbers = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, currentPage - 1, currentPage, currentPage + 1, totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="flex space-x-2 items-center">
            <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                    currentPage === 1 ? 'bg-gray-300 text-gray-600' : 'bg-purple-500 text-white'
                }`}
            >
                &lt;
            </button>
            {getPaginationGroup().map((page, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded-lg ${
                        currentPage === page ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    {page === totalPages && totalPages > 5 && index === 1 ? '...' : page}
                </button>
            ))}
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages ? 'bg-gray-300 text-gray-600' : 'bg-purple-500 text-white'
                }`}
            >
                &gt;
            </button>
        </div>
    );
}
