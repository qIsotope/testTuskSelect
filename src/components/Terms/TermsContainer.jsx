import React from 'react'
import { MySelect } from '../MySelect';
import { useGetTermsQuery } from '../../redux/services/selectApi'
import { useSearchParams } from 'react-router-dom'

export const TermsContainer = ({ parameters }) => {

	const { data, isFetching, isLoading, isError, error } = useGetTermsQuery('')
	let [searchParams, setSearchParams] = useSearchParams();
	const servicePlug = searchParams.get('service_slug') || '';
	const defaultVal = data?.find(s => s.value === servicePlug)



	const onChange = (e) => {
		parameters.service_slug = e.value
		setSearchParams(parameters)
	}


	return (
		<MySelect data={data} isFetching={isFetching} isLoading={isLoading} isError={isError} error={error}
			defaultVal={defaultVal} onChange={onChange} name='Terms'
		/>
	)
}
