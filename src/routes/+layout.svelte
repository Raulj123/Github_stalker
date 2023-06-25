<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
  import '@fortawesome/fontawesome-free/css/all.css'
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>
  
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><LightSwitch /></svelte:fragment>
	<svelte:fragment slot="trail">Bars here</svelte:fragment>
</AppBar>

    <div class="container mx-auto">
  <h1 class="gradient-heading">Github stalker</h1>
<img src="./stalker.png" alt="logo">
    <div class="container_second">
    <p class= "mt-5 mb-5 font-bold ">Enter a GitHub username, press 'Stalk,' and explore their profile stats and insights. Example shown below.</p>

    </div>
    </div>
<slot />
<footer class="text-center mt-10 p-5">Made by Raul</footer>


<style>
  .container{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

  }
  .container img{
    border-radius:15px;
}
  .container_second{
    margin-top:5px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  h1{
    font-size:3rem;
    margin-top:30px;
    margin-bottom:30px;
  }
  
  p{
      max-width: 80%;
  }
 @media (max-width: 992px) {
    h1{
        font-size:1.7rem;
    }
    img{
      height: 25%;
      width: 25%;
    }
    p{
      font-size:0.9rem;
    }
 
  }
</style>
