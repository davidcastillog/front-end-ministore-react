import Typography from "@mui/material/Typography";

const Description = ({ product }) => {
  return (
    <>
      <Typography inline-block variant="subtitle2" gutterBottom>
        Brand:&nbsp;
        <Typography style={{ display: "inline-block" }} variant="body2">
          {product.brand}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Model:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.model}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Price:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          €{product.price}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        CPU:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.cpu}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        RAM:
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.ram}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        OS:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.os}
        </Typography>
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Display Resolution:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.displayResolution}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Battery:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.battery}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Primary Camera:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.primaryCamera
            ? product.primaryCamera["0"]
            : product.primaryCamera}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Secondary Camera:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.primaryCamera
            ? product.secondaryCmera["0"]
            : product.secondaryCmera}
        </Typography>
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Dimetions:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.dimentions}
        </Typography>
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Weight:&nbsp;
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          gutterBottom
        >
          {product.weight} grms
        </Typography>
      </Typography>
    </>
  );
};

export default Description;
