import React from 'react'
import { MySelect } from '../MySelect';
import { useGetBrandTermsQuery } from '../../redux/services/selectApi'
import { useSearchParams } from 'react-router-dom'

export const BrandTermsContainer = ({ parameters }) => {
	const { data, isFetching, isLoading, isError, error } = useGetBrandTermsQuery('')
	let [searchParams, setSearchParams] = useSearchParams();

	const servicePlug = searchParams.get('brand_slug') || '';
	const defaultVal = data?.find(b => b.value === servicePlug)

	const onChange = (e) => {
		parameters.brand_slug = e.value
		setSearchParams(parameters)
	}


	return (
		<MySelect data={data} isFetching={isFetching} isLoading={isLoading} isError={isError} error={error}
			defaultVal={defaultVal} onChange={onChange} name='Brand Terms'
		/>
	)
}
