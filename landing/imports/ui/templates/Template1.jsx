import React from 'react';

const Template1 = ({template, page}) => (
	<div className='template1'>
		<h1>{page.contents.header}</h1>
		<h2>{page.contents.subheader}</h2>
	</div>
);

export default Template1;