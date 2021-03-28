import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaShoppingCart } from "react-icons/fa";

import products from "../products.json";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/use-cart";

export default function Home() {
  const { totalItems, subtotal, checkout, addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Yoplet | Bring happiness to your loved ones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Yoplet</h1> */}

        <p className={styles.description}>
          The place you look for to gift your loved ones some lovely smiles :)
        </p>

        {/* <ul className={styles.cart}>
          <li>
            <strong>Items:</strong> {totalItems}
          </li>
          <li>
            <strong>Total:</strong> ${subtotal}
          </li>
          <li>
            <button
              className={`${styles.button} ${styles.cartButton}`}
              onClick={checkout}
            >
              <FaShoppingCart />
              Check Out
            </button>
          </li>
        </ul> */}

        <ul className={styles.grid}>
          {products.map(({ title, description, image, price, id }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              image={image}
              addToCart={addToCart}
            />
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
