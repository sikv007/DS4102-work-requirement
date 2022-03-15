<template>
  <base-container :padding="5">
    <base-card>
      <div class="p-5">
        <h4 class="display-4">Error...</h4>
        <h1 class="display-1 mb-4">Page Not found</h1>
        <h3 class="mb-4">Try something else instead</h3>
        <section class="row">
          <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3  mb-4">
            <base-button link to="/discover">Discover Pokémon</base-button>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <base-button link to="/pokedex">Browse the Pokédex</base-button>
          </div>
        </section>
      </div>
    </base-card>
  </base-container>
</template>
