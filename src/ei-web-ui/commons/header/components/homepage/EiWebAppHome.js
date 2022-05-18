import EiWebApplicationCard from './EiWebApplicationCard';

const EiWebAppHome = () => {
  return (
    <div>
      <EiWebApplicationCard 
        projectAvatar='GSMP'
        projectName='GSMP'
        projectDescriptor='Shipments Monitor for Google'
      />    
    <EiWebApplicationCard 
      projectAvatar='ND'
      projectName='NETDEPLOY TRACKER'
      projectDescriptor='Live and History shipments for NetDeploy'
    />
  </div>
  );
};

export default EiWebAppHome;
