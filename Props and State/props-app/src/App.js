import React from 'react';
import ChildComponent from './Components/ChildComponent';

function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}

export default ParentComponent;
