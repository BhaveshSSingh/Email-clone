const EmailTab = ({ email }) => {
  const { subject, short_description, date } = email;
  return (
    <div className="border border-borderClr hover:border-accentClr hover:bg-accentClr hover:bg-opacity-5 w-full min-w-[500px] min-h-32 pb-2 pt-3 my-4  flex rounded-lg cursor-pointer">
      <div className="pr-6 pl-6  text-backGroundClr">
        <div className="w-16 h-16 object-fill rounded-full  bg-accentClr p-[15px] flex  justify-center">
          <div className="text-2xl">{email?.from?.name?.substring(0, 1)}</div>
        </div>
      </div>

      <div className="p-3">
        <h3>
          From : <span className="pr-1 font-bold">{email?.from?.email}</span>
        </h3>
        <h3 className="pb-3">
          Subject : <span className="pr-1 font-bold">{subject}</span>{" "}
        </h3>

        <p className=" line__clamp">{short_description}</p>
        <div className="pt-2">
          <span className="pr-7">{date}</span>{" "}
          <span className="text-accentClr">Favorite</span>
        </div>
      </div>
    </div>
  );
};

export default EmailTab;
