import { Avatar } from "@material-ui/core";

const EiWebUserConnected = (props) => {
  return (
    <Avatar
      className={ props.classes.avatar }
      alt='@comandini'
      src='https://moma-teams-photos.corp.google.com/photos/comandini?sz=600&type=SECURITY&type=SILHOUETTE'
    ></Avatar>
  );
};

export default EiWebUserConnected;
