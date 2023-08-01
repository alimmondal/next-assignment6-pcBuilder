import RootLayout from "@/components/Layouts/RootLayout";

const CpuCoolerCatPage = () => {
  return (
    <div>
      <h1>PowerSupplyCatPage</h1>
    </div>
  );
};

export default CpuCoolerCatPage;

CpuCoolerCatPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
