export function cleanKeyNull(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
}

export function formatTextVnToEn(
  str,
  replaceSymbols = false,
  symbolReplacing
) {
  // symbolReplacing = symbolReplacing || "-"
  if (!str) return str;
  str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a");
  str = str.replace(/[èéẹẻẽêềếệểễ]/g, "e");
  str = str.replace(/[ìíịỉĩ]/g, "i");
  str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o");
  str = str.replace(/[ùúụủũưừứựửữ]/g, "u");
  str = str.replace(/[ỳýỵỷỹ]/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, "A");
  str = str.replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, "E");
  str = str.replace(/[ÌÍỊỈĨ]/g, "I");
  str = str.replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, "O");
  str = str.replace(/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, "U");
  str = str.replace(/[ỲÝỴỶỸ]/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/"/g, "");
  if (replaceSymbols) {
    // str = str.replace(/[!@$%^*()+=<>?\\/,.:' '&#\\[]/g, symbolReplacing)
    str = str.replace(/-+-/g, symbolReplacing);
    str = str.replace(/^-+|-+$/g, "");
  }
  return str;
}


/**
* sends a request to the specified url from a form. this will change the window location.
* @param {string} path the path to send the post request to
* @param {object} params the paramiters to add to the url
* @param {string} [method=post] the method to use on the form
*/

export function postMessage(value) {
  let valueBase64 = window.btoa(value)
  let method = 'POST'
  let path = 'https://testthanhtoan.dichvucong.gov.vn/payment/paymentreturn_v2'
  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement('form');
  form.id = "submitForm"
  form.method = method;
  form.action = path;

  const hiddenField = document.createElement('input');
  hiddenField.type = 'hidden';
  hiddenField.name = "data";
  hiddenField.value = valueBase64;

  form.appendChild(hiddenField);

  document.body.appendChild(form);
  form.submit();
}

