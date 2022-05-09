<template>
  <div class="row m-5">
    <h3 class="text-center">Create Organization</h3>
    <div class="col-md-12">
      <form @submit.prevent="handleSubmitForm">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Organization ID</label>
              <input
                type="number"
                class="form-control"
                v-model="Organizations.clientId"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Organization Name</label>
              <input
                type="text"
                class="form-control"
                v-model="Organizations.organizationName"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="Organizations.description"
              required
            />
          </div>
        </div>
        <div class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <RouterLink to="/organizations" class="btn btn-danger mt-3">Cancel</RouterLink>
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
      Organizations: {
        clientId: "",
        organizationName: "",
        description: ""
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:8080/organizations";
      axios
        .post(apiURL, this.Organizations)
        .then(() => {
          //changing the view to the list
          this.$router.push("/organizations");
          this.Organizations = {
            clientId:"",
            organizationName: "",
            description: ""
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>