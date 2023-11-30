import * as React from "react";
import * as Types from "./types";

declare function NewProductComponent(props: {
  as?: React.ElementType;
  product?: React.ReactNode;
  productDescription?: React.ReactNode;
  newProductImage?: Types.Asset.Image;
}): React.JSX.Element;
