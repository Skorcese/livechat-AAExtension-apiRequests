import axios from "axios";

const createApiRequest = (method, url, accessToken, headers, data) => {
  switch (method) {
    case "post":
      return axios.post(
        url,
        { ...JSON.parse(data) },
        {
          headers: { ...JSON.parse(headers) },
        }
      );
    case "get":
      alert("not implemented");
      break;
    default:
      console.log(method);
  }
};

export default createApiRequest;
