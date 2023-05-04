import React from 'react';

import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About, TarifPage } from './pages';
import { plans } from './components/TarifPlan';
import ActivationPage from './pages/ActivationPage/ActivationPage';
import TablePage from './pages/TablePage/TablePage';
import { UserBotPage } from './pages/UserBotPage';

function App() {
  return (
    <div className="App">
      <Header />
      <UserBotPage />
      <TablePage freeServer={{}} paidServer={{}} />
      <ActivationPage />
      <TarifPage plans={plans} title={'plan'} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
