import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Pages/Main/Main';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
const Header = styled.section`
  width: 100%;
  height: 48px;
  background: #11b980;
`;

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:movie" element={<MovieDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
