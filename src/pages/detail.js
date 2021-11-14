import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Character from "../components/character";
import Header from "../components/header";
import useCharacter from "../hooks/useCharacter";

export function Detail() {
  let { id } = useParams();
  const { character } = useCharacter(id);

  return (
    <>
      <Header />
      <div className="container-detail">
        <Character {...character} />
        <Link to={"/"}>
          <p>Go Back to the list</p>
        </Link>
      </div>
    </>
  );
}
