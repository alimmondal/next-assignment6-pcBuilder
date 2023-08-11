// import RootLayout from "@/components/Layouts/RootLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import FeatureProduct from "@/components/UI/FeatureProducts";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Head from "next/head";

const HomePage = ({ featureProducts }) => {
  // const { data, isLoading, isError, error } = useGetNewsesQuery();
  // const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
  //   loading: () => <h1>Loading...</h1>,
  //   ssr: false,
  // });
  // console.log(data);
  return (
    <>
      <Head>
        <title>SUN-TECH PC BUILDER</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <FeatureProduct
        featureProducts={featureProducts}
        key={featureProducts.id}
      />
      <div className="">
        <FeaturedCategory />
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://nextpcbuilder-server-production.up.railway.app/featured-pc"
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      featureProducts: data.data,
    },
    // revalidate: 5,
  };
};
