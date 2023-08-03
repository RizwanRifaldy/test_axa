import instance from "../Axios/Default";

export const GetDataUsers = async (payload) => {
  const promise = await instance
    .get("/users", { params: payload })
    .then((response) => response.data);
  return promise;
};

export const GetPostDataUsers = async (payload) => {
  const promise = await instance
    .get("/users/" + payload + "/posts", {})
    .then((response) => response.data);
  return promise;
};

export const GetPostDataComment = async (payload) => {
  const promise = await instance
    .get("/posts/" + payload + "/comments", {})
    .then((response) => response.data);
  return promise;
};

export const GetAlbumByUser = async (payload) => {
  const promise = await instance
    .get("/users/" + payload + "/albums", {})
    .then((response) => response.data);
  return promise;
};


export const GetPhotoByAlbum = async (payload) => {
  const promise = await instance
    .get("/albums/" + payload + "/photos", {})
    .then((response) => response.data);
  return promise;
};
