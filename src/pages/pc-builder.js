import RootLayout from "@/components/Layouts/RootLayout";

const PcBuilder = () => {
  return <div>This is PC builder</div>;
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
