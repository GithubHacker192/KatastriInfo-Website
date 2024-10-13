function scrape(code) {
  if (code.search("^[0-9]{5}:[0-9]{3}:[0-9]{4}$") == -1) {
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    let headers = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "en-US,en;q=0.9",
      origin: "https://ky.kataster.ee",
      priority: "u=1, i",
      referer: "https://ky.kataster.ee/",
      "sec-ch-ua":
        '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    };
    let options = {
      method: "GET",
      headers: headers,
    };
    fetch("https://cadastre.kataster.ee/api/cadastre/" + code, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
scrape("79501:008:0014");
