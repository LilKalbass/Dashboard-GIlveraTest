'use client'

import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
    const [active, setActive] = useState('customers');

    return (
        <div className="h-screen w-64 bg-white border-r border-gray-200 p-4">
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
            <ul className="space-y-6">
                <li>
                    <Link href="#"
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                                active === 'dashboard' ? 'bg-gray-100' : ''
                            }`}
                            onClick={() => setActive('dashboard')}
                        >
                            Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="#"
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                                active === 'customers' ? 'bg-purple-500 text-white' : ''
                            }`}
                            onClick={() => setActive('customers')}
                        >
                            Customers
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
