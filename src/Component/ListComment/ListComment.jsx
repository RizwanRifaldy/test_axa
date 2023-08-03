import { React, useState, useEffect } from "react";
import css from "./ListComment.module.scss";
import { GetPostDataComment } from "../../Services/GetData";
const ListComment = (props) => {
  const [Data, SetData] = useState(null);
  async function LoadData() {
    const result = await GetPostDataComment(props.id);
    SetData(result);
  }
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div>
      {Data && (
        <>
          {Data.map((item, i) => (
            <div key={i}>
              <div className={css.wrap}>
                <b>{item.email}</b> <br />
                <label>{item.body}</label>
                <div>Delete | Edit</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListComment;
