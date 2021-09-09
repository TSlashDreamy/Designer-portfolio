import React from 'react';
import { Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext"
import Home from './pages/Home';
import Logos from './pages/Logos';
import Posters from './pages/Posters';
import Ads from './pages/Ads';
import Magazines from './pages/Magazines';
import FirmStyle from './pages/Firmstyle';
import PixelArt from './pages/PixelArt';
import Other from './pages/Other';
import Access from './pages/Access';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App(){
  return (
    <div className='App'>
      <AuthProvider>
    <Route exact path="/home" component={Home} />
    <Route exact path="/logos" component={Logos} />
    <Route exact path="/posters" component={Posters} />
    <Route exact path="/ads" component={Ads} />
    <Route exact path="/magazines" component={Magazines} />
    <Route exact path="/firmstyle" component={FirmStyle} />
    <Route exact path="/pixelarts" component={PixelArt} />
    <Route exact path="/other" component={Other} />
    <Route exact path="/" component={Access} />
    <Route exact path="/danyasignupcooperationHzGkeaAU0hXYpn" component={Signup} />
    <Route path="/login" component={Login} />
      </AuthProvider>
    </div>
   );
  }


export default App;