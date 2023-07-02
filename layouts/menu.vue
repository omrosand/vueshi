<template>
  <div>
    <main>
      <div class="wrapper">
        <NuxtLink to="/" class="back"
          ><Icon name="ic:twotone-arrow-back" /> Back</NuxtLink
        >
        <NuxtLink to="/" class="menuTitle">Averøy Sushi</NuxtLink>
      </div>

      <MenuNav />
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
