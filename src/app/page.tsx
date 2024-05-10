import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./Navigation/Navigation";
import Loginform from "./Loginform/Loginform";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header/>
      <Navigation/> */}
      <Loginform />
      <Navigation />
    </main>
  );
}
