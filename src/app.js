import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonButton,
  IonIcon,
  IonLabel,
  setupConfig
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Icons */
import { homeOutline, searchOutline, starOutline, bookmarkOutline, helpCircleOutline } from 'ionicons/icons';

setupConfig({
  mode: 'ios'
});

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/:tab(home)" exact={true} >
            <Home />
          </Route>
          {/* <Route path="/:tab(settings)" exact={true} render={ props =>
            <Settings {...props} userInformation={userInformation} setUserInformation={setUserInformation}/>
          }/> */}
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>

          <IonTabButton tab="featured" href="/featured">
            <IonIcon icon={starOutline} />
            <IonLabel>Featured</IonLabel>
          </IonTabButton>

          <IonTabButton tab="About" href="/about">
            <IonIcon icon={bookmarkOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Help" href="/help">
            <IonIcon icon={helpCircleOutline} />
            <IonLabel>Help</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      {/* <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
