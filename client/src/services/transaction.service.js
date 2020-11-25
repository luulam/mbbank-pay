import { GET, POST } from "helpers/api.helper";

const PREFIX = "transaction/";

const getCapcha = async () => {
  return await GET(PREFIX + "capcha", );
};

const authAccount = async (params) => {
  console.log("authAccount:", params);
  return await POST(PREFIX + "auth-account", params);
};

export default {
  getCapcha,
  authAccount,
};
