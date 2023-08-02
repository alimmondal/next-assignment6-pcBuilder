import RootLayout from "@/components/Layouts/RootLayout";
import FeatureProduct from "@/components/UI/FeatureProducts";

const PcBuilder = ({ featureProducts }) => {
  return (
    <div>
      This is PC builder
      <FeatureProduct
        featureProducts={featureProducts}
        key={featureProducts.id}
      />
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featured");
  // const data = await res.json();
  console.log(data);
  return {
    props: {
      featureProducts: data,
    },
    revalidate: 5,
  };
};
