import React, { useState, useEffect } from "react";
import linkedin from "../../assets/linkedin.png";
import ModalComponent from "../modal/ModalComponent";
import { getStatus, posts } from "../../api/FirestoreApi";
import RegisterComponent from "../RegisterComponent";

const App = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  console.log(allStatus);

  // Function to send status to Firestore
  const sendStatus = () => {
    if (status.trim()) {
      console.log("Sent status:", status);
      posts(status); // Call the API to post data
      setStatus(""); // Clear the input field
      setModalOpen(false); // Close the modal
    }
  };

  // Fetch and subscribe to Firestore data
  useEffect(() => {
    const unsubscribe = getStatus(setAllStatus); // Subscribe to Firestore updates
    return () => unsubscribe && unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <>
        {user ? <div>
        <div className="flex justify-center items-center gap-4 h-[80px] border px-2 py-4 mx-4">
          <img src={linkedin} alt="LinkedIn" className="w-[35px]" />
          <button
            className="w-full rounded-3xl border text-black px-4 py-2"
            onClick={() => setModalOpen(true)}
          >
            Start a post
          </button>
        </div>
        <ModalComponent
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          setStatus={setStatus}
          sendStatus={sendStatus}
        />
        {/* Render the list of posts */}
        <div className="px-4">
          {allStatus.map((post) => (
            <div key={post.id} className="border p-8 my-2 ">
              <p>{post.status}</p>
              <small>
                {new Date(post.createdAt.seconds * 1000).toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      </div>
:<RegisterComponent/>
        }
    </>
  );
};

export default App;
