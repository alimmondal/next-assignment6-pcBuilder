import RootLayout from "@/components/Layouts/RootLayout";

const MonitorPage = () => {
  return (
    <div>
      <h1>This is monitor Category</h1>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
