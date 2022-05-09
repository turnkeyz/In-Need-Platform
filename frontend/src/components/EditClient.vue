<template> 
  <div class="row m-5">
    <h3 class="text-center">Edit Client</h3>
    <div class="col-md-12">
      <form @submit.prevent="handleUpdateForm">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Client ID<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required readonly
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>First Name<span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="client.firstName"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Last Name<span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="client.lastName"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label>Phone Number<span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="client.phoneNumber"
              required
              @input="formatPhone"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Birthday<span class="text-danger"> *</span></label>
            <input
              type="Date"
              class="form-control"
              v-model="client.birthday"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label>Zip Code<span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="client.zipCode"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-4">
            <label>Gender<span class="text-danger"> *</span></label>
            <select v-model="client.gender" required class="form-control">
              <option value="" disabled>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label>Race/Ethnicity<span class="text-danger"> *</span></label>
            <select v-model="client.raceEthnicity" required class="form-control">
              <option value="" disabled>Select</option>
              <option >{{storedraceEthnicity}}</option>
              <option v-for="raceEthnicity in RaceEthnicity" :key="raceEthnicity._id">
                {{ raceEthnicity.raceEthnicity}}
              </option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label>No of Children</label>
            <input
              type="number"
              class="form-control"
              v-model="client.numChildren"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="client.isNeedSupport"
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Is Need Support ?
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="client.is65orOlder"
                id="Older"
                checked
              />
              <label class="form-check-label" for="Older">
                Is 65 or Older ?
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="client.isVeteran"
                id="Veteran"
                checked
              />
              <label class="form-check-label" for="Veteran">
                Is Veteran ?
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="client.isGettingVaccine"
                id="Vaccinited"
                checked
              />
              <label class="form-check-label" for="Vaccinited">
                Is Getting Vaccine ?
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="client.isVaccinated"
                id="Vaccinited"
                checked
              />
              <label class="form-check-label" for="isVaccinated">
                Is Vaccinated ?
              </label>
            </div>
          </div>
        </div>
        <div class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save </button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
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
      client: {},
      RaceEthnicity:[],
      storedraceEthnicity: "",
    };
  },
   created() {
        let apiURL = `http://localhost:8080/clients/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.client = res.data[0];
            this.storedraceEthnicity = this.client.raceEthnicity
            console.log("data",this.client);
        })
        let apiURL2 = `http://localhost:8080/raceEthnicity`;
        axios.get(apiURL2).then((res) => {
            this.RaceEthnicity = res.data;
            console.log("data",this.RaceEthnicity);
        })
    },
  methods: {
    //https://stackoverflow.com/questions/58394745/vue-js-aplying-phone-number-format
    formatPhone() {
             var x = this.client.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.client.phoneNumber = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
              },
    
     handleUpdateForm() {
            let apiURL = `http://localhost:8080/clients/${this.$route.params.id}`;

            axios.put(apiURL, this.client).then((res) => {
                console.log(res)
                this.$router.push('/clients')
            }).catch(error => {
                console.log(error)
            });
        }
  },
};
</script>
