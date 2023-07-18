import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./modal/modal";
import LoadingSpinner from "./Loading/LoadingSpinner";
function App() {
  const [isLoading, SetIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    SetIsLoading(true);
    setTimeout(() => {
      SetIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {!openModal && (
            <button
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              open Modal
            </button>
          )}
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      )}
    </div>
  );
}

export default App;
