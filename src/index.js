/* eslint-disable react/jsx-filename-extension */
import React, { StrictMode } from 'react';
// import { MongoClient } from 'mongodb';
import ReactDOM from 'react-dom/client';
import ReactRouterDOM, { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import App from './App';
import './output.css';
import { ErrorBoundary } from 'react-error-boundary';

const url = 'mongodb+srv://webby4664:mongodb256265@cluster0.sqlzsco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const rootDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(rootDiv);
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route
        path="/"
        element={(
          <StrictMode>
            <App />
          </StrictMode>
        )}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>
);
