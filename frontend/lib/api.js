export function getStrapiURL(path) {
  return "http://192.168.178.9:1337"+path
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
 
}
