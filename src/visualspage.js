import React from 'react';
import { Link } from 'react-router';
import StainsComponent from './stainscomponent';

export default class extends React.Component {
  render() {
    return (
      <div className="container">
      	<StainsComponent src="input.png" backgroundColor={[0.05, 0.05, 0.05]}/>
      </div>
      );
    }
};
