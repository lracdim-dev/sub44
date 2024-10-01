module.exports = function(eleventyConfig) {
       eleventyConfig.addPassthroughCopy('./src/assets');





    return {
        dir: {
            input: "src",
            output: "public",
            layout: "_includes/layouts"
          
        }
    }
}