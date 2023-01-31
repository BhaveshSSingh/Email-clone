import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Panel from "./components/Panel";
import Login from "./page/Login";
import SendMail from "./components/SendMail";
import { auth } from "./firebase";
import { loginReducer } from "./app/features/userSlice";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/inbox");
  }, []);

  const messageOpen = useSelector((store) => store.message.sendMessageIsOpen);

  const user = useSelector((store) => store.user.user);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginReducer({
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="bg-gray-100 text-black dark:bg-gray-800 dark:text-gray-100 h-full  min-h-screen">
          <Nav />
          <div className="flex">
            <Panel />

            <div className="p-2">
              <Outlet />
            </div>
          </div>
          {messageOpen && <SendMail />}
        </div>
      )}
    </>
  );
};

export default App;
