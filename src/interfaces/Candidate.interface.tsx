//  TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string; 
    name: string | null; 
    location: string | null; 
    avatar_url: string;
    email: string | null;
    html_url: string;
    company: string | null;
  }
  
  export default Candidate;