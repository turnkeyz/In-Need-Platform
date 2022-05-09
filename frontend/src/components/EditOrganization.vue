<template>
  <div class="row m-5">
    <h3 class="text-center">Edit Organization</h3>
    <div class="col-md-12">
      <form @submit.prevent="handleSubmitForm">
        <div class="row">
          <div class="col-md-2">
            <div class="form-group">
              <label>Organization ID</label>
              <input
                disabled
                type="number"
                class="form-control"
                v-model="organization._id"
                required
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Organization Name <span class="text-danger"> *</span></label>
              <input
                type="string"
                class="form-control"
                v-model="organization.organizationName"
                required
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Description <span class="text-danger"> *</span></label>
              <input
                type="string"
                class="form-control"
                v-model="organization.description"
                required
              />
            </div>
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
      organization: {
        _id: "",
        organizationName: "",
        description: "",
      },
    };
  },
  created() {
        let apiURL = `http://localhost:8080/organizations/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.organization = res.data[0];
            console.log("data",this.organization)
        })
    },
  methods: {
    handleSubmitForm() {
      let apiURL = `http://localhost:8080/organizations/${this.$route.params.id}`;
      axios
        .put(apiURL, this.organization)
        .then((res) => {
            console.log(res)
          //changing the view to the list
          this.$router.push("/organizations");
          this.organization = {
            _id:"",
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
