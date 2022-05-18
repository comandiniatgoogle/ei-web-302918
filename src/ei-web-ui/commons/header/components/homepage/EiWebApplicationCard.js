import './EiWebApplicationCard.css';

import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
  } from '@material-ui/core';
  import { Button } from '@mui/material';

const EiWebApplicationCard = (props) => {
  const projectAvatar = props.projectAvatar;
  return (
    <Card variant="outlined" className="eiWebApp-card">
      <CardHeader
        avatar={<Avatar>{ projectAvatar }</Avatar>}
        title={ props.projectName }
        subheader={ props.projectDescriptor }
      ></CardHeader>
      <CardMedia></CardMedia>
      <CardContent>
        <CardActions style={{display: 'flex'}}>
          <Button variant="contained" color="primary" style={{marginLeft: 'auto'}}>
            Go
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default EiWebApplicationCard;
