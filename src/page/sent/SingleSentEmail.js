import { BiArrowBack } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmerbody from "../../components/loading/Shimmerbody";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import { MdClose } from "react-icons/md";

const SingleSentEmail = () => {
  const emailData = useSelector((store) => store.message.selectedMessage);
  const navigate = useNavigate();

  const deleteEmail = async () => {
    await deleteDoc(doc(db, "message", emailData.emailId));
    console.log("delete clicked");
    toast("Comment Deleted 🗑️");
    navigate("/sent");
  };

  const [showModal, setShowModal] = useState(false);
  const [editMessage, setEditMessage] = useState(emailData?.short_description);
  const updateEmail = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "message", emailData.emailId), {
      short_description: editMessage,
    });
    toast("Email Edited 💬");
    setShowModal(false);
    navigate("/sent");
  };

  return (
    <>
      <div className="border  border-purple-300 rounded-lg p-2 flex justify-between w-[88vw]">
        <Link to="/sent">
          <button
            type="button"
            className="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800"
          >
            <BiArrowBack />
          </button>
        </Link>
        <div>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            <BsFillPencilFill />
          </button>{" "}
          <button
            type="button"
            className="text-red-700 ml-3 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
            onClick={deleteEmail}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>{" "}
      <div className="border mt-4  p-9 border-purple-300 rounded-lg  flex ">
        <div className="pr-6 pl-9 text-gray-100 ">
          <div className="w-16 h-16 object-fill rounded-full  bg-purple-500 p-[15px] flex  justify-center">
            <div className="text-2xl">{emailData?.to?.substring(0, 1)}</div>
          </div>
        </div>
        <div className="flex flex-col pt-3 ">
          <div className="flex justify-between">
            <div className="pr-1 font-bold text-3xl text-black dark:text-gray-400">
              {emailData?.subject}
            </div>
          </div>

          <span className="py-4">
            <div>{new Date(emailData?.date?.seconds * 1000).toUTCString()}</div>
          </span>
          <div className="pb-16">
            {!emailData?.short_description ? (
              <Shimmerbody />
            ) : (
              emailData?.short_description
            )}
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="p-2 ">
          <div className="flex justify-between	 items-center border-b border-gray-700">
            Edit Email
            <div className="icon group">
              <MdClose size={28} onClick={() => setShowModal(false)} />
            </div>
          </div>
          <div className="pt-4 flex justify-between">
            <div className="pt-4">
              <input
                className="bg-transparent outline-none text-lg 
             placeholder-gray-500 w-full"
                type="text"
                autoFocus
                value={editMessage}
                onChange={(e) => setEditMessage(e.target.value)}
              />
            </div>
            <button
              className="cursor-pointer   bg-[#7856ff] text-white rounded-full px-3 py-1 font-normal shadow-md hover:bg-[#ab97fb] disabled:hover:bg-[#7856ff] disabled:opacity-50 disabled:cursor-default "
              disabled={!editMessage.trim()}
              onClick={updateEmail}
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SingleSentEmail;
