import Form from "../components/form";
import Header from "../components/header";
import ListOfCharacters from "../components/listOfCharacters";
import styles from "../styles/Detail.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.detail__container}>
        <Form />
      </div>
      <ListOfCharacters />
    </>
  );
}
