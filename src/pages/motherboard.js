import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const MotherboardCatPage = () => {
  return (
    <div>
      <h1>MotherboardCatPage</h1>
    </div>
  );
};

export default MotherboardCatPage;

MotherboardCatPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
