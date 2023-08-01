import RootLayout from "@/components/Layouts/RootLayout";

const RamCategoryPage = () => {
  return (
    <div>
      <h1>THis is ram RamCategoryPage</h1>
    </div>
  );
};

export default RamCategoryPage;

RamCategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
