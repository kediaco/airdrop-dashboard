import React from 'react';
import '../landing/landing.css';
import './dashboard.css';
import '../../index.css';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import SearchBar from 'src/components/searchBar/searchBar';

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

function DashboardGrid() {
  const keys = ['a', 'b', 'c', 'd'];

  const layout = getLayoutForKeys(keys);
  return (
    <ResponsiveGridLayout
      className="layout d--grid"
      containerPadding={[0, 0]}
      layouts={layout}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}}
      cols={{lg: 12, md: 12, sm: 8, xs: 4}}
      rowHeight={100}>
      {keys.map(key => (
        <div className="d--card" key={key}>
          <div>
            <h3 className="d--card--title">{`Get Tacos from Taco Stand ${key}`}</h3>
            <div className="d--row">
              <div className="d--icon" style={{background: '#1CDC30'}} />
              <p className="d--card--body">Completed</p>
            </div>
          </div>
          <p className="d--card--body">December 9 at 4:45PM EST</p>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}

function DashboardSummary(props: any) {
  const {isMobile} = props;
  return (
    <div className={`d--summary ${isMobile ? 'd--mobile' : 'd--desktop'}`}>
      <h4 className="d--summary--title">Task List</h4>
      <div className="d--row">
        <div className="d--icon" style={{background: '#1CDC30'}} />
        <p className="d--summary--body">Subtask</p>
      </div>
      <div className="d--row">
        <div className="d--icon" style={{background: '#1CDC30'}} />
        <p className="d--summary--body">Subtask</p>
      </div>
      <div className="d--row">
        <div className="d--icon" style={{background: '#1CDC30'}} />
        <p className="d--summary--body">Subtask</p>
      </div>
      <p className="d--summary--caption">
        Last refreshed December 9 at 4:50 PM EST.
      </p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="page-base d--page-base">
      <div className="d--page-left">
        <div className="d--page-header">
          <h3 className="la--title d--title">
            <span className="la--title-evmos">Evmos </span>Airdrop Rewards
          </h3>
          <div className="d--row">
            <div className="d--icon" style={{background: '#1CDC30'}} />
            <p className="d--subtitle">4/18</p>
          </div>
        </div>
        <SearchBar placeholderText="0xMYADDRESS" isLarge />
        <DashboardSummary isMobile />
        <DashboardGrid />
      </div>
      <DashboardSummary />
    </div>
  );
}
