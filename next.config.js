/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["zh-CN"],
    defaultLocale: "zh-CN",
  },
  transpilePackages: ["@nutui/nutui-react", "@nutui/icons-react"],
};

module.exports = nextConfig;
