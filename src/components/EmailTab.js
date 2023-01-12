const EmailTab = ({ email }) => {
  // console.log(email);
  return (
    <div className="border border-borderClr hover:border-accentClr hover:bg-accentClr hover:bg-opacity-5 w-full min-h-32 p-2 my-4 flex rounded-lg cursor-pointer">
      <div className="pr-6 pl-9 text-backGroundClr">
        <div className="w-16 h-16 object-fill rounded-full  bg-accentClr p-[15px] flex  justify-center">
          <div className="text-2xl">{email?.from?.name?.substring(0, 1)}</div>
        </div>
      </div>

      <div>
        <h3>
          From : <span className="pr-1 font-bold">{email?.from?.email}</span>
        </h3>
        <h3>
          Subject : <span className="pr-1 font-bold">{email?.subject}</span>{" "}
        </h3>
        <p className="pt-3 pb-2">{email?.short_description}</p>
        <div>
          <span className="pr-7">{email?.date}</span>{" "}
          <span className="text-accentClr">Favorite</span>
        </div>
      </div>
    </div>
  );
};

export default EmailTab;
