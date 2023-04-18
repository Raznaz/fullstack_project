import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.header__body}>
						<a href='#' className={styles.header__logo}>
							<img src='https://media.wfmynews2.com/assets/WFMY/images/c5c195f7-9a58-45e1-8e8e-9970c6c96c0f/c5c195f7-9a58-45e1-8e8e-9970c6c96c0f_1920x1080.jpg' alt='logo' />
						</a>
						<div className={styles.header__burger}>
							<span></span>
						</div>
						<nav className={styles.header__menu}>
							<ul className={styles.header__list}>
								<li>
									<a href='#' className={styles.header__link}>
										Home
									</a>
								</li>
								<li>
									<a href='#' className={styles.header__link}>
										Login
									</a>
								</li>
								<li>
									<a href='#' className={styles.header__link}>
										Registration
									</a>
								</li>
								<li>
									<a href='#' className={styles.header__link}>
										Cart
									</a>
								</li>
								<li>
									<a href='#' className={styles.header__link}>
										Exit
									</a>
								</li>
								<li>
									<a href='#' className={styles.header__link}>
										Contacts
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;

// import React from 'react';
// import styles from './Header.module.scss';

// const Header = () => {
// 	return (
// 		<div className={styles.header}>
// 			<div className={styles.header__content}>
// 				<div>
// 					<span className={styles.logo}>Phones and tablets</span>
// 				</div>
// 				<div>
// 					<nav className={styles.nav}>
// 						<ul>
// 							<li className={styles.nav__item}>
// 								<a href='/'>Link 1</a>
// 							</li>
// 							<li className={styles.nav__item}>
// 								<a href='/login'>Link 1</a>
// 							</li>
// 							<li className={styles.nav__item}>
// 								<a href='/registration'>Link 1</a>
// 							</li>
// 						</ul>
// 					</nav>
// 				</div>
// 				<div>
// 					<div className={styles.header__button__container}>
// 						<button className={styles.header_toggler}></button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Header;
