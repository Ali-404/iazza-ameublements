import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { FaWhatsapp } from "react-icons/fa";
import { urlFor } from "../sanity";
import { Link } from "react-router-dom";
import { phoneNumber } from "../data/info";

export default function ProductCard({name,description, image,link}: {link:string,name: string,description : string, image: SanityImageSource}) {
  return (
    <Card sx={{ width: 345,margin:"auto",boxShadow:"none",borderRadius:0 }}>
      <CardActionArea component={Link} to={`/product/${link}`}>
        <CardMedia
          component="img"
          sx={{height:200,objectFit:'cover'}}
          image={urlFor(image).url()}
        />
        <CardContent
        >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions className="flex items-center gap-2 text-emerald-400">
          <FaWhatsapp /> {phoneNumber}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
