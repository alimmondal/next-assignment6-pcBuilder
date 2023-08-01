import RootLayout from "@/components/Layouts/RootLayout";

const ProcessorCatPage = () => {
  return (
    <div>
      <h1>ProcessorCatPage</h1>
    </div>
  );
};

export default ProcessorCatPage;

ProcessorCatPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
