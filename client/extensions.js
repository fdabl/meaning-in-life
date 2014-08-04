$.mobile.changeGlobalTheme = function(theme) {
  // from stackoverflow here:
  // https://stackoverflow.com/questions/7667603/change-data-theme-in-jquery-mobile/23577762#15585104
  var themes = " a b c d e";

  // Updates the theme for all elements that match the
  // CSS selector with the specified theme class.
  function setTheme(cssSelector, themeClass, theme)
  {
    $(cssSelector)
      .removeClass(themes.split(" ").join(" " + themeClass + "-"))
      .addClass(themeClass + "-" + theme)
      .attr("data-theme", theme);
  }

  // Add more selectors/theme classes as needed.
  setTheme(".ui-mobile-viewport", "ui-overlay", theme);
  setTheme("[data-role='page']", "ui-page-theme", theme);
  setTheme("[data-role='header']", "ui-bar", theme);
  setTheme("[data-role='listview'] > li", "ui-bar", theme);
  setTheme(".ui-btn", "ui-btn-up", theme);
  setTheme(".ui-btn", "ui-btn-hover", theme);
};
