export const callAPi = async ({ domain, method = "GET", query, body }) => {
    const response = await fetch(domain, {
      method,
      body,
    });
    return await response.json();
  };
  