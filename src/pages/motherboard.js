import RootLayout from "@/components/Layouts/RootLayout";
import MotherboardCategory from "@/components/UI/featuredCategory/MotherboardCat";

const MotherboardCatPage = ({ motherboard }) => {
  return (
    <div>
      <MotherboardCategory motherboard={motherboard} />
    </div>
  );
};

export default MotherboardCatPage;

MotherboardCatPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/featuredCategory/motherboard"
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      motherboard: data.data,
    },
    // revalidate: 5,
  };
};
