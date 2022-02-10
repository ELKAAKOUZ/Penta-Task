import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Secondheader from "../components/Secondheader";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>KNO SHOP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* header */}
        <Header />
        {/* Second header */}
        <Secondheader />
        {/* Banner */}
        <Banner />
        {/* Products  */}
        <ProductFeed products={props.products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products");
  const data = await products.json();
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
}
