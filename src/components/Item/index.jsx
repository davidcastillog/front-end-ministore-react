import { useNavigate } from "react-router-dom";
import { Image } from "../../components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Item({ product }) {
  const navigate = useNavigate();

  const handleonClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <Card elevation={0} sx={{ maxWidth: 275 }}>
        <CardActionArea sx={{ pt: 2 }} onClick={handleonClick}>
          <Image product={product} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.brand}
            </Typography>
            {/* If product has price show it */}
            {product.price && (
              <Typography variant="body1" color="error">
                €{product.price}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Item;
