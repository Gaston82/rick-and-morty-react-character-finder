import Header from "../components/header";
import ListOfCharacters from "../components/listOfCharacters";

export function Home() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <ListOfCharacters />
    </>
  );
}
