fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");

    menu.addEventListener("click", function () {
        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
    });
  });

/*fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");

    console.log(menu);
    console.log(menuLinks);

    menu.addEventListener("click", function () {
        console.log("hamburger clicked");

        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
    });
  }); */
