import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import { RouterProvider } from 'react-router-dom';
import ViewContext from "./components/contextApi/ViewContext";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './Router/Router';
<<<<<<< HEAD
import AuthContext from "./components/contextApi/UserContext";
import UserContext from "./components/contextApi/UserContext";
import { Provider } from "react-redux";
import { store } from "./App/Store";
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </UserContext>
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode >
=======
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewContext>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </QueryClientProvider>
    </ViewContext>
  </React.StrictMode>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
