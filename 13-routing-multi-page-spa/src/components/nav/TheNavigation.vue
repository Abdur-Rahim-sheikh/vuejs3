<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/teams"><i>Teams</i></RouterLink>
        </li>
        <li>
          <RouterLink to="/users"><i>Users</i></RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

i {
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: solid;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>