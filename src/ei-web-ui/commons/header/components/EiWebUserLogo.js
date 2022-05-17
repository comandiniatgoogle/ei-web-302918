import './EiWebUserLogo.css';

const EiWebUserLogo = (props) => {
  return (
    <div align='center'>
      <img
        src={ `https://moma-teams-photos.corp.google.com/photos/${ props.userConnected.ldap }?sz=100&type=SECURITY&type=SILHOUETTE` }
        alt={ props.userConnected.ldap }
      />
      <br />
      <span className="eiweb-userlogo-ldap">{ props.userConnected.name }</span>
    </div>
  );
};

export default EiWebUserLogo;
