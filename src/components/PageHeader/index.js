import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PageHeader = (props) => {
	return (
		<React.Fragment>
			<div className="header">
				<div className="header-body">
					<Row>
						<Col>
							<h6 className="header-pretitle ">{props.section}</h6>
							<h1 className="header-title text-capitalize mb-3">{props.title}</h1>
						</Col>
					</Row>
				</div>
			</div>
		</React.Fragment>
	);
};
export default PageHeader;
