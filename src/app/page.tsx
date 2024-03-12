"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { books } from "@/lib/mockData"
import { motion } from "framer-motion";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />

        <div className="container">
          <section className="content">
            <SideBar />
          </section>

          <div>
            <h1>ALL BOOKS</h1>
            <ul>
              {
                books.map((book, i) => (
                  <motion.li key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', damping: 50, mass: 0.75 }}
                    initial={{opacity:0, x:200*(i+1)}}
                    animate={{opacity:1, x:0}}
                    key={i}
                  >
                    <Link href={"/book/" + book.id}>
                      <p>{book.title}</p>
                    </Link>
                  </motion.li>
                ))
              }
            </ul>
          </div>

        </div>


      </div>
    </main>
  );
}
