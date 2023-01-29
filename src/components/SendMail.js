import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../app/features/messageSlice";
import { db } from "../firebase";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData, e) => {
    await addDoc(collection(db, "message"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timeStamp: serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();
  const closeBtnHandler = () => {
    dispatch(closeSendMessage());
  };

  return (
    <div
      className="w-[500px]  z-50  fixed bottom-5  
       right-10 border-2 border-slate-800 dark:border-slate-300 rounded-xl
"
    >
      <div
        className="flex items-center justify-between p-2 rounded-t-lg  bg-purple-200 text-gray-800 dark:bg-purple-300 dark:text-black
      "
      >
        <h3>New Message</h3>
        <button onClick={closeBtnHandler}>
          <GrClose />
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
                class="p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
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
                class="p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                Subject is required
              </div>
            )}
          </p>
        }
        <input
          // name="message"
          className="h-64 dark:bg-gray-600 dark:text-gray-100"
          placeholder="Message..."
          type="text"
          {...register("message", { required: true })}
        />{" "}
        {
          <p>
            {errors.message && (
              <div
                class="p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
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
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
