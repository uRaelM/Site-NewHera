const BestM = [ 
  {
    id: 0,
    nome: 'Moletom Cascavel Neon',
    img: '../imagens/foto1.jpg',
    valor: 249.99,
    quantidade: 0
  },
  {
    id: 1,
    nome: 'Sweater Marni',
    img: '../imagens/foto2.jpg',
    valor: 139.99,
    quantidade: 0
  },
  {
    id: 2,
    nome: 'Camisa Lanvin estampada',
    img: '../imagens/foto3.jpg',
    valor: 79.99,
    quantidade: 0
  },
  {
    id: 3,
    nome: 'Short estampado verão',
    img: '../imagens/foto4.jpg',
    valor: 59.99,
    quantidade: 0
  }
]

const BestF = [ 
  {
    id: 0,
    nome: 'Camiseta manga longa',
    img: '../imagens/fem1.jpg',
    valor: 74.99,
    quantidade: 0
  },
  {
    id: 1,
    nome: 'Vestido sem manga',
    img: '../imagens/fem2.jpg',
    valor: 349.99,
    quantidade: 0
  },
  {
    id: 2,
    nome: 'Blusa Plumada sem manga',
    img: '../imagens/fem3.jpg',
    valor: 99.99,
    quantidade: 0
  },
  {
    id: 3,
    nome: 'Saia curta Plumada',
    img: '../imagens/fem4.jpg',
    valor: 99.99,
    quantidade: 0
  }
]


const Items = BestM.concat(BestF);

BestSellerM = () => {
  var BestSellerMasculino = document.getElementById('best-sellerM');
  BestM.map((val)=>{
    BestSellerMasculino.innerHTML += `

    <div class="itens" data-anime="bottom">
      <a href="">
        <img class="img-item"  src="`+val.img+`">
        <p>
        ` +val.nome+ `
        </p>
        <p>
        R$ ` +val.valor+ `
        </p>
        <a class="btn-add-carrinho" key="`+val.id+`" href="#"><i class="fa-solid fa-plus"></i> Carrinho</a>
    </div>

  ` ;
  })
}

BestSellerF = () => {
  var BestSellerFeminino = document.getElementById('best-sellerF');
  BestF.map((val)=>{
    BestSellerFeminino.innerHTML += `

    <div class="itens" data-anime="bottom">
      <a href="">
        <img class="img-item"  src="`+val.img+`">
        <p>
        ` +val.nome+ `
        </p>
        <p>
        R$ ` +val.valor+ `
        </p>
        <a class="btn-add-carrinho" key="`+val.id+`" href="#"><i class="fa-solid fa-plus"></i> Carrinho</a>
    </div>

  ` ;
  })
}

BestSellerM();
BestSellerF();

AtualizarSacola = () => {
   var Sacola = document.getElementById('area-sacola-active');
   var total = 0
   Sacola.innerHTML = " "
   Items.map((val)=>{
    if (val.quantidade > 0){
      total += val.valor * val.quantidade
      Sacola.innerHTML += ` 

      <div class="items-sacola">
        <a href="">
          <img src="`+val.img+`">
          <div class="item-sacola-right">
            <p class="preco"> 
               R$ `+val.valor+`
            </p>
            <P>
              `+val.nome+`
            </p>
        </a>
          <button class="lixeira">
            <i class="fa-regular fa-trash-can"></i>
          </button>
          <div class="input-sacola">
            <button type="submit" from="input-quantidade" class="btn-mais-menos radius-menos"><i class="fa-solid fa-minus"></i></button>
            <input disabled id="input-quantidade" type="text" name="quantidade" value="`+val.quantidade+`">
            <button type="button" from="input-quantidade" class="btn-mais-menos radius-mais"><i class="fa-solid fa-plus"></i></button>
          </div>
            <p class="preco total">
              <span class="menos-foco">R$ `+(val.valor * val.quantidade).toFixed(2)+`</span>
            </p>
          </div>
      </div>
      `;
       }
  })
   var total = total.toFixed(2);
   Sacola.innerHTML += `

        <div class="item-sacola-right finalizar">
          <p style="margin-top: 1rem" class="preco total">
          <span class="menos-foco">Total: R$</span> <span style="font-size: 1.3rem;">`+total+`</span>
          </p>
        </div>
        <a class="btn-compra-sacola" href="">Comprar</a>

        `
}



var BMlinks = document.getElementById('best-sellerM').getElementsByClassName('btn-add-carrinho');

for(var i = 0; i < BMlinks.length; i++) {
  BMlinks[i].addEventListener('click', function(){
    event.preventDefault();
    let key = this.getAttribute('key');
    M[key].quantidade++;
    AtualizarSacola();
  })
}

var BFlinks = document.getElementById('best-sellerF').getElementsByClassName('btn-add-carrinho');

for(var i = 0; i < BFlinks.length; i++) {
  BFlinks[i].addEventListener('click', function(){
    event.preventDefault();
    let key = this.getAttribute('key');
    F[key].quantidade++;
    AtualizarSacola();
  })
}


/* Animação da parte de compras */
