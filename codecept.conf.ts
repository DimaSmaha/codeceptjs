import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./tests/*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://127.0.0.1:5500/public_modules/home.html",
      show: true,
    },
  },
  include: {
    I: "./steps_file",
    homepagePage: "./pages/homepage.ts",
  },
  name: "codeceptjs",
};
