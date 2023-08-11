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
  const res = await fetch(
    "https://nextpcbuilder-server-production.up.railway.app/monitor"
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      monitors: data.data,
    },
    // revalidate: 5,
  };
};
