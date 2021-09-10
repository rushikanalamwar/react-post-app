import React from 'react'
import theme from 'theme';
import store from 'store';
import routes from './route';
import Layout from './layout';
import Component404 from 'views/404';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Loader from 'components/Loader';

function App() {
  return (
    <Provider store={store}>
      <Loader />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
                {routes.map((item, i) => <Route key={i} {...item} />)}
                <Route path="*" component={Component404} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
