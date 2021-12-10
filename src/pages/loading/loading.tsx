import './loading.css';
import '../../index.css';

import {SpinnerDiamond} from 'spinners-react';

export default function LoadingPage() {
  return (
    <div className="page-base">
      <div className="page-body">
        <h3 className="lo--title">LOADING</h3>
        <SpinnerDiamond
          color="#fff"
          secondaryColor="#555"
          speed={125}
          thickness={80}
        />
      </div>
    </div>
  );
}
