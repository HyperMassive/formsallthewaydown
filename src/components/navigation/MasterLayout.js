import React from 'react';

import NavAppBar from './NavAppBar';
import NavDrawer from './NavDrawer';

function MasterLayout() {
  return (
    <div>
      <NavAppBar />
      <NavDrawer />
    </div>
  );
}

export default MasterLayout;
