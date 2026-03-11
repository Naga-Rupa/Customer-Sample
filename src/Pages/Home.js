import HomeLayout from "../Components/HomeLayout";

function Home() {

  const stats = ["Users", "Revenue", "Orders", "Tickets", "Agents", "Chats"];

  return (
    <HomeLayout>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {stats.map((item) => (

          <div
            key={item}
            className="bg-[#0b7d7b] text-white p-4 rounded-lg shadow"
          >
            <h2>{item}</h2>
            <p className="text-2xl font-bold">120</p>
          </div>

        ))}

      </div>

    </HomeLayout>
  );
}

export default Home;