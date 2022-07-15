import React from 'react'

import Select from 'react-select'
import { Loader } from './_UI_elements/Loader'
import { Error } from './_UI_elements/Error'



export const MySelect = ({ data, isLoading, isError, isFetching, defaultVal, onChange, error, name }) => {


	if (isError) {
		return (
			<Error name={'Trends'} error={error} />
		)
	}

	return (
		<div className="select-item">
			<div className="select__title">
				{name}
			</div>
			{isFetching || isLoading
				? <Loader />
				: <Select options={data} onChange={(e) => onChange(e)} defaultValue={defaultVal} />
			}
		</div>
	)
}
