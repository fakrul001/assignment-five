function changeButtonColor(id) {
  document
    .getElementById("btn-donation")
    .classList.remove(
      "bg-gradient-to-tr",
      "from-lime",
      "via-light-lime",
      "to-lime"
    );
  document
    .getElementById("btn-history")
    .classList.remove(
      "bg-gradient-to-tr",
      "from-lime",
      "via-light-lime",
      "to-lime"
    );

  document
    .getElementById(id)
    .classList.add(
      "bg-gradient-to-tr",
      "from-lime",
      "via-light-lime",
      "to-lime"
    );
}
