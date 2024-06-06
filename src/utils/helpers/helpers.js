export const bufferToBase64 = (buffer) => {
  const binary = buffer.reduce(
    (acc, byte) => acc + String.fromCharCode(byte),
    ""
  );
  return btoa(binary);
};

//For cart page
export const buffertoBase64Image = (data) => {
  let modifyData = data.map((product) => {
    const base64String = bufferToBase64(product.product.photo.data.data);
    const imgSrc = `data:${product.product.photo.contentType};base64,${base64String}`;
    return { ...product, imgSrc };
  });
  return modifyData;
};

//Cart-Progress status for select all
export const incIndexAllProduct = (indexAllProduct, callback) => {
  let ind = indexAllProduct;
  const maxIndex = 5;
  const step = 0.1;
  const intervalTime = 50;

  const intervalId = setInterval(() => {
    if (ind < maxIndex) {
      ind += step;
      const value = Math.min(ind, maxIndex);
      callback(value);
    } else {
      clearInterval(intervalId);
      callback(maxIndex);
    }
  }, intervalTime);
};
