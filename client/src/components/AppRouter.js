import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from '../pages/Shop';
import Auth from '../pages/Auth';
import { authRoutes, publicRoutes } from './../routes';

const AppRouter = () => {
	const isAuth = true;
	return (
		<Routes>
			{isAuth &&
				authRoutes.map(({ path, Element }) => {
					return <Route key={path} path={path} element={<Element />} />;
				})}
			{publicRoutes.map(({ path, Element }) => {
				return <Route key={path} path={path} element={<Element />} />;
			})}
		</Routes>
	);
};

export default AppRouter;

// const AppRouter = () => {
// 	const isAuth = false;
// 	return (
// 		<Switch>
// 			{authRoutes.map(({ path, Component }) => {
// 				return <Route key={path} path={path} component={Component} exact />;
// 			})}
// 			{publicRoutes.map(({ path, Component }) => {
// 				return <Route key={path} path={path} component={Component} />;
// 			})}
// 		</Switch>
// 	);
// };

// export default AppRouter;
