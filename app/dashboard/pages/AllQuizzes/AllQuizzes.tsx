import QuizzesArea from "./_components/QuizzesArea";
import FilterAndSearch from "./_components/FilterAndSearch";

export default function AllQuizzes() {
  return (
    <div className="poppins">
      <FilterAndSearch />
      <QuizzesArea />
    </div>
  );
}
