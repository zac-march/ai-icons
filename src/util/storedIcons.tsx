function getStoredIcons() {
  let storedIcons = JSON.parse(sessionStorage.getItem("icons"));
  if (Array.isArray(storedIcons)) return storedIcons;
  else return [];
}

function setStoredIcons(icons) {
  sessionStorage.setItem("icons", JSON.stringify(icons));
}

function addStoredIcons(icons) {
  let storedIcons = getStoredIcons();
  if (Array.isArray(storedIcons)) {
    storedIcons = storedIcons.concat(icons);
    setStoredIcons(storedIcons);
  } else {
    setStoredIcons(icons);
  }
}

function removeStoredIcon(deadIcon) {
  let tempIcons = getStoredIcons();
  tempIcons = tempIcons.filter(
    (icon) => JSON.stringify(icon) !== JSON.stringify(deadIcon)
  );
  setStoredIcons(tempIcons);
}

export { getStoredIcons, setStoredIcons, addStoredIcons, removeStoredIcon };
