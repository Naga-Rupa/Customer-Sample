import HomeLayout from "../Components/HomeLayout";

function Payments() {

  const payments = [
    {
      id: "TXN-1021",
      service: "Website Maintenance",
      amount: "$120",
      date: "12 Mar 2026",
      status: "Paid"
    },
    {
      id: "TXN-1019",
      service: "Payment Integration",
      amount: "$250",
      date: "05 Mar 2026",
      status: "Paid"
    },
    {
      id: "TXN-1017",
      service: "Security Monitoring",
      amount: "$90",
      date: "01 Mar 2026",
      status: "Pending"
    }
  ];

  return (
    <HomeLayout>

      {/* PAGE TITLE */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
        <p className="text-gray-500">View your account balance and payment history.</p>
      </div>


      {/* BALANCE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Account Balance</h3>
          <p className="text-3xl font-bold text-[#0b7d7b]">$420</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Total Spent</h3>
          <p className="text-3xl font-bold text-gray-800">$1,250</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Pending Payments</h3>
          <p className="text-3xl font-bold text-yellow-500">$90</p>
        </div>

      </div>


      {/* PAYMENT HISTORY */}
      <div className="bg-white rounded-xl shadow">

        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Payment History
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Service</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>

              {payments.map((payment) => (

                <tr
                  key={payment.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-4 text-gray-700">{payment.id}</td>

                  <td className="p-4 text-gray-700">
                    {payment.service}
                  </td>

                  <td className="p-4 font-semibold">
                    {payment.amount}
                  </td>

                  <td className="p-4 text-gray-600">
                    {payment.date}
                  </td>

                  <td className="p-4">

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {payment.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </HomeLayout>
  );
}

export default Payments;