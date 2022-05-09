<template>

  <div class="row m-1">
    <RouterLink to="/createorganization" class="btn btn-primary m-1" style="width:200px;"> Register Organization </RouterLink>
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Organization ID</th>
          <th>Organization Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="organization in Organizations" :key="organization._id">
          <td>{{ organization._id }}</td>
          <td>{{ organization.organizationName }}</td>
          <td>{{ organization.description }}</td>
          <td>
            <router-link :to="{name: 'editorganizations', params: { id: organization._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteOrganization(organization._id)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>    
  </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Organizations: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:8080/organizations';
            axios.get(apiURL).then(res => {
                this.Organizations = res.data;
                console.log(this.Organizations);
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deleteOrganization(id){
                let apiURL = `http://localhost:8080/organizations/${id}`;
                let indexOfArrayItem = this.Organizations.findIndex(i => i.clientId === id);

                if (window.confirm("Do you really want to delete?")) {
                  //call to backend
                    axios.delete(apiURL).then(() => {
                      //remove one element from Students array object to update data
                        this.Organizations.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>