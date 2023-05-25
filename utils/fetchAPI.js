import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "b320f4c8fbmsha36134acddb5a52p13b1b0jsnaec5b3194103",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
