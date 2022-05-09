<template>
  <div class="row m-1">
    <div><RouterLink to="/addclient" class="btn btn-primary m-1 justify-content-start" style="width:200px;">Add New Client</RouterLink>
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Client ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Zip Code</th>
          <th>Gender</th>
          <th>Actions</th> 
        </tr>
      </thead>
      <tbody>
       <tr v-for="client in Clients" :key="client.latest.clientId">
          <td>{{ client.latest.clientId }}</td>
          <td>{{ client.latest.firstName }}</td>
          <td>{{ client.latest.lastName }}</td>
          <td>{{ client.latest.phoneNumber }}</td>
          <td>{{ client.latest.zipCode }}</td>
          <td>{{ client.latest.gender }}</td>
            <td>
            <router-link :to="{name: 'editclient', params: { id: client.latest.clientId }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteStudent(client.latest.clientId)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Clients: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:8080/clients';
            axios.get(apiURL).then(res => {
                this.Clients = res.data;
                console.log(this.Clients);
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:8080/clients/${id}`;
                let indexOfArrayItem = this.Clients.findIndex(i => i.clientId === id);

                if (window.confirm("Do you really want to delete?")) {
                  //call to backend
                    axios.delete(apiURL).then(() => {
                      //remove one element from Students array object to update data
                        this.Clients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>