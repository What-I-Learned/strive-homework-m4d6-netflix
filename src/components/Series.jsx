import MovieSegment from "./MovieSegment";

const Series = ({ location, history, match, series }) => {
  const type = `&type=${{ type }}`;
  return <MovieSegment title={"Lost"} name={"lost"} type={type} />;
};
export default Series;
