module.exports = {
  extends: ["custom/next"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
