import ApiHelper from "helpers/api.helper"

const PREFIX = "auth/"

export const login = async (params) => {
  return await ApiHelper.get(PREFIX, params)
}