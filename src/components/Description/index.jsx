import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Description = ({ product }) => {
  return (
    <Grid>
      <Typography variant="subtitle2" gutterBottom>
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
      {product.price && (
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
      )}
      {product.cpu && (
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
      )}
      {product.ram && (
        <Typography variant="subtitle2" gutterBottom>
          RAM:&nbsp;
          <Typography
            style={{ display: "inline-block" }}
            variant="body2"
            gutterBottom
          >
            {product.ram}
          </Typography>
        </Typography>
      )}
      {product.os && (
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
      )}
      {product.displayResolution && (
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
      )}
      {product.battery && (
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
      )}
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
      {product.dimentions && product.dimentions !== "-" && (
        <Typography variant="subtitle2" gutterBottom>
          Dimentions:&nbsp;
          <Typography
            style={{ display: "inline-block" }}
            variant="body2"
            gutterBottom
          >
            {product.dimentions}
          </Typography>
        </Typography>
      )}
      {product.weight && (
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
      )}
    </Grid>
  );
};

export default Description;
