<template>
  <div class="row m-5">
    <h3 class="text-center">Edit Document</h3>
    <div class="col-md-12">
      <form @submit.prevent="handleUpdateForm">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Client ID</label>
              <input
                type="number"
                class="form-control"
                v-model="clientDoc.clientId"
                required readonly
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
            <label>DL</label>
            <input
              type="text"
              class="form-control"
              v-model="clientDoc.driverLicense"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label>Other Document</label>
            <input
              type="text"
              class="form-control"
              v-model="clientDoc.otherDoc"
              
            />
          </div>
        </div>
        <div class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save </button> &nbsp;
          <RouterLink to="/client_doc" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
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
      clientDoc: {},
    };
  },
   created() {
        let apiURL = `http://localhost:8080/clients-doc/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.clientDoc = res.data[0];
            console.log("datat",this.clientDoc)
        })
    },
  methods: {
    
     handleUpdateForm() {
            let apiURL = `http://localhost:8080/clients-doc/${this.$route.params.id}`;

            axios.put(apiURL, this.clientDoc).then((res) => {
                console.log(res)
                this.$router.push('/clients-doc')
            }).catch(error => {
                console.log(error)
            });
        }
  },
};
</script>
