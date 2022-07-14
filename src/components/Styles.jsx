import React from 'react'
import { useGetStylesQuery } from '../redux/services/selectApi'
import Select from 'react-select'
import { Loader } from './Loader'
import { Error } from './Error'
import { useSearchParams } from 'react-router-dom'



export const Styles = ({ parameters }) => {
	const { data, isFetching, isLoading, isError, error } = useGetStylesQuery('')
	let [searchParams, setSearchParams] = useSearchParams();
	const style = searchParams.get('style_slug') || '';
	const defaultVal = data?.find(b => b.value === style)

	const onChange = (e) => {
		parameters.style_slug = e.value
		setSearchParams(parameters)
	}

	if (isError) {
		return (
			<Error name={'Styles'} error={error} />
		)
	}

	return (
		<div className="select-item">
			<div className="select__title">
				Styles
			</div>
			{isFetching || isLoading
				? <Loader />
				: <Select options={data} defaultValue={defaultVal} onChange={(e) => onChange(e)} />
			}

		</div>
	)
}
