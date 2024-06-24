const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");

shortBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
  let originalUrl = document.getElementById("originalUrl").value;
  let apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

  let shortenedUrlTextarea = document.getElementById("shortnedUrl");

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shortenedUrlTextarea.value = data;
    })
    .catch((error) => {
      shortenedUrlTextarea.value = "Erro: não é possível encurtar o URL!";
    });
}

reloadBtn.addEventListener("click", () => {
  location.reload();
});
