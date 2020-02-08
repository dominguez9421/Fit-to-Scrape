// axios and cheerio will make scrapping possible
var axios = require("axios");
var cheerio = require("cheerio");

// need to create a function that will scrape from the nytimes
var scrape = function() {
  // use axios get to scrape from the nytimes
  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    // by creating an empty array you can save article information
    var articles = [];

    $(".assetWrapper").each(function(i, element) {
      var head = $(this)
        .find("h2")
        .text()
        .trim();

      var url = $(this)
        .find("a")
        .attr("href");

      var sum = $(this)
        .find("p")
        .text()
        .trim();

      if (head && sum && url) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.nytimes.com" + url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;
