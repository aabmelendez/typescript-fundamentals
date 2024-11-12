import { productsURL } from "../lib";

const prefix = '🐉';

type ProductType = {
  id: number;
  name:string;
  icon?: string
}

export default async function updateOutput(id:string) {
  const products= await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);
  if(output && html){
    output.innerHTML = html;
  }

}

function layoutProducts(products: ProductType[]){
  const items = products.map((p) => {
    const productHtml = `
    <span class="card-id">#${p.id}</span>
    <i class="card-icon ${p.icon} fa-lg"></i>
    <span class="card-name">${p.name}</span>
    `;

    const cardHtml = `
    <li>
      <div class="card">
        <div class="card-content">
          <div class="content">
            ${productHtml}
          </div>
        </div>
      </div>
    </li>
    `;
    return cardHtml;
  });

  let productHtml = `<ul>${items.join('')} </ul>`;
  return productHtml;
}

async function getProducts(): Promise<ProductType[]>{
  const response: Response = await fetch(productsURL)
  const products: ProductType[] = await response.json();
  return products;

}

//correr los ejemplos
runTheLearningSamples()

function runTheLearningSamples(){
  function displayProductInfo(id:number, name:string){
    console.log(`${prefix} typed parameters`);
    console.log(`Producto id=${id} y nombre=${name}`);
  }

  displayProductInfo(10, "Pizza")
//************************************************************************/
  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7,11));

  function addNumbersDeclaration(x: number, y:number){
    const sum: number = x + y;
    return sum;
  }

  //************************************************************************/
const addNumbersExpresssion = function(x:number, y:number){
  const sum: number = x + y;
  return sum;
}

console.log(`${prefix} function expression`);
console.log(addNumbersExpresssion(7,11));

  //************************************************************************/

  console.log(`${prefix} function declaration Return`);
  console.log(addNumbersDeclarationReturn(7,11));

  function addNumbersDeclarationReturn(x: number, y:number): number{
    const sum: number = x + y;
    return sum;
  }

    //************************************************************************/

    const sampleProducts = [
      {
        id:10,
        name:'Pizza dominos',
        icon: 'fas fa-pizza-slice'
      },
      {
        id:20,
        name:'Helado',
        icon: 'fas fa-ice-cream'
      },    
      {
        id:30,
        name:'Queso',
        icon: 'fas fa-cheese'
      }
    ];

    function getProductNames(): string[] {
      return sampleProducts.map((p) => p?.name);
    }

    console.log(`${prefix} return array`);
    console.log(getProductNames());

    //************************************************************************/
    function getProductsByid(id:number): ProductType|undefined{
      return sampleProducts.find(p=> id === p.id)   
    }

    console.log(`${prefix} return Product type`);
    console.log(getProductsByid(10));

    console.log(`${prefix} return Product type`);
    console.log(getProductsByid(101));

    //************************************************************************/
    function displayProducts(products: ProductType[]):void{
      const productNames = products.map(p=> {
        const name = p.name.toLowerCase();
        return name;
      });

      const msg = `Sample products include: ${productNames.join(', ' )}`;
      console.log(`${prefix} return void`);
      console.log(msg);
    }

    displayProducts(sampleProducts);

     //************************************************************************/
    const getRandomInit = (max:number) => Math.floor(Math.random() * max);
    
    function createProduct(name:string, icon?:string): ProductType {
      const id = getRandomInit(1000);
      return {
        id, name, icon
      };
    }

    console.log(`${prefix} optional parameters`);
    let pineapple = createProduct('Piña', 'pine-apple.jpg');
    let mango = createProduct("Mango");
    console.log(pineapple, mango)

//************************************************************************/

    function construirDireccion(street:string, city: string, ...restOfAdress:string[]){
      console.table(restOfAdress);
      const address = `${street} ${city} ${restOfAdress.join(' ')}`;
      return address;
    }

    const algunaDireccion = construirDireccion(
      "1 louis lane",
      "smallville", 
      "apt 101", //rest arg 0
      "Area 51", //rest arg 1
      "cuidad misteriosa" //rest arg 2
      );

      console.log(`${prefix} Rest parameters`);
      console.log(algunaDireccion);
      //************************************************************************/

      // forma tradicional
      function displayProduct(product:ProductType): void{
        console.log(`${prefix} Destructing parameters`);
        console.log(`Product id=${product.id} and name=${product.name}`);

      }

      //destructurando parametros

      function displayProduct2({id,name}:ProductType): void{
        console.log(`${prefix} Destructing parameters`);
        console.log(`Product id=${id} and name=${name}`);

      }

      const prod = getProductsByid(10);
      if (prod) {
        displayProduct(prod);
      }
      
      const prod2 = getProductsByid(10);
      if (prod) {
        displayProduct2(prod);
      }
  
  }