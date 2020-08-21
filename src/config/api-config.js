export const base_url = {
  development: 'url',
  staging: 'url',
  production: 'url',
  tes: 'https://run.mocky.io/v3/ee8ae270-0a5c-4b35-9d96-102c556dae65',
};

export const base_url_api = base_url.tes;

// your endpoint, exclude base url
export const endPoints = {
  login: () => '/',
  testLogin: () =>
    'https://run.mocky.io/v3/ee8ae270-0a5c-4b35-9d96-102c556dae65',
  deleteTestLoginAPI: () =>
    'https://designer.mocky.io/manage/delete/ee8ae270-0a5c-4b35-9d96-102c556dae65/yIwXD3OL7anCFGhsly7UTPykqff3jBQR6NBJ',
};

export default {
  baseURL: base_url_api,
  endPoints,
};
