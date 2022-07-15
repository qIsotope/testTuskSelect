export const getExistingValues = (parameters, searchParams) => {
	if (searchParams.get('service_slug')) {
		parameters.service_slug = searchParams.get('service_slug')
	} if (searchParams.get('brand_slug')) {
		parameters.brand_slug = searchParams.get('brand_slug')
	} if (searchParams.get('style_slug')) {
		parameters.style_slug = searchParams.get('style_slug')
	}
}