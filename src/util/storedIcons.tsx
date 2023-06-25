function getStoredIcons() {
  return JSON.parse(localStorage.getItem("icons"));
}

function setStoredIcons(icons) {
  localStorage.setItem("icons", JSON.stringify(icons));
}

function addStoredIcons(icons) {
  let storedIcons = getStoredIcons();
  storedIcons = storedIcons.concat(icons);
  setStoredIcons(storedIcons);
}

function removeStoredIcon(deadIcon) {
  let tempIcons = getStoredIcons();
  tempIcons = tempIcons.filter(
    (icon) => JSON.stringify(icon) !== JSON.stringify(deadIcon)
  );
  setStoredIcons(tempIcons);
}

export { getStoredIcons, setStoredIcons, addStoredIcons, removeStoredIcon };
