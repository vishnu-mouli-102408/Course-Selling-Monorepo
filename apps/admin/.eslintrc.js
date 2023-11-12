module.exports = {
  extends: ["custom/next"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "eslint-comments/require-description": ["error", { ignore: [] }],
    "eslint-comments/no-use": ["error", { allow: [] }],
  },
};
