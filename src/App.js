import React from 'react';
import './App.css';
import { IssuesListPage } from './pages/IssuesListPage';
import { ErrorBoundary } from './comopnents/ErrorBoundry';
import { Header } from './comopnents/Header';


 class App extends React.Component{

 render(){
  return (
    <div className="App">
      <Header/>
    <ErrorBoundary fallback={<h2>Oops! Something went wrong..</h2>}  >
      <IssuesListPage/>
      </ErrorBoundary>
    </div>
  );
}
 }
export default App;
