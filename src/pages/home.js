import Form from "../components/form";
import Header from "../components/header";
import ListOfCharacters from "../components/listOfCharacters";
import Reset from "../components/reset";

export function Home() {
  return (
    <>
      <Header />
      <div className="container-detail">
        <Form />
        {/* <Reset /> */}
      </div>
      <ListOfCharacters />
    </>
  );
}
