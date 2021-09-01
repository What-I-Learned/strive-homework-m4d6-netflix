import MovieSegment from "./MovieSegment";

const Home = ({ location, history, match }) => {
  return (
    <>
      <main>
        <MovieSegment title={"horror"} name={"horror"} />
        <MovieSegment title={"adventure"} name={"adventure"} />
        <MovieSegment title={"comedy"} name={"comedy"} />
        <MovieSegment title={"harry potter"} name={"harry potter"} />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
