export const getEmailList = async (setEmailList) => {
  const data = await fetch(" https://flipkart-email-mock.now.sh/").then((res) =>
    res.json()
  );
  setEmailList(data.list);
};
