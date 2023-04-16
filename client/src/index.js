import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/UserStore';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
export const Context = createContext(null);

root.render(
	<React.StrictMode>
		<Context.Provider value={{ user: new UserStore() }}>
			<App />
		</Context.Provider>
	</React.StrictMode>
);
