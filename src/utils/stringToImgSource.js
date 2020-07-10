const stringToImgSource = (img) => {
  if (img === undefined) return undefined;
  const base64 = btoa(
    new Uint8Array(img).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return "data:;base64," + base64;
};

export default stringToImgSource;
