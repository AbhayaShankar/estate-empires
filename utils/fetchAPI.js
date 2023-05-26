import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_URL;

export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_BAYUT_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_BAYUT_HOST,
    },
  });

  return data;
};
