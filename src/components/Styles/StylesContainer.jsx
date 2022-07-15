import React from 'react'
import { MySelect } from '../MySelect';
import { useGetStylesQuery } from '../../redux/services/selectApi'
import { useSearchParams } from 'react-router-dom'

export const StylesContainer = ({ parameters }) => {
	const { data, isFetching, isLoading, isError, error } = useGetStylesQuery('')
	let [searchParams, setSearchParams] = useSearchParams();
	const style = searchParams.get('style_slug') || '';
	const defaultVal = data?.find(b => b.value === style)

	const onChange = (e) => {
		parameters.style_slug = e.value
		setSearchParams(parameters)
	}


	return (
		<MySelect data={data} isFetching={isFetching} isLoading={isLoading} isError={isError} error={error}
			defaultVal={defaultVal} onChange={onChange} name='Styles'
		/>
	)
}
