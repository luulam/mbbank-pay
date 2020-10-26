import Cookie from "js-cookie";
const CONST_KEY_TOKEN = "sojo_token";
const CONST_KEY_PROFILE = "sojo_profile";
const CONST_KEY_LANGUAGE = "next-i18next";


export const loggedIn = () => {
  const token = this.getToken();
  return !!token;
}

export const setProfile = (profile, isRemember = false) => {
  if (isRemember === true) {
    const expires = new Date(Date.now() + 86400 * 1000);
    Cookie.set(CONST_KEY_PROFILE, JSON.stringify(profile), {
      expires: expires,
    });
  } else {
    Cookie.set(CONST_KEY_PROFILE, JSON.stringify(profile));
  }
}

export const getProfile = () => {
  const profile = Cookie.get(CONST_KEY_PROFILE);
  return profile ? JSON.parse(profile) : {};
}

export const setToken = (idToken) => {
  Cookie.set(CONST_KEY_TOKEN, idToken);
}

export const getToken = () => {
  return Cookie.get(CONST_KEY_TOKEN);
}

export const getLanguage = () => {
  return Cookie.get(CONST_KEY_LANGUAGE);
}

export const logout = () => {
  Cookie.remove(CONST_KEY_PROFILE);
  window.location.href = window.origin;
}
