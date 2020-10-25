
const navigation = document.querySelector(".navigation");
const nav = `
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#Alen-project">
    <span class="title">Logotype</span>
      <img src="" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarList" class="navbar-menu">

    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>
     <a class="navbar-item">
        Store
      </a>

      <a class="navbar-item">
        Our Policy
      </a>
      <a class="navbar-item">
      Contact Us
    </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-danger">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;
navigation.innerHTML += nav

const navBurger = document.querySelector(".navbar-burger");
const navbarList = document.querySelector("#navbarList");

navBurger.addEventListener("click", (e) => navbarList.classList.toggle("is-active"));