import React from 'react';

import LandingPage from './pages/landing/landing.tsx';
import LoadingPage from './pages/loading/loading.tsx';
import DashboardPage from './pages/dashboard/dashboard.tsx';

function App() {
  const [page, setPage] = React.useState(0);
  const [userAddress, setUserAddress] = React.useState('');
  const [userMissions, setUserMissions] = React.useState([]);

  if (page === 0) {
    return (
      <LandingPage
        searchForWallet={address => {
          setUserAddress(address);
          setPage(1);

          // Fetch Data (Dummy)
          fetch('http://api.hanchon.live/user_missions/wallet0')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setUserMissions(data.missions ?? []);
              setPage(2);
            })
            .catch(error => console.log(error));
        }}
      />
    );
  }
  if (page === 1) {
    return <LoadingPage />;
  }
  if (page === 2) {
    return (
      <DashboardPage userAddress={userAddress} userMissions={userMissions} />
    );
  }
}

export default App;
