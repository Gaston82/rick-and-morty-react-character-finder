import notFoundImage from "../assets/images/not-found-rick-and-morty.jpg";
export default function NotFound() {
  return (
    <>
      <div className="container">
        <img className="not-found-image" src={notFoundImage} alt="" />
      </div>
    </>
  );
}
