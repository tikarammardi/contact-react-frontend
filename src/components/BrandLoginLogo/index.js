import React from 'react';
const logoUrl = 'https://www.o3capital.com/assets/img/header/o3Logo.png';

export const BrandLoginLogo = (props) => {
	return (
		<React.Fragment>
			<a href={props.link}>
				<img className="img-fluid use-defaults" src={logoUrl} alt="responsive" />
			</a>
		</React.Fragment>
	);
};

export const BrandLogo = (props) => {
	return (
		<React.Fragment>
			<a href={props.link}>
				<img className="logo-size" src={logoUrl} alt="website logo" />
			</a>
		</React.Fragment>
	);
};
