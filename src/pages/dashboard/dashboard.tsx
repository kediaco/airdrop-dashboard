import React from 'react';
import '../landing/landing.css';
import './dashboard.css';
import '../../index.css';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import SearchBar from 'src/components/searchBar/searchBar';

const GridLayout = require('react-grid-layout');

const ResponsiveGridLayout = GridLayout.WidthProvider(GridLayout.Responsive);

function DashboardGrid() {
  const keys = ['a', 'b', 'c'];
  const defaultLayout = [
    {i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
    {i: 'b', x: 4, y: 0, w: 4, h: 2, static: true},
    {i: 'c', x: 8, y: 0, w: 4, h: 2, static: true},
  ];
  const layout = {
    lg: defaultLayout,
    md: defaultLayout,
    sm: defaultLayout,
    xs: defaultLayout,
    xxs: defaultLayout,
  };
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
            <h3 className="d--card--title">Get Tacos from Taco Stand</h3>
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

function DashboardSummary() {
  return (
    <div className="d--summary">
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
          <div className="d--icon" style={{background: '#1CDC30'}} />
          <p className="d--subtitle">4/18</p>
        </div>
        <SearchBar
          placeholderText="Enter your Evmos hex or bec32 address"
          isLarge
        />
        <DashboardGrid />
      </div>
      <DashboardSummary />
    </div>
  );
}
