import instance from "../Axios/Default";

export const DeleteData = async (payload) => {
  const promise = await instance
    .delete("/post/" + payload, {})
    .then((response) => response.data);
  return promise;
};