// import RootLayout from "@/components/Layouts/RootLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import AllNews from "@/components/UI/AllNews";
import Banner from "@/components/UI/Banner";
import Featured from "@/components/UI/Featured";
import Head from "next/head";

const HomePage = ({ allNews }) => {
  // const { data, isLoading, isError, error } = useGetNewsesQuery();
  // const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
  //   loading: () => <h1>Loading...</h1>,
  //   ssr: false,
  // });
  // console.log(data);
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllNews allNews={allNews} />
      <div className="">
        <Featured />
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news");
  const res = await fetch("http://localhost:5000/featured");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allNews: data,
    },
    revalidate: 10,
  };
};
