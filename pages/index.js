import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        {/* <Navbar /> */}
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, animi
          quia. Culpa iure aspernatur doloremque cupiditate molestiae quas
          maxime, dolore tenetur mollitia quaerat quos et provident consequatur
          atque aliquid a?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, animi
          quia. Culpa iure aspernatur doloremque cupiditate molestiae quas
          maxime, dolore tenetur mollitia quaerat quos et provident consequatur
          atque aliquid a?
        </p>
        <Link href="./ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        <br />
        <br />
        <br />
        {/* <Footer /> */}
      </div>
    </>
  );
}
