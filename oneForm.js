document.addEventListener("DOMContentLoaded", function () {
  const settingsButton = document.getElementById("settingsButton");
  const settingsMenu = document.getElementById("Settings");

  settingsButton.addEventListener("click", function () {
    if (
      settingsMenu.style.display === "none" ||
      settingsMenu.style.display === ""
    ) {
      settingsMenu.style.display = "block";
    } else {
      settingsMenu.style.display = "none";
    }
  });

  const CurrencyOptions = document.getElementById("CurrencyOptions");
  const Language = document.getElementById("Language");
  const VATType = document.getElementById("VATType");
  const RoundingSum = document.getElementById("RoundingSum");

  CurrencyOptions.addEventListener("change", function () {
    const selectedCurrency = CurrencyOptions.value;
    // Update the selected currency header
    const selectedCurrencyHeader = document.getElementById(
      "selectedCurrencyHeader"
    );
    selectedCurrencyHeader.textContent =
      "Selected Currency: " + selectedCurrency;
  });

  Language.addEventListener("change", function () {
    const selectedLanguage = Language.value;
    // Update the selected language header
    const selectedLanguageHeader = document.getElementById(
      "selectedLanguageHeader"
    );
    selectedLanguageHeader.textContent =
      "Selected Language: " + selectedLanguage;
  });

  VATType.addEventListener("change", function () {
    const selectedVATType = VATType.value;
    // Update the selected VAT type header
    const selectedVATTypeHeader = document.getElementById(
      "selectedVATTypeHeader"
    );
    selectedVATTypeHeader.textContent = "Selected VAT Type: " + selectedVATType;
  });

  RoundingSum.addEventListener("change", function () {
    const selectedRoundingSum = RoundingSum.value;
    // Update the selected rounding sum header
    const selectedRoundingSumHeader = document.getElementById(
      "selectedRoundingSumHeader"
    );
    selectedRoundingSumHeader.textContent =
      "Selected Rounding Sum: " + selectedRoundingSum;
  });
});
