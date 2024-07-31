module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  plugins: ["react-hooks", "sort-exports", "simple-import-sort"],
  rules: {
    "import/no-anonymous-default-export": "off",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "simple-import-sort/imports": "error",
    "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
    "turbo/no-undeclared-env-vars": "warn",
  },
};
