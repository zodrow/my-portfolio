export const getBkgImgStyles = (bkgImgUrl, height, position) => ({
  backgroundImage: "url(" + bkgImgUrl + ")",
  height: `${height}px`,
  width: "100%",
  backgroundPosition: `${position || 'center'}`,
  backgroundSize: "cover",
  position: 'relative',
});