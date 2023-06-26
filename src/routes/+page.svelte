<script lang="ts">

import { onMount } from 'svelte';

 export let data: PageData;
const showMe = data.user_info[0].show;
const user_not_found = data.user_info[0].message;
  const company = data.user_info[0].company
const location = data.user_info[0].location;
 const name = data.user_info[0].name;
 const bio = data.user_info[0].bio;
 const avatar = data.user_info[0].avatar_url;
 const followers = data.user_info[0].followers;
const following = data.user_info[0].following 
const user = data.user_info[0].login
  const blog = data.user_info[0].blog
 const protocol = "http://" 
const repos = data.user_info[0].public_repos
  const repos_lists = data.user_info[0].repos_url
  const gitHub = data.user_info[0].html_url
 const created = data.user_info[0].created_at;
const updated = data.user_info[0].updated_at;
console.log(updated);
 let maxStars = 0 
      let mostLikedRepo = null
let topLanguages =''
let repo_name =''
  onMount(async () => {
    try {
      const response = await fetch(repos_lists);
      const data = await response.json();
      
      const languageCounts = {};
           data.forEach(repo => {
        const language = repo.language;
        const stars = repo.stargazers_count;
        const repo_name_of_most = repo.name;
        if (stars > maxStars){
          maxStars = stars
          mostLikedRepo = repo;
          repo_name = repo_name_of_most;
        }
        if (language) {
          if (languageCounts[language]) {
            languageCounts[language]++;
          } else {
            languageCounts[language] = 1;
          }
        }
      });
       const sortedLanguages = Object.keys(languageCounts).sort((a, b) => {
        return languageCounts[b] - languageCounts[a];
      });

      topLanguages = sortedLanguages.slice(0, 3);
      
     
    } catch (error) {
      console.error('Error:', error);
    }
  });
console.log(user)
</script>

<div class ="container mx-auto">
<form action="?/getData" method="POST"> 
  <input type="text" name="user" class="variant-filled-primary placeholder-white" placeholder="UserName" rows={1} required>
       <button class="btn variant-filled-primary"type="submit">Stalk</button>
</form>
    </div>
{#if !user_not_found || showMe}
<div class=" Box card w-[50%] mx-auto mt-10 p-2 rounded-lg">
  <div class="Card_container">
  <div class="First_col">
  <img src="{avatar}" alt="{avatar}" class="mt-5 mb-5" />
      <div class="flex flex-row flex-wrap">
      <p class="mr-1 pb-0"><i class="fa-solid fa-users mr-2"></i>{followers} Followers</p>
      <p>- {following} Following</p>
        </div>
        <p><i class="fa-solid fa-location-dot mr-2 pt-2 pb-0"></i>{location}</p>
      <a href="{protocol + blog}" target="_blank"><i class="fa-solid fa-link mr-2 pt-2 pb-0"></i>Blog/Website</a>
      <p><i class="fa-solid fa-building mr-2 pt-2 pb-0"></i>{company}</p>
      </div>
    <div class="Second_col">
        <h2 class="p-5 pb-0 font-bold gradient-sub">{name}</h2>
        <h3 class="p-5 pt-2 pb-0 font-light">{user}</h3>
        <h2 class="p-5 pt-2 pb-0">{bio}</h2>
        <h3 class="p-5 pt-2 pb-0 font-bold">Public Repos: {repos}</h3>
      <div class="flex flex-row flex-wrap">
 <h3 class="p-5 pt-2 pb-0 font-bold">Most used languages:</h3>
      {#each topLanguages as language}
          <p class="p-2.5 gradient-p ml-2">{language}</p>
             {/each}
          </div>
        <div class="flex flex-row flex-wrap">
        <h3 class="p-5 pt-2 pb-0 font-bold">Most Starred Repository: </h3>
        <div class="flex flex-col">
  <h3><i class=" p-3 fa-solid fa-star ml-2 "></i>{maxStars}</h3>
              <a href = "{mostLikedRepo}"class="p-5 pt-2 pb-0">{repo_name}</a>
        </div>
        </div>

        <a href="{gitHub}" class="p-5"><i class="fa-brands fa-github-alt mr-2 pt-2 pb-0"></i>View GitHub</a>
      </div>
  </div>
</div>
{:else}
<div class="Error">
    <img src="./404.png">
    <h1 class="gradient-heading mt-2">User not found <i class="fa-solid fa-face-worried"></i></h1>
  </div>
 
{/if}
 
  <style>
  .Error{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right:auto;
    margin-top: 40px;

  }
  .Error img{
    border-radius: 50%;
    height: 120px;
    width:120px;
  }
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
  grid-template-columns: repeat(5, 1fr);
    grid-gap: 0rem;
  }
  .Second_col{
    grid-col-start:3;
    grid-column: span 3;
  }
  .First_col{
    margin-left: 1rem;
     grid-row-start: 1;
    grid-column: span 2;
  }
  .First_col img{
    width: 90px;
    height: 90px;
    border-radius:50%;
  }
 a:hover{
    color:red;
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
      width: 60%;
    }
    .Card_container{
grid-template-columns: repeat(1, 1fr);

    }
    .Second_col{
      grid-col-start: 2;
    }
  }

</style>
