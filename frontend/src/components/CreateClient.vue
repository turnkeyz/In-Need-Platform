<template> 
  <div class="row m-5">
    <h3 class="text-center">Create Client</h3>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -------------------------Client form  ---------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
      <div id="client" class="col-md-12">
        <h3 class="text-center">Client</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Client ID<span class="text-danger"> *</span></label>
                <input
                  type="number"
                  class="form-control"
                  v-model="client.clientId"
                  required
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
              <select id="select1" v-model="client.gender" required class="form-control">
                <option value="" disabled>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label>Race/Ethnicity<span class="text-danger"> *</span></label>
              <select id="select2" 
                v-model="client.raceEthnicity"
                required
                class="form-control"
              >
                <option value="" disabled>Select</option>
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
            <button id="save1" class="btn btn-primary mt-3">Save</button> &nbsp;
            <RouterLink id="cancel1" to="/clients" class="btn btn-danger mt-3"
              >Cancel</RouterLink
            >
          </div>
        </form>                     
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -------------------------Client Doc form  ------------------------------ -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    <div id="clientdoc" class="col-md-12">
      <h3 class="text-center">Client Doc</h3>
      <form @submit.prevent="handleSubmitFormClientdoc">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Client ID<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required disabled
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>SSN<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="clientDoc.ssn"
                required
              />
            </div>
          </div>
         
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Driver License <span class="text-danger"> *</span></label>
            <input
              type="number"
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
        <div id="b2" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkip1" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  Contact Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    <div id="contact" class="col-md-12">
      <h3 class="text-center">Contact</h3>
      <form @submit.prevent="handleSubmitFormContact">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Client ID<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required disabled
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Cell Number <span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="contact.cellNum"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Work Number</label>
            <input
              type="number"
              class="form-control"
              v-model="contact.workNum"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Home Number</label>
            <input
              type="number"
              class="form-control"
              v-model="contact.homeNum"
            /> <div class="col-md-6">
          </div>
          </div>
          <div class="form-group col-md-6">
            <label>Personal Email</label>
            <input
              type="email"
              class="form-control"
              v-model="contact.personalEmail"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Marital Status</label>
            <select id="select1" v-model="contact.maritalStatus" required class="form-control">
                <option value="" disabled>Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widow">Widow</option>
              </select>
            
          </div>
          <div class="form-group col-md-6">
            <label>Language</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.language"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label>Priority Population</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.priorityPopulation"
             
            />
          </div>
          
        </div>
        <div id="b3" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkip2" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  Event Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    <div id="event" class="col-md-12">
      <h3 class="text-center">Event</h3>
      <form @submit.prevent="handleSubmitFormEvent">
        <div class="row">
          <select id="select3" 
                v-model="event1.eventName"
                required
                class="form-select"
                @change="handleSelectedevent"
              >
                 <option value="" disabled >Select Event</option>
                <option >New Event</option>
                <option v-for="event1 in Events" :key="event1._id">
                  {{ event1.eventName}}
                </option>
              </select>
          <div class="col-md-6">
            <div class="form-group">
              <label>Event Name<span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="event.eventName"
                required disabled
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Event ID<span class="text-danger"> *</span></label>
              
              <input id="eventid"
                type="number"
                class="form-control"
                v-model="event._id"
                 disabled
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Date<span class="text-danger"> *</span></label>
              <input
                type="date"
                class="form-control"
                v-model="event.date"
                required disabled
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Time<span class="text-danger"> *</span></label>
              <input
                type="time"
                class="form-control"
                v-model="event.time"
                required disabled
              />
            </div>
          </div>
          
          <div class="form-group col-md-6">
            <label>Address<span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="event.location.address"
              required disabled
            />
          </div>
           <div class="form-group col-md-6">
            <label>City<span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="event.location.city"
              required disabled
            />
          </div>
           <div class="form-group col-md-6">
            <label>Zip Code<span class="text-danger"> *</span></label>
            <input
              type="text"
              class="form-control"
              v-model="event.location.zipcode"
              required disabled
            />
          </div>
          <div id ="selectworker" class="form-group col-md-6">
              <label>Add worker<span class="text-danger"> *</span></label>
               <!-- https://stackoverflow.com/questions/50648407/checkbox-array-in-vue-js -->
               <!-- here we use checkboxs to input multiple workiers for this to work we need to set the default value for evet.worker to [] -->
              <div v-for="workers in Workers" :key="workers._id">
                <input type="checkbox" v-model="event.workers" :value="workers.firstName"/>
                <label> _{{workers.firstName}} {{workers.lastName}}</label>
             </div> 
          </div>

         </div>

        <div id="btn-event" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkipEvent" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  Education Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    <div id="education" class="col-md-12">
      <h3 class="text-center">Education</h3>
      <form @submit.prevent="handleSubmitFormEducation">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>clientId<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required disabled
                
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>hasAttended<span class="text-danger"> *</span></label>
              
              <input id="eventid"
                type="checkbox"
                class="form-check-input"
                v-model="education.hasAttended"
                 required
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>school<span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="education.school"
                required 
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>lastGrade</label>
              <input
                type="text"
                class="form-control"
                v-model="education.lastGrade"
                
              />
            </div>
          </div>
          
          <div class="form-group col-md-6">
            <label>hasGraduated</label>
            <input
              type="checkbox"
              class="form-check-input"
              v-model="education.hasGraduated"
             
            />
          </div>
           <div class="form-group col-md-6">
            <label>degree</label>
            <input
              type="text"
              class="form-control"
              v-model="education.degree"
            
            />
          </div>
           <div class="form-group col-md-6">
            <label>certification<span class="text-danger"> *</span></label>
            <input
              type="checkbox"
              class="form-check-input"
              v-model="education.certification"
              
            />
          </div>
          
        </div>
        <div id="btn-education" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkipEducation" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  Employment Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    <div id="employment" class="col-md-12">
      <h3 class="text-center">Employment</h3>
      <form @submit.prevent="handleSubmitFormEmployment">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>clientId<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required disabled
                
              />
            </div>
          </div>
          
          <div class="col-md-2">
            <div class="form-group">
              <label>employmentStatus<span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="employment.employmentStatus"
                required 
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>years</label>
              <input
                type="number"
                class="form-control"
                v-model="employment.years"
                
              />
            </div>
          </div>
          
          
           <div class="form-group col-md-6">
            <label>employer</label>
            <input
              type="text"
              class="form-control"
              v-model="employment.employer"
            
            />
          </div>
           <div class="form-group col-md-6">
            <label>occupation</label>
            <input
              type="text"
              class="form-control"
              v-model="employment.occupation"
            
            />
          </div>
           
          
        </div>
        <div id="btn-employment" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkipEmployment" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
     <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  health Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    <div id="health" class="col-md-12">
      <h3 class="text-center">Health</h3>
      <form @submit.prevent="handleSubmitFormHealth">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>clientId<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required disabled
                
              />
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>hasHealthInsurance</label>
            <input
              type="checkbox"
              class="form-check-input"
              v-model="health.hasHealthInsurance"
              
            />
          
            <div class="col-md-6">
            <div class="form-group">
              <label>healthInsuranceProgram</label>
              <input
                type="text"
                class="form-control"
                v-model="health.healthInsuranceProgram"
                
              />
            </div>
          </div>
          </div>
          
          
          
          <div class="col-md-6">
            <div class="form-group col-md-6">
            <label>hasFoodStamps</label>
            <input
              type="checkbox"
              class="form-check-input"
              v-model="health.hasFoodStamps"
              
            />
          </div>
            <div class="form-group">
              <label>foodStampsReason</label>
              <input
                type="text"
                class="form-control"
                v-model="health.foodStampsReason"
                
              />
            </div>
          </div>
        </div>
        <div id="btn-health" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkipHealth" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  Income Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    <div id="income" class="col-md-12">
      <h3 class="text-center">Income</h3>
      <form @submit.prevent="handleSubmitFormIncome">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>clientId<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required disabled
                
              />
            </div>
          </div>
           <div class="col-md-6">
              <div class="form-group">
              <label>isHeadofHousehold</label>
              <input
              type="checkbox"
              class="form-check-input"
              v-model="income.isHeadofHousehold"
              />
              </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>monthlyIncome<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.monthlyIncome"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>pouseSupport<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.pouseSupport"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>workComp<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.workComp"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>childSupport<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.childSupport"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>tanf<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.tanf"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>ssi<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.ssi"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>unemployment<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.unemployment"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>socialSecurity<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.socialSecurity"
                required 
                
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>otherIncome<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="income.otherIncome"
                required 
                
              />
            </div>
          </div>

        </div>
        <div id="btn-income" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkipIncome" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  Intake Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    
    <div id="intake" class="col-md-12">
      <h3 class="text-center">Intake</h3>
      <form @submit.prevent="handleSubmitFormIntake">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>clientId<span class="text-danger"> *</span></label>
              <input
                type="number"
                class="form-control"
                v-model="client.clientId"
                required disabled
                
              />
            </div>
          </div>
           
          <div class="col-md-6">
            <div class="form-group">
              <label>startDate<span class="text-danger"> *</span></label>
              <input
                type="date"
                class="form-control"
                v-model="intake.startDate"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>endDate</label>
              <input
                type="date"
                class="form-control"
                v-model="intake.endDate"                
              />
            </div>
          </div>
        </div>
        <div id="btn-intake" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
          <button @click.prevent="handleSkipIntake" class="btn btn-primary mt-3">Skip</button> &nbsp;
          <RouterLink to="/clients" class="btn btn-danger mt-3"
            >Cancel</RouterLink
          >
        </div>
      </form>
    </div>
    <!-- ----- ------------------------------------------------------------ ----- -->
    <!-- -----------------------  Organization Form  --------------------------------- -->
    <!-- ----- ------------------------------------------------------------ ----- -->
    
    <div id="organization" class="col-md-12">
      <h3 class="text-center">Organization</h3>
      <form @submit.prevent="handleSubmitFormOrg">
        <div class="row">
          <select id="selectorg" 
                v-model="organizationselected.organizationName"
                required
                class="form-select"
                @change="handleSelectedOrg"
              >
                 <option value="" disabled >Select Organization</option>
                <option >New Organization</option>
                <option v-for="organizationselected in Organizations" :key="organizationselected._id">
                  {{ organizationselected.organizationName}}
                </option>
              </select>
          <div class="col-md-6">
            <div class="form-group">
              <label>Organization Name<span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="organization.organizationName"
                required disabled
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Organization ID<span class="text-danger"> *</span></label>
              
              <input id="eventid"
                type="number"
                class="form-control"
                v-model="organization._id"
                 disabled
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Description<span class="text-danger"> *</span></label>
              <input
                type="text"
                class="form-control"
                v-model="organization.description"
                required disabled
              />
            </div>
          </div>
           
        </div>
        <div id="btn-organization" class="form-group col-md-4">
          <button class="btn btn-primary mt-3">Save</button> &nbsp;
         
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
      client: {
        clientId: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthday: "",
        zipCode: "",
        isNeedSupport: false,
        gender: "",
        is65orOlder: false,
        numChildren: 0,
        isVeteran: false,
        isGettingVaccine: false,
        isVaccinated: false,
        raceEthnicity: "",
      },
      RaceEthnicity:[],
      clientDoc: {},
      contact: {},
      event: {eventName: "" ,location:{}, workers: []},
      event1: {eventName: "",location:{}},
      Events: [],
      Workers:[],
      education: {},
      employment: {employmentStatus:"",},
      health: {},
      income: {},
      intake:{},
      Organizations:[],
      organizationselected: {organizationName: "" , description: ""},
      organization: {organizationName: "" , description: ""},
      contact:{},
    };
  },
  created() {
    //get raceEthnicity options
            let apiURL2 = `http://localhost:8080/raceEthnicity`;
        axios.get(apiURL2).then((res) => {
            this.RaceEthnicity = res.data;
            console.log("data",this.RaceEthnicity);
            document.getElementById("clientdoc").style.visibility = "hidden";
           document.getElementById("contact").style.visibility = "hidden";
            document.getElementById("event").style.visibility = "hidden";
            document.getElementById("selectworker").style.visibility = "hidden";
            document.getElementById("education").style.visibility = "hidden";
            document.getElementById("employment").style.visibility = "hidden";
            document.getElementById("health").style.visibility = "hidden";
            document.getElementById("income").style.visibility = "hidden";
            document.getElementById("intake").style.visibility = "hidden";
            document.getElementById("organization").style.visibility = "hidden";
        })
        .catch((error) => {
          console.log(error);
        });
    // get a list of workers for creating a new event
    let apiURL3 = `http://localhost:8080/worker`;
        axios.get(apiURL3).then((res) => {
            this.Workers = res.data;
            console.log("data",this.Workers);   
        })
        .catch((error) => {
          console.log(error);
        });
    // get events to choose from
    let apiURL = 'http://localhost:8080/event';
            axios.get(apiURL).then(res => {
                this.Events = res.data;
            }).catch(error => {
                console.log(error)
            });  
    // get Orgs to choose from
    let apiURL4 = 'http://localhost:8080/organizations';
            axios.get(apiURL4).then(res => {
                this.Organizations = res.data;
            }).catch(error => {
                console.log(error)
            });           
        
  },
  methods: {
    //https://stackoverflow.com/questions/58394745/vue-js-aplying-phone-number-format
    formatPhone() {
        var x = this.client.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    this.client.phoneNumber = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
    },
    handleSubmitForm() {
      let apiURL = "http://localhost:8080/clients";
      axios
        .post(apiURL, this.client)
        .then(() => {
          //show the clintdoc dive and hid sav and cancel btns
          document.getElementById("clientdoc").style.visibility = "visible";
          document.getElementById("save1").style.visibility = "hidden";
          document.getElementById("cancel1").style.visibility = "hidden";
          document.getElementById("select1").disabled = true;
          document.getElementById("select2").disabled = true;
          // set input field in client div to disabled
          //https://stackoverflow.com/questions/55905055/vue-need-to-disable-all-inputs-on-page
          //user5283119
          let elems = document.getElementById('client').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }
          
        })
    },
    handleSubmitFormClientdoc() {
      let apiURL = "http://localhost:8080/clients-doc";
      this.clientDoc.clientId=this.client.clientId;
      axios
        .post(apiURL, this.clientDoc)
        .then(() => { 
          console.log("saved");    
        })

          document.getElementById("contact").style.visibility = "visible";
          document.getElementById("b2").style.visibility = "hidden"; 
          let elems = document.getElementById('clientdoc').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            } 
    },
    handleSkip1(){
          this.clientDoc= {};
          document.getElementById("contact").style.visibility = "visible";
          document.getElementById("b2").style.visibility = "hidden"; 
          let elems = document.getElementById('clientdoc').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
          }      
    },

    handleSubmitFormContact(){
          this.contact.clientId=this.client.clientId;
          let apiURL = "http://localhost:8080/contact";
          axios.post(apiURL, this.contact)
          .then(() => {   console.log("saved");     
        })

          document.getElementById("event").style.visibility = "visible";
          document.getElementById("b3").style.visibility = "hidden"; 
          let elems = document.getElementById('contact').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            } 
    },
// contact 
    handleSkip2(){
          this.contact= {};
          document.getElementById("event").style.visibility = "visible";
          document.getElementById("b3").style.visibility = "hidden";
          let elems = document.getElementById('contact').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
          }      
    },
    handleSelectedevent() {
        if (this.event1.eventName === "New Event"){
          let elems = document.getElementById('event').getElementsByTagName('input');
          console.log("disabled = false ");
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = false;
          this.event = {eventName: "" ,location:{}, workers: []}
           }
           document.getElementById("selectworker").style.visibility = "visible";
        }
        else {
          let elems = document.getElementById('event').getElementsByTagName('input');
          console.log("disabled = true");
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
          let indexOfArrayItem = this.Events.findIndex(i => i.eventName === this.event1.eventName);
          this.event = this.Events[indexOfArrayItem];
           }
          document.getElementById("selectworker").disabled = true;
          document.getElementById("selectworker").style.visibility = "hidden";
         }
    },
    handleSubmitFormEvent() {
      if (this.event === "New Event"){
        let apiURL = "http://localhost:8080/event";
          axios.put(apiURL, this.event)
          .then(() => {
        })}
        else{let apiURL = "http://localhost:8080/event";
          axios.post(apiURL, this.event)
          .then(() => {
        })}

          document.getElementById("education").style.visibility = "visible";
          document.getElementById("btn-event").style.visibility = "hidden"; 
          document.getElementById("selectworker").style.visibility = "hidden";
          //
          let elems = document.getElementById('event').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }        

    },
    handleSkipEvent() {
        this.event= {eventName: "" ,location:{}, workers: []};
          document.getElementById("education").style.visibility = "visible";
          document.getElementById("btn-event").style.visibility = "hidden"; 
          document.getElementById("selectworker").style.visibility = "hidden";
          //
          let elems = document.getElementById('event').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }   
    },
    handleSubmitFormEducation () {
        //save the client id to education attr
        this.education.clientId = this.client.clientId;
        let apiURL = "http://localhost:8080/education";
          axios.post(apiURL, this.event)
          .then(() => {
        })

          document.getElementById("employment").style.visibility = "visible";
          document.getElementById("btn-education").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('education').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }        


    },
    handleSkipEducation() {
        this.education= {};
          document.getElementById("employment").style.visibility = "visible";
          document.getElementById("btn-education").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('education').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }   


    },
    handleSubmitFormEmployment () {
        //save the client id to education attr
        this.employment.clientId = this.client.clientId;
        let apiURL = "http://localhost:8080/employment";
          axios.post(apiURL, this.employment)
          .then(() => {
          document.getElementById("health").style.visibility = "visible";
          document.getElementById("btn-employment").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('employment').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }        
        })


    },
    handleSkipEmployment() {
        this.employment= {};
          document.getElementById("health").style.visibility = "visible";
          document.getElementById("btn-employment").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('employment').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }   


    },
    //health
    handleSubmitFormHealth () {
        //save the client id to education attr
        this.health.clientId = this.client.clientId;
        let apiURL = "http://localhost:8080/health";
          axios.post(apiURL, this.health)
          .then(() => { 
        })

          document.getElementById("income").style.visibility = "visible";
          document.getElementById("btn-health").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('health').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }       


    },
    handleSkipHealth() {
        this.health= {};
          document.getElementById("income").style.visibility = "visible";
          document.getElementById("btn-health").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('health').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }   


    },
    //income
    handleSubmitFormIncome () {
        //save the client id to education attr
        this.income.clientId = this.client.clientId;
        let apiURL = "http://localhost:8080/income";
          axios.post(apiURL, this.income)
          .then(() => {      
        })

          document.getElementById("intake").style.visibility = "visible";
          document.getElementById("btn-income").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('income').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }  


    },
    handleSkipIncome() {
        this.income= {};
          document.getElementById("intake").style.visibility = "visible";
          document.getElementById("btn-income").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('income').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }   


    },
    //intake
    handleSubmitFormIntake () {
        //save the client id to intake attr
        this.intake.clientId = this.client.clientId;
        let apiURL = "http://localhost:8080/intake";
          axios.post(apiURL, this.intake)
          .then(() => {console.log("saved")
        })

          document.getElementById("organization").style.visibility = "visible";
          document.getElementById("btn-intake").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('income').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }        


    },
    handleSkipIntake() {
        this.intake= {};
          document.getElementById("organization").style.visibility = "visible";
          document.getElementById("btn-intake").style.visibility = "hidden"; 
          
          //
          let elems = document.getElementById('intake').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }   


    },
    //Organization
    handleSelectedOrg() {
        if (this.organizationselected.organizationName === "New Organization"){
          let elems = document.getElementById('organization').getElementsByTagName('input');
          console.log("disabled = false ");
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = false;
           }
           this.organization = {organizationName: "" ,description: "", };
           
        }
        else {
          let elems = document.getElementById('organization').getElementsByTagName('input');
          console.log("disabled = true");
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
          }
          let indexOfArrayItem = this.Organizations.findIndex(i => i.organizationName === this.organizationselected.organizationName);
          this.organization = this.Organizations[indexOfArrayItem];
           
         }
    },
    handleSubmitFormOrg() {
      if (this.organizationselected.organizationName === "New Organization"){
        let apiURL = "http://localhost:8080/organizations";
          axios.post(apiURL, this.organization)
          .then(() => {
        })
      }
      else{
        let indexOfArrayItem = this.Organizations.findIndex(i => i.organizationName === this.organizationselected.organizationName);
          this.organization = this.Organizations[indexOfArrayItem];
        this.organization.clientId=this.client.clientId;
        let apiURL = `http://localhost:8080/organizations/${this.organization._id}`;
          axios.post(apiURL, this.organization)
          .then(() => {
          //document.getElementById("organization").style.visibility = "visible";
          document.getElementById("btn-organization").style.visibility = "hidden"; 
          //
          let elems = document.getElementById('organization').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }        
        })

          //document.getElementById("organization").style.visibility = "visible";
          document.getElementById("btn-organization").style.visibility = "hidden"; 
          //
          let elems = document.getElementById('organization').getElementsByTagName('input');
          console.log(elems);
          for(let i = 0; i < elems.length; i++) {
          elems[i].disabled = true;
            }        
          this.$router.push('/clients');
      }
    },
  },
};
</script>
