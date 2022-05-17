import './App.css';
import EiWebHeader from './ei-web-ui/commons/header/components/EiWebHeader';

function App() {

  const comandini = {
    ldap: 'comandini',
    name: 'Daniele',
    cognome: 'Comandini',
    fullName: 'Daniele Comandini'
  };

  const smoroz = {
    ldap: 'smoroz',
    name: 'Sergey',
    cognome: 'Smoroz',
    fullName: 'Sergey Moroz'
  };

  const fpetroni = {
    ldap: 'fpetroni',
    name: 'Francesco',
    cognome: 'Petroni',
    fullName: 'Francesco Petroni'
  };

  const userConnected = comandini;

  return ( 
    <div>
      <EiWebHeader userConnected={ userConnected }/>
    </div>
  );
}

export default App;
