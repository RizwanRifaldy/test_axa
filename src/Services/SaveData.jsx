import instance from "../Axios/Default";

export const AddPost = async (payload) => {
  const promise = await instance
    .post("/posts", {
      params: {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      },
    })
    .then((response) => response.data);
  return promise;
};
