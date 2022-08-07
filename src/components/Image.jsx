import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


export default function Image({image, displaySize}) {
  return (
    <Card sx={{ maxWidth: 345, width:displaySize.width < 450?345:"auto" }}>
      <CardMedia
        component="img"
        height="250"
        image={image.url}
        alt="green iguana"
      />
      <CardContent>
      </CardContent>
      <CardActions>
        <Button startIcon={<ContentCopyIcon/>} onClick={() => {navigator.clipboard.writeText(image.url)}} size="small">
          link
        </Button>
      </CardActions>
    </Card>
  );
}
