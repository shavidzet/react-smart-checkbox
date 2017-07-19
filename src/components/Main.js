require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactSmartCheckbox from './react-smart-checkbox'

class AppComponent extends React.Component {
  render() {
    return (
      <ReactSmartCheckbox
        name='fruits'
        options={['orange', 'apple', 'banana']}
      />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
