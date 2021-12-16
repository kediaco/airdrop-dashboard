import React from 'react';

import LandingPage from './pages/landing/landing.tsx';
import LoadingPage from './pages/loading/loading.tsx';
import DashboardPage from './pages/dashboard/dashboard.tsx';

function App() {
  const [page, setPage] = React.useState(0);
  const [userAddress, setUserAddress] = React.useState('');
  const [userMissions, setUserMissions] = React.useState([]);

  const searchForWallet = address => {
    setUserAddress(address);
    setPage(1);

    // Fetch Data (Dummy)
    // TODO: parse different address types
    fetch(`https://api.hanchon.live/user_missions/${address}`)
      .then(response => response.json())
      .then(data => {
        setUserMissions(data.missions ?? []);
        setPage(2);
      })
      .catch(error => {
        // TODO: Render error page
        setPage(2);
      });
  };

  if (page === 0) {
    return <LandingPage searchForWallet={searchForWallet} />;
  }
  if (page === 1) {
    return <LoadingPage />;
  }
  if (page === 2) {
    return (
      <DashboardPage
        userAddress={userAddress}
        userMissions={userMissions}
        searchForWallet={searchForWallet}
      />
    );
  }
}

export default App;
