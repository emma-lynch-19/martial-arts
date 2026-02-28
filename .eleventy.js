module.exports = function (eleventyConfig) {

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  return {
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
