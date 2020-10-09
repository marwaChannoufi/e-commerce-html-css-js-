// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-_hpcluzmLzQeKjZh4d79vECWXZ8lW5A",
    authDomain: "ecommerce-website-5ff6e.firebaseapp.com",
    databaseURL: "https://ecommerce-website-5ff6e.firebaseio.com",
    projectId: "ecommerce-website-5ff6e",
    storageBucket: "ecommerce-website-5ff6e.appspot.com",
    messagingSenderId: "656578173685",
    appId: "1:656578173685:web:1f0bde81a07a9f0d7543bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



//  =======   generale
  var products=JSON.parse(localStorage.getItem("cart"))
  console.log(products)
  var cartItems=[]
  var cart_n=document.getElementById("cart_n")
var  table= document.getElementById("table")
var total=0


// render html doc
function tableHTML(i){
    return `
    <tr>
    <th scope="row">${i+1}</th>
    <td> <img src="${products[i].url}" style="width:90px;"></td>
    <td>  ${products[i].name} </td>
    <td>  1 </td>
    <td>  ${products[i].price} </td>

    </tr>
    `
}

// buy function
function buy(){

    var d= new Date()
    var t=d.getTime()
    var counter=t
    counter+=1
    let db= firebase.databaseURL().ref("order/"+counter)
    let itemdb={
        id:counter,
        order:counter-aa,
        total:total
    }
    db.set(itemdb)
    clean()
}


// clean function
function clean(){
    localStorage.clear()
    for (let i = 0; i < products.length; i++) {
         table.innerHTML+=tableHTML(i)
         totl=total+parseInt(products[i].price)
        
    }
    total=0
    table.innerHTML=`
    <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td> 
    </tr>`
    cart_n.innerHTML=""
    document.getElementById("btnBuy").style.display="none"
    
    document.getElementById("btnClean").style.display="none"

}


function render(){
    
    for (let i = 0; i < products.length; i++) {
        table.innerHTML+=tableHTML(i)
        total=total+parseInt(products[i].price)
 
    }
    table.innerHTML+=`
    <tr>
        <th scope="row"></th>
        <td scope="col"></td>
        <td scope="col"></td>
        <td scope="col"></td>
        <td scope="col"> <b>Total</b> : $${total}</td> 
    </tr>
    <tr>
        <th scope="row"></th>
        <td scope="col"></td>
        <td scope="col"></td>
        <td scope="col">
            <button id="btnBuy" onclick="clean()" class="btn btn-warning text-white">Clean shopping cart</button>
        </td>
        <td scope="col">
            <button id="btnClean" onclick="buy()" class="btn btn-success">Buy</button>
        </td> 
    </tr>
    `
}