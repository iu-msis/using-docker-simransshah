var aboutMe = new Vue({
el: '#aboutMeProfile',
data: {
  users: ['hi']
},
methods :{
  fetchUsers(){

    //Means the same at this
       fetch('https://randomuser.me/api/1.2')
       .then(function(response) {return response.json()})
       .then(function(json) {aboutMe.users = json});

    //.catch(/*function goes here*/)

    //promise object is created. fetch works asynchronously
  }
},
created() {
  this.fetchUsers();
}
});
