import ApiHelper from "helpers/api.helper";

const PREFIX = "auth/";

export const login = async (params: object) => {
  return await ApiHelper.get(PREFIX, params);
};

export default {
  login,
};
