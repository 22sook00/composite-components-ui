export const formatPhone = (phoneNumberStr) => {
  return phoneNumberStr.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

export const formatOrderNo = (no) => {
  return no.replace(/(\d{8})(?=\d)/g, "$1-");
};

export const formatDeletePhoneDash = (phoneNumberStr) => {
  return phoneNumberStr.replace(/-/g, "");
};

export const formatTextSlice = (text, length = 17) => {
  //공백제외, 순수 텍스트 length 만 적용되도록 수정
  const textWithoutSpaces = text.replace(/\s/g, "");
  if (textWithoutSpaces.length > length) {
    let slicedText = "";
    let currentLength = 0;

    for (const char of text) {
      slicedText += char;
      if (char !== " ") {
        currentLength += 1;
      }

      if (currentLength === length) {
        break;
      }
    }

    return `${slicedText}...`;
  }

  return text;
};

export const countExpiredDate = (expired) => {
  const cur = new Date();
  const exDate = new Date(expired);

  const timeDifference = exDate.getTime() - cur.getTime();
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};
