Feature("create sloik");

Scenario("test something", ({ I, homePage }) => {
  I.amOnPage("http://127.0.0.1:5500/public_modules/home.html");
  I.seeElement("#add_sloik");
  I.click("#add_sloik");
  I.seeElement(homePage.sloikTitleInput);
});
