import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Shop from './pages/Shop';
import Auth from './pages/Auth';

const App = () => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
};

export default App;
