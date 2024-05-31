export const openSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-[-100%]");
  document.querySelector("#sidebar").classList.add("left-0");
  document.querySelector("#laypuotoverlay").classList.remove("hidden");
  document.querySelector("#laypuotoverlay").classList.add("block");
};
export const closeSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-0");
  document.querySelector("#sidebar").classList.add("left-[-100%]");
  document.querySelector("#laypuotoverlay").classList.remove("block");
  document.querySelector("#laypuotoverlay").classList.add("hidden");
};

export const handleOverlay = (e, closeSideBar) => {
  if (e.target.id === "laypuotoverlay") {
    closeSideBar();
  }
};
