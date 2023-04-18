import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import Header from './components/Header';

const App = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
