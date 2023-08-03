import { React, useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GetPhotoByAlbum } from "../../../Services/GetData";

const ListPhoto = () => {
  const { id_album } = useParams();
  const [Data, SetData] = useState(null);

  async function LoadData() {
    const result = await GetPhotoByAlbum(id_album);
    SetData(result);
  }

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="wrap">
      <div className="menu">
        <b className="title">List Photo</b> <br />
        {Data && (
          <>
            {Data.map((item, i) => (
              <NavLink to={"/photo/" + btoa(item.title) + "/" + btoa(item.url) } key={i}>
                <div className="list_photo">
                  <img src={item.thumbnailUrl} />
                </div>
              </NavLink>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListPhoto;
