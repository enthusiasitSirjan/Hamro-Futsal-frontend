import Axios from "axios";

export const PostApi = (url, formdata) => {
  return Axios.post(url, formdata)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
// const token = ;

export const AuthPostApi = (
  url,
  formdata,
  token = localStorage.getItem("token")
) => {
  const headers = { Authorization: "Token " + token };
  return Axios.post(url, formdata, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetApi = (url, token = localStorage.getItem("token")) => {
  const headers = { Authorization: "Token " + token };
  return Axios.get(url, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const PatchApi = (url, data) => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: "Token " + token };
  return Axios.patch(url, data, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const NoAuthPatchApi = (url, data) => {
  return Axios.patch(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const PutApi = (url, data) => {
  return Axios.put(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const DeleteApi = (url, data) => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: "Token " + token };
  return Axios.delete(url, data, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
