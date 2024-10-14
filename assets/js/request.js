
function scrape(code) {
  if (code.search("^[0-9]{5}:[0-9]{3}:[0-9]{4}$") == -1) {
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    const form = new FormData();
    form.append("codes", [code]);
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
      }
    };
    options.body = form;
    fetch("https://web-production-c3f04.up.railway.app/api", options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
scrape("79501:008:0014");
