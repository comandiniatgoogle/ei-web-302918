import './App.css';
import EiWebContainer from './ei-web-ui/commons/header/components/EiWebContainer';
import EiWebHeader from './ei-web-ui/commons/header/components/EiWebHeader';

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
      <EiWebContainer userConnected={ userConnected } />
    </div>
  );
}

export default App;
