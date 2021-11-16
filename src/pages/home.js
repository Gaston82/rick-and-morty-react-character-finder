import Form from "../components/form";
import Header from "../components/header";
import ListOfCharacters from "../components/listOfCharacters";
import Reset from "../components/reset";
import styles from "../styles/Detail.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.detail__container}>
        <Form />
        <Reset />
      </div>
      <ListOfCharacters />
    </>
  );
}
