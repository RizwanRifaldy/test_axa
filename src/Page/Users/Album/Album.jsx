import { React, useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GetAlbumByUser } from "../../../Services/GetData";

const Album = () => {
  const { id_user, name } = useParams();
  const navigate = useNavigate();

  function changePage(id, name) {
    navigate("/users/" + id + "/" + name);
  }

  const [Data, SetData] = useState(null);

  async function LoadData() {
    const result = await GetAlbumByUser(id_user);
    SetData(result);
  }

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="wrap">
      <div className="menu">
        <ul>
          <li onClick={() => changePage(id_user, name)}>Post</li>
          <li className="active_menu">Album</li>
        </ul>
        <b>List Album {name}</b>
        {Data && (
          <>
            {Data.map((item, i) => (
              <NavLink to={"/list-photo/" + item.id} key={i}>
                <div className="list_album">
                  {i + 1}. {item.title}
                </div>
              </NavLink>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Album;
