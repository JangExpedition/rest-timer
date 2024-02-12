import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './pages/Layout/Layout.tsx';
import Main from './pages/Main/Main.tsx'
import Setting from './pages/Setting/Setting.tsx';

function App() {
  const rootElement = useRoutes([
    {
      element: <Layout/>,
      children: [
        {path: "/", element: <Main/>},
        {path: "/setting", element: <Setting/>}
      ]
    }
  ])
  return rootElement;
}

export default App;
