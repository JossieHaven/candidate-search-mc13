import { searchGithub } from "../api/API";
import Candidate from "../interfaces/Candidate.interface";

const formatCandidates = async () => {
  try {
    const rawData = await searchGithub(); //Fetch raw GitHub data from API

    // Format the raw data into the Candidate interface. log error if any
    const formattedCandidates: Candidate[] = rawData.map((user: any) => ({
      login: user.login,
      name: user.name || null,
      location: user.location || null,
      avatar_url: user.avatar_url,
      email: user.email || null,
      html_url: user.html_url,
      company: user.company || null,
    }));
    return formattedCandidates;
  } catch (error) {
    console.error("Error formatting candidates:", error);
    return [];
  }
};
export default formatCandidates;