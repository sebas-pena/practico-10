const table = document.querySelector("#table-body")

fetch("/api/pets")
  .then(res => res.json())
  .then(pets => {
    pets.forEach(pet => {
      table.innerHTML += `
        <tr>
          <td>${pet.nombre}</td> 
          <td>${pet.edad}</td> 
          <td>${pet.tipo}</td> 
          <td>${pet.caracteristicas}</td> 
        </tr>
      `
    })
  })


document.querySelector("#add-pet").addEventListener("submit", (e) => {
  e.preventDefault()
  const nombre = document.querySelector("#pet-nombre").value
  const edad = document.querySelector("#pet-edad").value
  const tipo = document.querySelector("#pet-tipo").value
  const caracteristicas = document.querySelector("#pet-caracteristicas").value

  fetch("api/pets", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      nombre,
      edad,
      tipo,
      caracteristicas
    })
  })
    .then(res => {
      if (res.ok) {
        table.innerHTML += `
          <tr>
            <td>${nombre}</td> 
            <td>${edad}</td> 
            <td>${tipo}</td> 
            <td>${caracteristicas}</td> 
          </tr>
        `
      }
    })
})