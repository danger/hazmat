const path = require("path");
const slash = require("slash");
const { kebabCase, uniq, get, compact, times } = require("lodash");

// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
const POSTS_PER_PAGE = 10;
const cleanArray = arr => compact(uniq(arr));

// Add Gatsby's extract-graphql Babel plugin (we'll chain it with babel-loader)
const extractQueryPlugin = path.resolve(
  __dirname,
  `node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
);

// Temporary workaround to ensure Gatsby builds minified, production build of React.
// https://github.com/fabien0102/gatsby-starter/issues/39#issuecomment-343647558
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.loader("typescript", {
      test: /\.tsx?$/,
      loaders: [
        `babel-loader?${JSON.stringify({
          presets: ["babel-preset-env"],
          plugins: [extractQueryPlugin]
        })}`,
        "ts-loader"
      ]
    });
  }
};

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent);
      const [basePath, name] = fileNode.relativePath.split("/");
      slug = `/${basePath}/${name}/`;
      break;
  }
  if (slug) {
    createNodeField({ node, name: `slug`, value: slug });
  }
};
