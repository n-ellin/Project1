function ProductList({ list }) {
    function getStatus (stok) {
        if (stok > 0 ) {
            return "Tersedia";
        }   
        else {
            return "Habis";
        }
        
    }
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
              <td>{getStatus(product.stok)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
