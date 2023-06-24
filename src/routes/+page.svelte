<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton';
 export let data: PageData;
 
const location = data.user_info[0].location;
 const name = data.user_info[0].name;
 const bio = data.user_info[0].bio;
 const avatar = data.user_info[0].avatar_url;
 const followers = data.user_info[0].followers;
const following = data.user_info[0].following 
const user = data.user_info[0].login
  
   
 
    
  
</script>
<div class ="container">
<form action="?/getData" method="POST">
  <input type="text" name="user" class="variant-filled-primary" placeholder="UserName" rows={1} required>
       <button class="btn variant-filled-primary"type="submit">Stalk</button>
</form>
    </div>
<div class=" Box card w-[50%] mx-auto mt-20">
  <div class="Card_container">
  <div class="First_col">
  <img src="{avatar}" alt="{avatar}" class="mt-5 mb-5" />
      <p>{followers}</p>
      <p>{following}</p>
      </div>
    <div class="Second_col">
        <h2 class="p-5 pb-0 font-bold ">{name}</h2>
        <h3 class="p-5 pt-2 pb-0 font-light">{user}</h3>
        <h2 class="p-5 pt-2">{bio}</h2>
      </div>
  

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
  .Card_container{
    display:grid;
  grid-template-columns: repeat(4, 1fr);
  }
  .Second_col{
    grid-col-start:2;
    grid-column: span 3;
  }
  .First_col{
    margin-left: 1rem;
     grid-row-start: 1;
    grid-column-start: span 1;
  }
  .First_col img{
    width:90px;
    height:90px;
    border-radius:50%;
  }
  
   
 @media (max-width: 992px) {
    button{
      padding:3px;
    }
    .container button{
      padding:9px; 
    }
       .First_col h2 {
      font-size: 0.9rem;
    }
    .First_col img{
      width: 60px;
      height:60px;
    }
    .Box{
      width: 70%;
    }
  }

</style>
