const EmailBody = () => {
  return (
    <div className="w-[80%]  h-fit rounded-lg border border-borderClr m-2 mt-4 p-4 bg-white ml-6">
      <div className="flex flex-col">
        <div className="pr-6 pl-9 text-backGroundClr">
          <div className="w-16 h-16 object-fill rounded-full  bg-accentClr p-[15px] flex  justify-center">
            <div className="decoration-white text-2xl">F</div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="pr-1 font-bold text-3xl text-textClr">
            Subject Name
          </div>
          <button
            type="button"
            className="rounded-full h-[35px] bg-accentClr w-[150px]   text-readBackgound"
          >
            Mark as favorite
          </button>
        </div>

        <div>
          ipsa animi cum architecto atque ex voluptas vero nisi fugit doloribus.
          Fugit maxime molestias deserunt error perferendis quae nostrum?
        </div>
      </div>

      <div>{/* kk */}</div>
    </div>
  );
};

export default EmailBody;
