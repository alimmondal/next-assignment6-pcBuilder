import RootLayout from "@/components/Layouts/RootLayout";

const PowerSupplyCatPage = () => {
  return (
    <div>
      <h1>PowerSupplyCatPage</h1>
    </div>
  );
};

export default PowerSupplyCatPage;

PowerSupplyCatPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
