
export async function mobileApi() {
    const url = `https://api.restful-api.dev/objects`;
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const content = await rawResponse.json();
    if (rawResponse.status === 200) {
      return { body: content, success: true, message: "" };
    } else {
      return { body: [], success: false, message: content.message };
    }
  }
  