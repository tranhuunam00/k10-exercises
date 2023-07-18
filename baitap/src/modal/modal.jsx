import React from "react";
import "./style.scss";
function modal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modalBackground">
        <div className="modal_Image">
          <img
            src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-co-gai-cute-anime-8-min-4.jpg"
            alt="fail"
            width={280}
          />
        </div>
        <dir className="modalContainer">
          <div className="title">
            <h1>Thông Báo!</h1>
          </div>
          <div className="body">
            <p>Bạn có chắc là.....!</p>
          </div>
          <div className="footer">
            <button className="btnYes">YES</button>
            <button className="btnNo" onClick={() => closeModal(false)}>
              NO
            </button>
          </div>
        </dir>
      </div>
    </div>
  );
}

export default modal;
