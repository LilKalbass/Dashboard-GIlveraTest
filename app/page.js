'use client'

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import CustomerTable from '../components/CustomerTable';
import Pagination from '../components/Pagination';
import customers from "@/data/CustomerList";

import usePaginationAndFilter from "@/hooks/usePaginationAndFilter";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 8;

  const { currentPage, setCurrentPage, currentItems: currentCustomers, totalPages } =
      usePaginationAndFilter(customers, itemsPerPage, searchTerm);

  return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-10">
          <h2 className="text-2xl font-semibold mb-4">Hello Evano 👋</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">All Customers</h3>
              <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>
            <CustomerTable customers={currentCustomers} />
            <div className="flex justify-between items-center mt-4">
                <span>
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, customers.length)} of {customers.length} entries
                </span>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </main>
      </div>
  );
}
