export default function CustomerTable({ customers }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border">
                <thead>
                <tr className="bg-gray-50">
                    <th className="p-4 text-left">Customer Name</th>
                    <th className="p-4 text-left">Company</th>
                    <th className="p-4 text-left">Phone Number</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Country</th>
                    <th className="p-4 text-left">Status</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer, index) => (
                    <tr key={index} className="border-t">
                        <td className="p-4">{customer.name}</td>
                        <td className="p-4">{customer.company}</td>
                        <td className="p-4">{customer.phone}</td>
                        <td className="p-4">{customer.email}</td>
                        <td className="p-4">{customer.country}</td>
                        <td className="p-4">
                <span className={`px-2 py-1 rounded ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {customer.status}
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
