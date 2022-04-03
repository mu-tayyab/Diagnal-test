const noImage = require('~/assets/images/noImage.png');

export const buildImageUriWithFallback = (url) => (
  (url && url.startsWith('http')) ? { uri: url } : noImage
);
