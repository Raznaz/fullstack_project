import React, { useContext } from 'react';
import { Context } from '..';

const Navbar = () => {
	const { user } = useContext(Context);
	return <div>Navbar</div>;
};

export default Navbar;
