Feature("create sloik");

Scenario("test something", ({ I, homepagePage }) => {
  I.amOnPage("/");
  I.seeElement("#add_sloik");
  I.click("#add_sloik");
  I.see(homepagePage.sloikTitleInput);
});
