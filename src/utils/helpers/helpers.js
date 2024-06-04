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
  const step = 0.1; // Smaller increment for smoother transition
  const intervalTime = 50; // Smaller interval time for smoother transition

  const intervalId = setInterval(() => {
    if (ind < maxIndex) {
      ind += step;
      const value = Math.min(ind, maxIndex); // Ensure indexAllProduct does not exceed maxIndex
      callback(value); // Call the callback function with the updated value
    } else {
      clearInterval(intervalId);
      callback(maxIndex); // Call the callback function with the maxIndex value
    }
  }, intervalTime);
};
