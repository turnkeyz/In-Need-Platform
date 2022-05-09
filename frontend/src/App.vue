<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="btn btn-primary ">Home</RouterLink>
      <RouterLink to="/graphs" class="btn btn-primary ">Graphs</RouterLink>
      <!-- referenced from bootstrap-vue.org/docs/components/dropdown -->
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Events
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item"><RouterLink to = "/createevent">Create Event</RouterLink></a></li>
          <li><a class="dropdown-item"><RouterLink to = "/Events">Events List</RouterLink></a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Clients
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item"><RouterLink to = "/addclient">Register</RouterLink></a></li>
          <li><a class="dropdown-item"><RouterLink to = "/clients">View Clients</RouterLink></a></li>

          <li><a class="dropdown-item"><RouterLink to = "/add-document">Add Client Documents</RouterLink></a></li>
          <li><a class="dropdown-item"><RouterLink to = "/clients-doc">View Client Documents</RouterLink></a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Organizations
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item"><RouterLink to = "/createorganization">Register Organization</RouterLink></a></li>
          <li><a class="dropdown-item"><RouterLink to = "/organizations">Organizations List</RouterLink></a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Workers
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item"><RouterLink to = "/createworker">Register worker</RouterLink></a></li>
          <li><a class="dropdown-item"><RouterLink to = "/workers">Workers List</RouterLink></a></li>
        </ul>
      </div>

    <button @click="goBack"><img src="../favicon.ico" class="img-responsive"></button>
    
    </div>
    </nav>
    
    <div class="container mt-5">
      <RouterView></RouterView>
    </div>
    
  </header>

  

</template>
<!--this script is courtesy of user "hama99o" on stackoverflow to build a back button that is tied to the vue icon-->
<script>
export default {
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
}
</script>


<style scoped>
a {text-decoration: none;}
dropdown {
  padding: 10px;
}
navbar-brand {
  border:20px;
  padding: 10px;
}
</style>