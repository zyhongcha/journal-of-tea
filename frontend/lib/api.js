export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  try {
    const parseJSON = (res) => {
      if (res.json) {
        return res.json()
      } else {
        return res
      }
    }

    const checkStatus = (res) => {
      if (res.status >= 200 && res.status < 300) return res
      return parseJSON(res).then((res) => {
        throw res
      })
    }

    const response = await fetch(getStrapiURL(path), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    // await checkStatus(response)
    const data = await response.json()
    return data
    
  } catch (err) {
    return { err }
  }
}
