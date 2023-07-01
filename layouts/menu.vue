<template>
  <div>
    <main>
      <NuxtLink to="/" class="back"
        ><Icon name="ic:twotone-arrow-back" /> Back to home</NuxtLink
      >
      <MenuNav />
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
