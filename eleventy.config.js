const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_includes/css/skill.css");
  eleventyConfig.addPassthroughCopy("_includes/css/base.css");
  eleventyConfig.addPassthroughCopy("_includes/css/tw.css");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

};

dir: {
  input: "src";
  includes: "_includes";
  data: "_data";
  output: "_site";
}
