Vue.component('tooltip', {
    
    template: `
    <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Netvork is an social media multi-user app used to upload blogs and images. User can follow others, see others posts and can do much more">
<button class="btn btn-primary btn-sm" style="pointer-events: none; background-color:#7089a3; border-color:#0c151c; color:white; margin:6px 0px 0px 6px; border-radius:15px; padding:8px 16px 8px 16px;" type="button">Help</button>
</span>
    `})

Vue.component('login_form', {
    template: `
    <div>
      
      <div class="header">
	  <p>
	  <h1 style="font-size:60px;"><b>Netvork</b></h1>
	  <h5 style="font-size:20px;"><b>A platform to post photos and blogs</b></h5>
	  </p>
	  </div>
		  
		 
		  <form style="margin-top: 40px; margin-bottom:20px;" class="form-group fom" id="form2" method="POST" enctype="multipart/form-data" action="/signup">
		  		
		  	  <input class="input" type="text" name="name" placeholder="Name" required/>
		    
			  <input class="input" type="text" name="email" placeholder="Email" required/>
			
			  <input class="input" type="password" name="password" placeholder="Password" required/>
			  
			  <p style="margin-bottom:-10px; color: #a1bdd9"><b>Add a profile picture</b></p>
			  
			  <input type="file" class="input" id="imgfile" style="color: white; margin-left:0px; padding-left:10px;" accept="image/*" name="imgfile">
		      			
			  <input class="input" type="submit" name="Login" value="Register"/>
			
		  

          </form>
          
          
	<div style="text-align:center;">
          <a href="/login">Login<a>
    </div>
    </div>
        `,
    data: function() {
      return {
          email: null,
          password: null,
          messages: []
        }
    },
    methods: {
        Login: function(name) {
            
            this.messages.push({
                "email": this.email,
                "message": this.password
            });
            formData = new FormData(document.getElementById('form2'));
            console.log(this.Password);
            
            let data={"name":"name","password":"password"}
			fetch("http://localhost:8080/login?include_auth_token",{"headers" :{'Content-Type':'application/json'},method:'POST',body:JSON.stringify(data)}).then(response=>response.json()).then(data=>console.log(data));



            this.email="";
            this.password="";
            console.log(formData.get("name"));
                    
                   
        }
    },
    computed: {
        count: function() {
            return this.messages.length;
        }
    }
})


var app = new Vue({
    el: '#app'
})
