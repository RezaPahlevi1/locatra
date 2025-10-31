import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="w-full h-screen bg-[#0C2B4E] flex flex-row">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
