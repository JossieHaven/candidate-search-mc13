import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [likedCandidates, setLikedCandidates] = useState<Candidate[]>([]); // store liked candidates

  useEffect(() => {
    // get liked candidates from localStorage, parse Json and set state
    const storedLikes = JSON.parse(
      localStorage.getItem("likedCandidates") || "[]"
    );
    setLikedCandidates(storedLikes);
  }, []);

  // Function to remove a candidate from the list and filter out the removed candidate
  const handleReject = (index: number) => {
    const updatedCandidates = likedCandidates.filter((_, i) => i !== index);

    // Update state and save the updated list to localStorage
    setLikedCandidates(updatedCandidates);
    localStorage.setItem("likedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <div>
        <h1>Liked Candidates</h1>
        {likedCandidates.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {likedCandidates.map((candidate, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={candidate.avatar_url}
                      alt={candidate.login}
                      width="50"
                      height="50"
                      style={{ borderRadius: "50%" }}
                    />
                  </td>
                  <td>
                    <a
                      href={candidate.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {candidate.name
                        ? `${candidate.login} (${candidate.name})`
                        : candidate.login}
                    </a>
                  </td>
                  <td>{candidate.location || "Unavailable"}</td>
                  <td>{candidate.email || "Unavailable"}</td>
                  <td>{candidate.company || "Unavailable"}</td>
                  <td>
                    <button onClick={() => handleReject(index)}>
                      Remove ❎
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No liked candidates yet.</p>
        )}
      </div>
    </>
  );
};

export default SavedCandidates;