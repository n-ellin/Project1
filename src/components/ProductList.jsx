function ProductList({ list }) {
  return (
    <>
      <table className="">
        <thead>
          <th>No</th>
          <th>Nama</th>
          <th>Harga</th>
          <th>Stok</th>
          <th>Status</th>
        </thead>
        <tbody>
          {list.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stok}</td>
              <td>{product.stok > 0 ? "Tersedia" : "Habis"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
