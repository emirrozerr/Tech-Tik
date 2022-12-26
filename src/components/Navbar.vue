<template>
    <nav class="navbar navbar-expand-lg bg-light p-5">
  <div class="container">
    <a class="navbar-brand fs-4" href="/home">Tech-Tık</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home" >Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="/products/Elektronik">Elektronik</a></li>
            <li><a class="dropdown-item" href="/products/Moda">Moda</a></li>
            <li><a class="dropdown-item" href="/products/EvveKırtasiye">Ev ve Kırtasiye</a></li>
            <li><a class="dropdown-item" href="/products/Bahçe">Bahçe</a></li>
            <li><a class="dropdown-item" href="/products/BebekveOyuncak">Bebek ve Oyuncak</a></li>
            <li><a class="dropdown-item" href="/products/Spor">Spor</a></li>
            <li><a class="dropdown-item" href="/products/Kozmetik">Kozmetik</a></li>
            <li><a class="dropdown-item" href="/products/Hobi">Hobi</a></li>
            <li><a class="dropdown-item" href="/products/Kitap">Kitap</a></li>

            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/products/allProducts">Tüm ürünler</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search" method="GET">
        <input class="form-control rounded-0 border-0 rounded-start" type="search" placeholder="Search..." aria-label="Search">
        <button class="btn bg-white border-0 rounded-0 rounded-end" type="submit"><svg data-v-41be6633="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="search" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-search mx-auto b-icon bi"><g data-v-41be6633=""><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></g></svg></button>
      </form>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: "Navbar"
}
</script>
<style scoped>
  nav{
    background-color: #136AF8 !important;
  }
  nav a{
    color:#fff !important;
    font-size: 1rem;
    font-weight: 500;
  }
  svg{
    color: rgba(0, 0, 0, 0.466);
  }
</style>