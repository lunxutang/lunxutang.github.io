fetch("book1-content.md")
  .then((response) => response.text())
  .then((text) => {
    document.getElementById("chapter-content").innerText = text;
  })
  .catch((error) => {
    document.getElementById("chapter-text").textContent =
      "Failed to load chapter.";
    console.error(error);
  });
