const EmailTab = () => {
  return (
    <div className="border border-borderClr w-full min-h-32 p-2 my-4 flex rounded-lg cursor-pointer">
      <div className="pr-6 pl-9 text-backGroundClr">
        <div className="w-16 h-16 object-fill rounded-full  bg-accentClr p-[15px] flex  justify-center">
          <div className="decoration-white text-2xl">F</div>
        </div>
      </div>

      <div>
        <h3>
          From : <span className="pr-1 font-bold">Name lolLmao.com</span>
        </h3>
        <h3>
          Subject : <span className="pr-1 font-bold">heeh huhu</span>{" "}
        </h3>
        <p className="pt-3 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi.
        </p>
        <div>
          <span className="pr-7">Date kdkkdkdk time</span>{" "}
          <span className="text-accentClr">Favorite</span>
        </div>
      </div>
    </div>
  );
};

export default EmailTab;
