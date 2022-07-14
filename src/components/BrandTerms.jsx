import React from 'react'
import { useGetBrandTermsQuery } from '../redux/services/selectApi'
import Select from 'react-select'
import { Loader } from './Loader'
import { useSearchParams } from 'react-router-dom'
import { Error } from './Error'


export const BrandTerms = ({ parameters }) => {
	const { data, isFetching, isLoading, isError, error } = useGetBrandTermsQuery('')
	let [searchParams, setSearchParams] = useSearchParams();

	const servicePlug = searchParams.get('brand_slug') || '';
	const defaultVal = data?.find(b => b.value === servicePlug)

	const onChange = (e) => {
		parameters.brand_slug = e.value
		setSearchParams(parameters)
	}

	if (isError) {
		return (
			<Error name={'Brand terms'} error={error} />
		)
	}

	return (
		<div className="select-item">
			<div className="select__title">
				Brand Terms
			</div>
			{isFetching || isLoading
				? <Loader />
				: <Select options={data} defaultValue={defaultVal} onChange={(e) => onChange(e)} />
			}
		</div>
	)
}
