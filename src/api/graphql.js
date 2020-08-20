const getGQL = (url, headers = {}) => (query = '', variables = {}) =>
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({query, variables}),
  }).then((res) => res.json());

export const GQL = getGQL('https://ety88kaj.api.sanity.io/v1/graphql/production/default');
