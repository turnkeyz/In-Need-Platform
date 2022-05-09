<template>
  <div class="row m-5">
    <h3 class="text-center">Add Client Documents</h3>
    <div class="col-md-12">
      <form @submit.prevent="handleSubmitForm">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
             <label>Client ID<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="clientDoc.clientId"
                required
              />
            </div>
            
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>SSN<span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="clientDoc.ssn"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Driving License</label>
            <input
              type="text"
              class="form-control"
              v-model="clientDoc.driverLicense"
              required
            />
          </div>
          </div>
          <div class="form-group col-md-6">
            <label>Other Document</label>
            <input
              type="text"
              class="form-control"
              v-model="clientDoc.otherDoc"
              
            />
          </div>

          <div class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <RouterLink to="/clients-doc" class="btn btn-danger mt-3">Cancel</RouterLink>
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
      clientDoc: {
        clientId: "",
        ssn: "",
        driverLicense: "",
        otherDoc: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let docURL = "http://localhost:8080/clients-doc";
      axios
        .post(docURL, this.clientDoc)
        .then(() => {
          //changing the view to the list
          this.$router.push("/clients-doc");
          this.clientDoc = {
            clientId: "",
            ssn: "",
            driverLicense: "",
            otherDoc: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
