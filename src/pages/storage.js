import RootLayout from "@/components/Layouts/RootLayout";

const StorageDevicePage = () => {
  return (
    <div>
      <h1>StorageDevicePage</h1>
    </div>
  );
};

export default StorageDevicePage;

StorageDevicePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
