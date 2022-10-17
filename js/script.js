var form=document.getElementById("myForm")

meuForm.addEventListener('submit', function(e){
  e.preventDefault()
  var pesquisar= document.getElementById("pesquisar").value
 

  var originalName= pesquisar.split(' ').join('')
  
 
fetch("https://api.github.com/users/"+originalName)
.then((result)=> result.json())
.then((data)=> {
  console.log(data)

 document.getElementById("nome").innerHTML+= `<br>${data.name}\n`
 document.getElementById("bio").innerHTML+= `<br>${data.bio}\n`

 
  document.getElementById("repositorios").innerHTML+=`${data.public_repos}\n`
  document.getElementById("local").innerHTML+=`${data.location}\n`
  document.getElementById("seguindo").innerHTML+=`${data.following}\n`
  document.getElementById("seguidores").innerHTML+=`${data.followers}\n`
})



  })