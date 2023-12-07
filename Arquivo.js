const monstros = [
  {
    id:1,
    nome:'Oswaldo',
    altura:2,
    habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt asperiores modi debitis, dolorem commodi! Similique, incidunt aliquid ducimus quaerat, sit eligendi quidem praesentium harum voluptas accusamus ea nesciunt omnis.',
    foto:'https://robohash.org/Oswaldo'
  },

  {
    id:2,
    nome:'Megamente',
    altura:3,
    habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt asperiores modi debitis, dolorem commodi! Similique, incidunt aliquid ducimus quaerat, sit eligendi quidem praesentium harum voluptas accusamus ea nesciunt omnis.',
    foto:'https://robohash.org/Megamente'
  },

  {
    id:3,
    nome:'Devinho',
    altura: 7,
    habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt asperiores modi debitis, dolorem commodi! Similique, incidunt aliquid ducimus quaerat, sit eligendi quidem praesentium harum voluptas accusamus ea nesciunt omnis.',
    foto:'https://robohash.org/Devinho'
  },

  {
    id:4,
    nome:'Abacate',
    altura:1.4,
    habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt asperiores modi debitis, dolorem commodi! Similique, incidunt aliquid ducimus quaerat, sit eligendi quidem praesentium harum voluptas accusamus ea nesciunt omnis.',
    foto:'https://robohash.org/Abacate'
  }
]




const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click',() =>{
  document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map( monstros => {
    return `<div>
          <p>Nome: ${monstros.nome}</p>
          <p>Altura: ${monstros.altura}</p>
          <img src="${monstros.foto}">
          <p>habilidades: ${monstros.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsMonstros