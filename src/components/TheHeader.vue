<template>
  <div class="header">
    <h1>KATHERINE BROOKS LUXURY</h1>
    <nav>
      <ul>
        <li>NEW</li>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>ART OF LIVING</li>
      </ul>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  name: "the-header",
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-top: 10px;
}
ul li {
  list-style: none;
  padding: 0 100px;
  font-size: 0.8em;
  font-weight: 700;
  color: #a3a2a2;
}
hr {
  border: 1px solid #eeeeee;
}
</style>
