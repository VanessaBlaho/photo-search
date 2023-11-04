import "./App.scss";
import SearchParent from "./SearchParent";

export default function Homepage() {
  return (
    <>
      <h1 className="homepage_headline">
        Photo Search
      </h1>
      <SearchParent />
    </>
  );
}
