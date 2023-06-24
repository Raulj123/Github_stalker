<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton';
 export let data: PageData;
 
const location = data.user_info[0].location;
 const name = data.user_info[0].name;
 const bio = data.user_info[0].bio;
 const avatar = data.user_info[0].avatar_url;
 const followers = data.user_info[0].followers;
const following = data.user_info[0].following 

  
   
 
    
  
 console.log(location)
</script>
<h1>{location},{name},{bio},{avatar},{followers},{following}</h1>
<div class ="container">
<form action="?/getData" method="POST">
  <input type="text" name="user" class="variant-filled-primary" placeholder="UserName" rows={1} required>
       <button class="btn variant-filled-primary"type="submit">Stalk</button>
</form>
    </div>
<div class="card w-[75%] mx-auto mt-20">
  <div class="header_contianer">
  <Avatar src="{avatar}" width="w-32" rounded="rounded-full" />
    </div>
</div>

  <style>
  .container{
    display:flex;
    justify-content:center;
    align-items:center;
    display-direction:row;
  }
  .container input{
    border-radius:10px;
  }
  .container button{
    border-radius:10px;
    padding:9px;
    margin-left:5px;
  }
  .header_contianer{
    margin-left: 2rem;
    display:flex;
    display-direction: row;
  }
 @media (max-width: 992px) {
    button{
      padding:3px;
    }
    .container button{
      padding:9px; 
    }
  }

</style>
