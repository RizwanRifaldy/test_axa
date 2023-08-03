import React from "react";
import css from "./CardUser.module.scss";
import { useNavigate } from "react-router-dom";

const CardUser = (props) => {
  const navigate = useNavigate();
  function DetailUser(id, name) {
    navigate("/users/" + id + "/" + name);
  }
  return (
    <div>
      <div
        className={css.card}
        onClick={() => DetailUser(props.data.id, props.data.name)}
      >
        <b>{props.data.name}</b> <br />
        <small>
          @{props.data.username} | {props.data.website}
        </small>
      </div>
    </div>
  );
};

export default CardUser;
