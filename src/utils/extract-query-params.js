// ?search=Daia
// search=Daya&page=2
// [ 'search=Daya' & 'page=2 ' ]

// [ 'search', 'Daia' ]
// [ 'page', '2' ]

export function extractQueryParams(query){
    return query.substr(1).split('&').reduce((queryParams, param) =>{
        const [key, value] = param.split('=')

        queryParams[key] = value

        return queryParams
    }, {})
}