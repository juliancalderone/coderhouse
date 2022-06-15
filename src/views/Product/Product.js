import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

export default function Product() {
  const { productId } = useParams();
  return <ItemDetailContainer productId={productId} />;
}
