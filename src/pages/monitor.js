import RootLayout from "@/components/Layouts/RootLayout";
import MonitorCategory from "@/components/UI/featuredCategory/MonitorCate";

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

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/featuredCategory/monitor");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      monitors: data.data,
    },
    // revalidate: 5,
  };
};
