

<div class ="container">
<form action="" method="POST">
  <input type="text" name="user" placeholder="UserName" rows={1} required>
       <button class="btn variant-filled-primary"type="submit">Stalk</button>
</form>
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
 @media (max-width: 992px) {
    button{
      padding:3px;
    }
    .container button{
      padding:9px; 
    }
  }

</style>
