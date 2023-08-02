import RootLayout from "@/components/Layouts/RootLayout";
import MonitorCategory from "@/components/UI/MonitorCate";

const MonitorPage = ({ monitors }) => {
  return (
    <div>
      <MonitorCategory monitors={monitors} />
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/monitors");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      monitors: data,
    },
    revalidate: 5,
  };
};
