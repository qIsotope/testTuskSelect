import React from 'react'

export const Error = ({ error, name }) => {

	return (
		<div className="select-item">
			<div className="select__title">
				{name}
			</div>
			<div className="error__message">
				Error: {error?.error}
			</div>
			<div className="error__image">
				<img src="./assets/sad.png" alt="" />
			</div>

		</div>
	)
}
