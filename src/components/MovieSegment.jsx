import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, Button } from "react-bootstrap";

class MovieSegment extends React.Component {
  state = {
    movies: [],
    selected: {
      isSelected: false,
      movieId: "",
      moviePoster: "",
    },
  };

  fetchMovies = async (movies) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=131a9fa6&s=${movies}`
      );
      if (response.ok) {
        let movieData = await response.json();
        this.setState({
          movies: movieData.Search,
        });
      } else {
        alert("movies were not loaded");
      }
    } catch (error) {
      alert(error);
    }
  };
  clickHandler = (e, movieid, moviePoster) => {
    // console.log(e.target.parentNode.parentNode);
    // e.target.parentNode.parentNode.classList.add("active-movie");
    this.setState({
      selected: {
        ...this.state.selected,
        isSelected: !this.state.selected.selected,
        movieId: movieid,
        moviePoster: moviePoster,
      },
    });
    // console.log(this.state.selected);
  };
  componentDidMount = () => {
    let query = this.props.name.toLowerCase().split(" ").join("+");
    console.log(query);
    this.fetchMovies(query);
  };

  render() {
    return (
      <>
        <Container fluid className="container-movie">
          <div
            className="single-movie-container"
            style={{
              display:
                this.state.selected.isSelected == true ? "block" : "none",
              backgroundSize: "cover",
              backgroundImage: `linear-gradient(
                270deg,
                rgba(164, 164, 164, 0.13) 0%,
                rgba(0, 0, 0, 0.8883928571428571) 50%,
                rgba(0, 0, 0, 1) 65%
              ),
              url(${this.state.selected.moviePoster})`,
            }}
            onClick={() => this.setState({ selected: { isSelected: false } })}
          ></div>
          <h2 className="movie-segment-title">{this.props.name}</h2>
          <Splide
            options={{
              type: "loop",
              rewind: true,
              width: "100%",
              gap: "0.3rem",
              perPage: 6,
              perMove: 1,
              breakpoints: {
                640: {
                  perPage: 1,
                },
                800: {
                  perPage: 2,
                },
              },
              padding: {
                right: "5rem",
                left: "5rem",
              },
              pagination: false,
              classes: {
                arrow: "splide__arrow movie-segment-arrow",
              },
            }}
          >
            {this.state.movies.map((movie) => (
              <SplideSlide className="single-movie-slide" key={movie.imdbID}>
                <div className="single-movie-item">
                  <div className="movie-cover">
                    <img src={movie.Poster} alt="Image 1" />
                  </div>
                  <div className="single-movie-body">
                    <h4>{movie.Title}</h4>
                    <small>{movie.Year}</small>
                    <Button
                      className="movie-details-btn"
                      onClick={(e) =>
                        this.clickHandler(e, movie.imdbID, movie.Poster)
                      }
                    >
                      Check details!
                    </Button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </Container>
      </>
    );
  }
}

export default MovieSegment;

{
  /* <div className="single-movie-item">
            <img
              src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfHVUAAEhu-G5QHH31CutuqX0wBfTK4nzyJXSyUkXm13Stw-yFpmeMzfTkBcmlsWu_CHM-JNr2d2sjncwPLkqG968JMe.jpg?r=321"
              alt="Image 1"
            />
          </div> */
}
