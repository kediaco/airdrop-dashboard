import React from 'react';
import '../landing/landing.css';
import './dashboard.css';
import '../../index.css';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import SearchBar from 'src/components/searchBar/searchBar';

import arrowright from '../../images/arrowright.svg';

import MissionData from '../../assets/missiondata';

const GridLayout = require('react-grid-layout');

const ResponsiveGridLayout = GridLayout.WidthProvider(GridLayout.Responsive);

/// Helper
const getLayoutForKeys = (keys: string[]) => {
  const createLayout = (numItemsPerRow: number) => {
    return keys.map((key, index) => ({
      i: key,
      x: (index % numItemsPerRow) * 4,
      y: Math.floor(index / numItemsPerRow) * 2,
      w: 4,
      h: 2,
      static: true,
    }));
  };

  const defaultLayout = createLayout(3);
  const smLayout = createLayout(2);
  const xsLayout = createLayout(1);

  return {
    lg: defaultLayout,
    md: defaultLayout,
    sm: smLayout,
    xs: xsLayout,
  };
};

function DashboardGrid(props: any) {
  const {userMissions} = props;
  const allMissions = Object.values(MissionData).flatMap(array => array);
  const keys = allMissions.map(mission => mission.id.toString());

  const layout = getLayoutForKeys(keys);

  const statusForCard = (id: number, totalPoints: number) => {
    if (userMissions.includes(id)) {
      return (
        <>
          <div className="d--icon" style={{background: '#1CDC30'}} />
          <p className="d--card--body">Completed</p>
        </>
      );
    }
    return (
      <>
        <div className="d--icon" style={{background: '#F8A933'}} />
        <p className="d--card--body">Incomplete</p>
      </>
    );
  };

  return (
    <ResponsiveGridLayout
      className="layout d--grid"
      containerPadding={[0, 0]}
      layouts={layout}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}}
      cols={{lg: 12, md: 12, sm: 8, xs: 4}}>
      {allMissions.map(mission => (
        <div className="d--card" key={mission.id}>
          <h3 className="d--card--title">{mission.task}</h3>
          <div className="d--row">
            {statusForCard(mission.id, mission.points)}
          </div>
          <p className="d--card--body">{`${mission.points} pts`}</p>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}

function DashboardSummary(props: any) {
  const {isMobile, userPoints, numComplete, numIncomplete} = props;
  const dateLastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  });
  return (
    <div className={`d--summary ${isMobile ? 'd--mobile' : 'd--desktop'}`}>
      <h4 className="d--summary--title">Status</h4>
      <div className="d--row">
        <p className="d--summary--subtitle">{`${userPoints} points`}</p>
      </div>
      <div className="d--row">
        <div className="d--icon" style={{background: '#1CDC30'}} />
        <p className="d--summary--body">{`${numComplete} Complete`}</p>
      </div>
      <div className="d--row">
        <div className="d--icon" style={{background: '#F8A933'}} />
        <p className="d--summary--body">{`${numIncomplete} Incomplete`}</p>
      </div>
      <p className="d--summary--caption">{`Last updated ${dateLastUpdated}.`}</p>
    </div>
  );
}

export default function DashboardPage(props: any) {
  const {userAddress, userMissions, searchForWallet} = props;
  const totalNumMissions = Object.values(MissionData)
    .map(array => array.length)
    .reduce((a, b) => a + b);
  const numComplete = userMissions.length;
  const numIncomplete = totalNumMissions - numComplete;

  const userPoints = Object.values(MissionData)
    .flatMap(array => array)
    .filter(mission => userMissions.includes(mission.id))
    .map(mission => mission.points)
    .reduce((a, b) => a + b, 0);

  // Search at new address
  const submitRequest = (event: any) => {
    event.preventDefault();

    const address = event.target[0].value ?? '';
    searchForWallet(address);
  };

  return (
    <div className="page-base d--page-base">
      <div className="d--page-left">
        <div className="d--page-header">
          <h3 className="la--title d--title">
            <span className="la--title-evmos">Evmos </span>Airdrop Rewards
          </h3>
          <div className="d--row">
            <div className="d--icon" style={{background: '#1CDC30'}} />
            <p className="d--subtitle">{`${userMissions.length}/${totalNumMissions}`}</p>
          </div>
        </div>
        <form onSubmit={submitRequest}>
          <div className="la--search">
            <SearchBar placeholderText={userAddress} isLarge />
            <button className="la--button" type="submit">
              <img src={arrowright} alt="Arrow Right" />
            </button>
          </div>
        </form>
        <DashboardSummary
          isMobile
          userPoints={userPoints}
          numComplete={numComplete}
          numIncomplete={numIncomplete}
        />
        <DashboardGrid userMissions={userMissions} />
      </div>
      <DashboardSummary
        userPoints={userPoints}
        numComplete={numComplete}
        numIncomplete={numIncomplete}
      />
    </div>
  );
}
