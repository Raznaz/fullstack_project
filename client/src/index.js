import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './main.scss';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
export const Context = createContext(null);

root.render(
	<React.StrictMode>
		<Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
			<App />
		</Context.Provider>
	</React.StrictMode>
);
