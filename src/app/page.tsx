import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />

        <div className="container">
          <section className="content">
            <SideBar />
          </section>
        </div>


      </div>
    </main>
  );
}
