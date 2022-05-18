import './App.css';
import EiWebHeader from './ei-web-ui/commons/header/components/EiWebHeader';
import EiWebAppHome from './ei-web-ui/commons/header/components/homepage/EiWebAppHome';

function App() {

  const comandini = {
    ldap: 'comandini',
    name: 'Daniele',
    cognome: 'Comandini',
    fullName: 'Daniele Comandini'
  };

  const userConnected = comandini;

  return ( 
    <div>
      <EiWebHeader userConnected={ userConnected }/>
      <EiWebAppHome userConnected={ userConnected }/>
    </div>
  );
}

export default App;
