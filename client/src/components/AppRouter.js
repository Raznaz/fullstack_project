import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import { authRoutes, publicRoutes } from './../routes';
import { Context } from '..';

const AppRouter = () => {
	// const isAuth = true;
	const { user } = useContext(Context);
	console.log('💛 ', user.isAuth);
	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Element }) => {
					return <Route key={path} path={path} element={<Element />} />;
				})}
			{publicRoutes.map(({ path, Element }) => {
				return <Route key={path} path={path} element={<Element />} />;
			})}
			<Route path='*' element={<Error />} />
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
