import Cookie from "js-cookie";
export const CONST_KEY_TOKEN = "sojo_token";
export const CONST_KEY_PROFILE = "sojo_profile";
export const CONST_KEY_LANGUAGE = "next-i18next";

export default class AuthHelper {
  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  setProfile(profile, isRemember = false) {
    if (isRemember === true) {
      const expires = new Date(Date.now() + 86400 * 1000);
      Cookie.set(CONST_KEY_PROFILE, JSON.stringify(profile), {
        expires: expires,
      });
    } else {
      Cookie.set(CONST_KEY_PROFILE, JSON.stringify(profile));
    }
  }

  getProfile() {
    const profile = Cookie.get(CONST_KEY_PROFILE);
    return profile ? JSON.parse(profile) : {};
  }

  setToken(idToken) {
    Cookie.set(CONST_KEY_TOKEN, idToken);
  }

  getToken() {
    return Cookie.get(CONST_KEY_TOKEN);
  }

  getLanguage() {
    return Cookie.get(CONST_KEY_LANGUAGE);
  }

  logout() {
    Cookie.remove(CONST_KEY_PROFILE);
    window.location.href = window.origin;
  }
}
