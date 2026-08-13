function ProductList({ list }) {
  return (
    <>
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Harga</th>
            <th scope="col">Stok</th>
            <th scope="col">Status</th>
          </tr>
        </thead>

        <tbody>
          {list.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stok}</td>
              <td>
                {product.stok > 0 ? "Tersedia" : "Habis"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;

