<template>
 <div class="container">
  <h1 style="color: orangered ;">Rick y Morty</h1>
  <FilterByStatus />
  <FilterByName />
  <ListCharacters />
 </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters'
import FilterByStatus from './components/FilterByStatus';
import FilterByName from './components/FilterByName';
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
}
}
</script>

<style lang="scss">
:root {
  --background-body:rgb(5, 0, 0);
  --background-card:rgb(52, 245, 4);

  --text-white:rgb(4, 10, 0);
  --text-gray:rgb(138, 10, 10);
  --text-orange:orange;

}
* {
  box-sizing: border-box;
  margin: 5px;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 5rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 80%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>
