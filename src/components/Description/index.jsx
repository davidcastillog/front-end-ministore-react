const Description = ({ product }) => {
  return (
    <>
      <p>{product.brand}</p>
      <p>{product.model}</p>
      <p>{product.price}</p>
      <p>{product.cpu}</p>
      <p>{product.ram}</p>
      <p>{product.os}</p>
      <p>{product.displayResolution}</p>
      <p>{product.battery}</p>
      <p>
        {product.primaryCamera
          ? product.primaryCamera["0"]
          : product.primaryCamera}
      </p>
      <p>
        {product.primaryCamera
          ? product.secondaryCmera["0"]
          : product.secondaryCmera}
      </p>
      <p>{product.secondaryCmera}</p>
      <p>{product.dimentions}</p>
      <p>{product.weight}</p>
    </>
  );
};

export default Description;
