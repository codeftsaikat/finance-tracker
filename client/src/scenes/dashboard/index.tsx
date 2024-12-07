import { useGeKpisQuery } from "@/state/api";

type Props = {};

const Dashboard = (_props: Props) => {
  const {data} = useGeKpisQuery();
  return (
    <div className="w-full flex justify-center items-center pt-[70px] pb-7">
      <div className="text-gray-300 grid lg:grid-cols-3 gap-4">
        <div className="lg:grid gap-4">
        <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[400px]"></div>
        <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[250px]"></div>
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[250px]"></div>
        </div>
        <div className="lg:grid gap-4">
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[300px]"></div>
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[200px]"></div>
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[400px]"></div>
        </div>
        <div className="lg:grid gap-4">
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[250px]"></div>
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[250px]"></div>
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[189px]"></div>
          <div className="bg-gray-700 shadow-2xl rounded-md bg-opacity-30 w-[400px] h-[189px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
