import { useParams, useOutletContext } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useOutletContext();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Produk tidak ditemukan</h1>
  }
  
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.stok}</p>
      <p>{product.stok > 0 ? "Tersedia" : "Habis"}</p>
    </>
  );
}

export default ProductDetail;
