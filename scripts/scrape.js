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
  });
};
