import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'Views/Layout';
import { Cast, Home, Movie, Movies, Reviews } from 'Views';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<h1>The Movies</h1>} />
          <Route path=":movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
