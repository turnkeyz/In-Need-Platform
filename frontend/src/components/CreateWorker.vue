<template>
  <div class="row m-5">
    <h3 class="text-center">Create Worker</h3>
    <div class="col-md-12">
      <form @submit.prevent="handleSubmitForm">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Worker ID</label>
              <input
                type="number"
                class="form-control"
                v-model="worker._id"
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                v-model="worker.firstName"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="worker.lastName"
              required
            />
          </div>
        </div>
        <div class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <RouterLink to="/workers" class="btn btn-danger mt-3">Cancel</RouterLink>
        </div>
        </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      worker: {
        
        firstName: "",
        lastName: ""
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:8080/worker";
      axios
        .post(apiURL, this.worker)
        .then(() => {
          //changing the view to the list
          this.$router.push("/workers");
          this.worker = {
            
            firstName: "",
            lastName: ""
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>