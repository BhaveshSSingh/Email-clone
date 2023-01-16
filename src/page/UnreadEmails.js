import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import EmailTab from "../components/EmailTab";

const UnreadEmails = () => {
  //   const [splitScreen, setSplitScreen] = useState("");

  //   const emailClickHandler = () => {
  //     setSplitScreen("flex");
  //   };
  //   const unReadEmails = useSelector((store) => store.filter);
  //   console.log();

  //   return (
  //     <div className={`${splitScreen}`}>
  //       <Link to="/email:id">
  //         {unReadEmails.map((email) => (
  //           <div onClick={emailClickHandler}>
  //             <EmailTab email={email} key={email.id} />
  //           </div>
  //         ))}
  //       </Link>

  //       <Outlet />
  //     </div>
  //   );
  <>Figure out to how to not add dupe in store and then i will get this</>;
};

export default UnreadEmails;
