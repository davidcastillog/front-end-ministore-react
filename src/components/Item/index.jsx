function Item({ product, ...props }) {
  return (
    <div>
      <img src={product.imgUrl} alt={product.model} />
      <p>{product.brand}</p>
      <p>{product.model}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Item;
