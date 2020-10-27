/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null);
		}
	};

	return (
		<div className="backdrop" onClick={handleClick}>
			<img src={selectedImg} alt="enlarged pic" />
		</div>
	);
};

export default Modal;
