import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  closeSendMessage,
  numberOfSentMessages,
} from "../app/features/messageSlice";
import { db } from "../firebase";
import { toast } from "react-toastify";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData, e) => {
    await addDoc(collection(db, "message"), {
      to: formData.to,
      subject: formData.subject,
      short_description: formData.message,
      date: serverTimestamp(),
    });

    toast("Email Sent");
    dispatch(closeSendMessage());
    dispatch(numberOfSentMessages());
  };

  const dispatch = useDispatch();
  const closeBtnHandler = () => {
    dispatch(closeSendMessage());
  };

  return (
    <div className="w-[500px]  z-50  fixed bottom-5 right-10 border-2 border-slate-800 dark:border-slate-300 rounded-xl">
      <div className="flex items-center justify-between p-2 rounded-t-lg  bg-purple-200 text-gray-800 dark:bg-purple-300 dark:text-black">
        <h3>New Message</h3>
        <button
          type="button"
          onClick={closeBtnHandler}
          className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
        >
          <MdClose />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-gray-800  "
      >
        <input
          {...register("to", { required: true })}
          type="email"
          placeholder="To"
          className="p-2  dark:bg-gray-600 dark:text-gray-100  border-b dark:border-slate-800 border-slate-300"
        />
        {
          <p>
            {errors.to && (
              <div
                className="p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                To is required
              </div>
            )}
          </p>
        }
        <input
          className="p-2 dark:bg-gray-600 dark:text-gray-100 border-b dark:border-slate-800 border-slate-300"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {
          <p>
            {errors.subject && (
              <div
                className="p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                Subject is required
              </div>
            )}
          </p>
        }
        <textarea
          className="p-2 h-64 dark:bg-gray-600 dark:text-gray-100"
          placeholder="Message..."
          type="text"
          {...register("message", { required: true })}
        />{" "}
        {
          <p>
            {errors.message && (
              <div
                className="p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                Message is required
              </div>
            )}
          </p>
        }
        <div
          className="bg-purple-200 dark:bg-purple-300 dark:text-gray-100 
        p-2 rounded-b-lg"
        >
          <button
            onClick={onSubmit()}
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
          >
            Send <AiOutlineSend className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
