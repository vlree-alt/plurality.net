const fetch = require("node-fetch");
const read_url = async (url) => {
      return fetch(url = url)
        .then(res => {
            if (res.status != 200){
                console.log(res);
                const return_message = `Content retrieval error ${res.status} ${res.statusText}`
                return return_message;
            } else {
                return res.text()
            }
        })
        .then(text => {
            // text = text.replaceAll("/figs","https://raw.githubusercontent.com/pluralitybook/plurality/main/figs")
            text = text + '<img src=\"https://raw.githubusercontent.com/pluralitybook/plurality/main/figs/private.png\" width=\"100%\">'
            return text;
        })
        .catch(err => {
          console.log("retrieval error catch")
          const return_message = `Configured content URL is not reacheable at ${url}`
          return return_message;
        })
}

module.exports = async function() {
    let return_content = {}

    urls = {
        return_url_02: "https://raw.githubusercontent.com/pluralitybook/plurality/main/introduction.md",
        return_url_03_01: "https://raw.githubusercontent.com/pluralitybook/plurality/main/pluralworld.md"
    }

    for (let url_item in urls) {
        console.log(url_item, urls[url_item]);
        return_content[url_item] = await read_url(urls[url_item])
    }
    return return_content;
}