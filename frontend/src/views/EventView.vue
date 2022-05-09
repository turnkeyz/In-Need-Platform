<template>
  <div><RouterLink to="/createevent" class="btn btn-primary m-1 justify-content-start" style="width:200px;">Add New Event</RouterLink>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>id </th>
          <th>Event Name </th>
          <th>Date </th>
          <th>Time </th>
          <th>Location </th>
          <th>Workers </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in Events" :key="event._id">
          <td>{{ event._id }}</td>
          <td>{{ event.eventName }}</td>
          <td>{{ event.date}}</td>
          <td>{{ event.time}}</td>
          <td>{{ event.location.address }} , {{event.location.city}} , {{event.location.zipcode}}</td>
          <td>{{ event.workers[0]}}</td>
          <td>
            <router-link :to="{name: 'editevent', params: { id: event._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteEvent(event._id)" class="btn btn-danger mx-2">Delete</button>
            <!--<button @click.prevent="addWorker(event._id)" class="btn btn-info mx-2">Add Worker</button>-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Events: []
            }
        },
        //this is using created hook 
        created() {
            let apiURL = 'http://localhost:8080/event';
            axios.get(apiURL).then(res => {
                this.Events = res.data;
            }).catch(error => {
                console.log(error)
            });             
        },
        methods: {
            deleteEvent(id){
                let apiURL = `http://localhost:8080/event/${id}`;
                let indexOfArrayItem = this.Events.findIndex(i => i._id === id);
                let name = this.Events[indexOfArrayItem].eventName;
                if (window.confirm(`Do you want to delete event ? ${name}`)) {
                    axios.delete(apiURL).then(() => {
                        this.Events.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>