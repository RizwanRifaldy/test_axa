import { React, useState, useEffect } from "react";
import { GetDataUsers } from "../../../Services/GetData";
import CardUser from "../../../Component/CardUser/CardUser";

const ListUser = () => {
  const [Data, SetData] = useState(null);

  async function LoadData() {
    const result = await GetDataUsers();
    SetData(result);
  }
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="wrap">
      <h3 className="title">List Users</h3>
      {Data && (
        <>
          {Data.map((item, i) => (
            <div key={i}>
              <CardUser data={item} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListUser;
