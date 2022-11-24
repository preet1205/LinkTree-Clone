const shareButtons = document.querySelectorAll(".tile-share-btn");
console.log(shareButtons);

async function copyLink(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  try {
    await navigator.clipboard.writeText(link);
  } catch (error) {
    console.log(error);
  }
}

shareButtons.forEach((btn) => btn.addEventListener("click", copyLink));
