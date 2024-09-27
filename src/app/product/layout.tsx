import DefaultHeader from "@/components/common/header/DefaultHeader";
import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DefaultHeader />
      {children}
    </div>
  );
};

export default ProductLayout;
