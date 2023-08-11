import RootLayout from "@/components/Layouts/RootLayout";
import ProcessorCategory from "@/components/UI/featuredCategory/Processor";

const ProcessorCatPage = ({ processor }) => {
  return (
    <div>
      <ProcessorCategory processor={processor} />
    </div>
  );
};

export default ProcessorCatPage;

ProcessorCatPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://nextpcbuilder-server-production.up.railway.app/processor"
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      processor: data.data,
    },
    // revalidate: 5,
  };
};
