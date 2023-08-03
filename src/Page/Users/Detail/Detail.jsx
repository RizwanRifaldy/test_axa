import { React, useState, useEffect } from "react";
import { GetPostDataUsers } from "../../../Services/GetData";
import CardUser from "../../../Component/CardUser/CardUser";
import { useParams } from "react-router-dom";
import PostedData from "../../../Component/PostedData/PostedData";
import { useNavigate } from "react-router-dom";
import { AddPost } from "../../../Services/SaveData";
import { DeleteData } from "../../../Services/DeleteData";

const Detail = () => {
  const { id_user, name } = useParams();
  const navigate = useNavigate();

  function changePage(id, name) {
    navigate("/album/" + id + "/" + name);
  }
  function Add() {
    const data = AddPost();
    alert('add data berhasil')
  }
  const [Data, SetData] = useState(null);

  async function LoadData() {
    const result = await GetPostDataUsers(id_user);
    SetData(result);
  }
  function DoDelete(id){
    // DeleteData(id)
    alert('Delete berhasil')
  }
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="wrap">
      <div className="menu">
        <ul>
          <li className="active_menu">Post</li>
          <li onClick={() => changePage(id_user, name)}>Album</li>
        </ul>
      </div>
      <h3>Make a Post</h3>
      <div className="wrap_form">
        <textarea></textarea>
        <button className="button_primary" onClick={() => Add()}>
          Send Post
        </button>
      </div>
      <h3>Post by {name}</h3>
      {Data && (
        <>
          {Data.map((item, i) => (
            <div key={i}>
              <PostedData data={item} delete = {DoDelete}/>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Detail;
