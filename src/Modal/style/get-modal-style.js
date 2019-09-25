
function getModalStyle({
  left = 50,
  top = 50,
  translateX = 50,
  translateY = 50,
} = {}) {
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${translateX}%, -${translateY}%)`,
    overflow: 'scroll',
    boxSizing: 'border-box',
    // borderRadius: '1%',
  };
}
export default getModalStyle;