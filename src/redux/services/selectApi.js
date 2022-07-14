

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const myApi = createApi({


	reducerPath: 'selectApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://onboarding.art-code.team/api/test/v1/search/' }),
	endpoints: (builder) => ({
		getTerms: builder.query({
			query: () => `terms`,
			transformResponse: (response) => response.data.map(i => {
				return {
					id: i.id,
					value: i.slug,
					label: i.label
				}	
			}),
		}),
		getBrandTerms: builder.query({
			query: () => `brands_terms`,
			transformResponse: (response) => response.data.map(i => {
				return {
					id: i.id,
					value: i.slug,
					label: i.label
				}
			}),
		}),
		getStyles: builder.query({
			query: () => `styles`,
			transformResponse: (response) => response.data.map(i => {
				return {
					id: i.id,
					value: i.slug,
					label: i.label
				}
			}),
		}),
	}),
})


export const { useGetTermsQuery, useGetBrandTermsQuery, useGetStylesQuery } = myApi