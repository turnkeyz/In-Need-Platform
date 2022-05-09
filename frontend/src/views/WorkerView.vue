<template>
  <div class="row m-1">
    <RouterLink to="/createworker" class="btn btn-primary m-1" style="width:200px;">Add New Worker</RouterLink>
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Worker ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="worker in Workers" :key="worker._id">
          <td>{{ worker._id }}</td>
          <td>{{ worker.firstName }}</td>
          <td>{{ worker.lastName }}</td>
            <td>
            <router-link :to="{name: 'editworker', params: { id: worker._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteWorker(worker._id)" class="btn btn-danger mx-2">Delete</button>
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
                Workers: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:8080/worker';
            axios.get(apiURL).then(res => {
                this.Workers = res.data;
                console.log(this.Workers);
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deleteWorker(id){
                let apiURL = `http://localhost:8080/worker/${id}`;
                let indexOfArrayItem = this.Workers.findIndex(i => i.clientId === id);

                if (window.confirm("Do you really want to delete?")) {
                  //call to backend
                    axios.delete(apiURL).then(() => {
                      //remove one element from Students array object to update data
                        this.Workers.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>