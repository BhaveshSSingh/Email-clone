import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div
      className="bg-backGroundClr  text-textClr  p-8 
    h-full px-10 "
    >
      <span className="text-black">
        <p className="pr-4 inline-block">Filter By:</p>
        <Tabs />
      </span>
    </div>
  );
};

export default App;
