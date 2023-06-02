import { useContext, useState } from "react";
import UserContext from "../../context/user.context";

const Modal = () => {
  const [{ isOpenModal, dataModal: user }, dispatch] = useContext(UserContext);
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "red",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
      }}
    >
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "CHANGE_USER",
              payload: {
                id: user.id,
              },
            });
          }}
        >
          luu
        </button>
        <button
          onClick={() => {
            dispatch({ type: "HIDE_MODAL" });
          }}
        >
          tat modal
        </button>
      </div>
    </div>
  );
};
export default Modal;
