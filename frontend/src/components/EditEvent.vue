<template>
  <div class="row m-5">
    <h3 class="text-center">Edit Event</h3>
    <div class="col-md-12">
      <form @submit.prevent="handleSubmitForm">
        <div class="row">
          <div class="col-md-2">
            <div class="form-group">
              <label>Event ID</label>
              <input
                disabled
                type="number"
                class="form-control"
                v-model="event._id"
                required
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Date <span class="text-danger"> *</span></label>
              <input
                type="date"
                class="form-control"
                v-model="event.date"
                required
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Time <span class="text-danger"> *</span></label>
              <input
                type="time"
                class="form-control"
                v-model="event.time"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Event Name <span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="event.eventName"
                required
              />
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Address <span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="event.location.address"
              required
            />
          </div>
           <div class="form-group col-md-6">
            <label>City <span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="event.location.city"
              required
            />
          </div>
           <div class="form-group col-md-6">
            <label>Zip Code <span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="event.location.zipcode"
              required
            />
          </div>
            <div class="form-group col-md-6">
              <label>Add worker<span class="text-danger"> *</span></label>
              <select id="select2" 
                v-model="event.workers"
                required
                class="form-control"
              >
                <option value="" disabled>Select</option>
                <option v-for="workers in Workers" :key="workers._id">
                  {{ workers.firstName}}
                </option>
              </select>
            </div>
        </div>
        <div class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <RouterLink to="/events" class="btn btn-danger mt-3"
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
      event: {
        _id: "",
        eventName: "",
        date: "",
        time: "",
        location: {}
      },
      Workers:[],
    };
  },
  created() {
        let apiURL = `http://localhost:8080/event/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.event = res.data[0];
            console.log("data",this.event)
        })
        .catch((error) => {
          console.log(error);
        });
        let apiURL2 = `http://localhost:8080/worker`;
        axios.get(apiURL2).then((res) => {
            this.Workers = res.data;
            console.log("data",this.Workers);   
        })
        .catch((error) => {
          console.log(error);
        });
    },
  methods: {
    handleSubmitForm() {
      let apiURL = `http://localhost:8080/event/${this.$route.params.id}`;
      axios
        .put(apiURL, this.event)
        .then((res) => {
            console.log(res)
          //changing the view to the list
          this.$router.push("/events");
          this.event = {
            _id: "",
            eventName: "",
            date: "",
            time: "",
            location: {}
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
