import { useState, useEffect } from "react";

const ShowDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${match.params.ID}&apikey=89bb5edc`
      );
      if (response.ok) {
        let data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } else {
        alert("problem");
      }
    };
    fetchMovieDetails();
  }, []);
  return <>{movieDetails && <h1>{movieDetails.Title}</h1>}</>;
};

export default ShowDetails;
