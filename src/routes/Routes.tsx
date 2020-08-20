import React, {Suspense} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Config from 'app/Config';
import Main from './main/Main';

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename={Config.getPublicUrl()}>
        <Switch>
          <Route
            path={['/main', '/bookmarks', '/userprofile', '/room', '/files']}
            component={Main}
          />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
