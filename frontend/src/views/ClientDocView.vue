<template>
  <div class="row m-1">
   
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Client ID</th>
          <th>SSN</th>
          <th>DL</th>
          <th>Other</th>
          <th>Action</th> 
        </tr>
      </thead>
      <tbody>
        
       <tr v-for="clientDoc in Clientdocs" :key="clientDoc.clientId">
          <td>{{ clientDoc.clientId }}</td>
          <td>{{ clientDoc.ssn }}</td>
          <td>{{ clientDoc.driverLicense }}</td>
          <td>{{ clientDoc.otherDoc }}</td>
            <td>
            <router-link :to="{name: 'editdocument', params: { id: clientDoc.clientId }}" class="btn btn-success ">Edit</router-link>
            <!--<button @click.prevent="viewDetails(clientDoc.clientId)" class="btn btn-info mx-2">Details</button>-->
            <button @click.prevent="deleteStudent(clientDoc.clientId)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
      <RouterLink to="/add-document" class="btn btn-primary m-1">Add New Document</RouterLink>
    </table>
  </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Clientdocs: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:8080/clients-doc';
            axios.get(apiURL).then(res => {
                this.Clientdocs = res.data;
                console.log(this.Clientdocs);
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:8080/clients-doc/${id}`;
                let indexOfArrayItem = this.Clientdocs.findIndex(i => i.clientId === id);

                if (window.confirm("Do you really want to delete?")) {
                  //call to backend
                    axios.delete(apiURL).then(() => {
                      //remove one element from Students array object to update data
                        this.Clientdocs.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
            viewDetails(id){
                let apiURL = `http://localhost:8080/clients-doc/${id}`;
                let indexOfArrayItem = this.Clientdocs.findIndex(i => i.clientId === id);

                if (window.confirm("Do you really want to delete?")) {
                  //call to backend
                    axios.delete(apiURL).then(() => {
                      //remove one element from Students array object to update data
                        this.Clientdocs.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>