export const getEmailList = async (setEmailList) => {
  const data = await fetch(" https://flipkart-email-mock.now.sh/").then((res) =>
    res.json()
  );
  setEmailList(data.list);
  console.log();
};

// export const getEmailBody = async () => {
//     const data = await fetch(" https://flipkart-email-mock.now.sh/").then(
//       (res) => res.json()
//     );
//     setEmailList(data.list);
// }

export const getEmailBody = async (setEmailBody, id) => {
  const data = await fetch(
    `https://flipkart-email-mock.vercel.app/?id=${id}`
  ).then((res) => res.json());
  setEmailBody(data.body);
  console.log(data);
};
