import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client';
import { HashRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import client from './lib/apollo-client';
import router from './Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router basename='/react-cicd'>
        <App />
      </Router>
      {/* <RouterProvider router={router} /> */}
    </ApolloProvider>
  </React.StrictMode>,
)
