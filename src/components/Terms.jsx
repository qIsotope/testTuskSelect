import React from 'react'
import { useGetTermsQuery } from '../redux/services/selectApi'
import Select from 'react-select'
import { Loader } from './Loader'
import { useSearchParams } from 'react-router-dom'
import { Error } from './Error'



export const Terms = ({ parameters }) => {
	const { data, isFetching, isLoading, isError, error } = useGetTermsQuery('')
	let [searchParams, setSearchParams] = useSearchParams();
	const servicePlug = searchParams.get('service_slug') || '';
	const defaultVal = data?.find(s => s.value === servicePlug)



	const onChange = (e) => {
		parameters.service_slug = e.value
		setSearchParams(parameters)
	}

	if (isError) {
		return (
			<Error name={'Trends'} error={error} />
		)
	}

	return (
		<div className="select-item">
			<div className="select__title">
				Terms
			</div>
			{isFetching || isLoading
				? <Loader />
				: <Select options={data} onChange={(e) => onChange(e)} defaultValue={defaultVal} />
			}
		</div>
	)
}