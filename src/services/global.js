/**
 * Retrieve companies list
 *
 * @return {object} Array containing company objects
*/
export const getCompanies = async () => {
  const API = process.env.REACT_APP_API_URI;

  const resp = await fetch(`${API}/api/companies`, { method: 'GET' }),
        data = await resp.json();

  return data;
};