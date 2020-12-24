import { GET, POST } from "helpers/api.helper";

const PREFIX = "transaction/";

const getCapcha = async () => {
  return await GET(PREFIX + "capcha",);
};

const authAccount = async (params) => {
  console.log("authAccount:", params);
  return await POST(PREFIX + "auth-account", params);
};


const createTransaction = async (params = { account, secureCode }) => {
  console.log("createTransaction:", params);
  return await POST(PREFIX + "create-transaction", params);
};

const verifyPayment = async (params = { codeOTP, secureCode }) => {
  console.log("verifyPayment:", params);
  params.transactionId = "string"
  return await POST(PREFIX + "verify-payment", params);
};

export default {
  getCapcha,
  authAccount,
  createTransaction,
  verifyPayment
};
