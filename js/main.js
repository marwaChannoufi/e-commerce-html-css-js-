
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
  var products=[]
  var cartItems=[]
  var cart_n=document.getElementById("cart_n")

// =======    sections
    var mobileSection=document.getElementById("mobileSection")
    // console.log(mobileSection)
    var tabletteSection=document.getElementById("tabletteSection")
    // console.log(tabletteSection)
    var ordinateurSection=document.getElementById("ordinateurSection")
    // console.log(ordinateurSection)

// =======    data information

    var MOBILE=[
        {name:"Galaxy s1",price:1},
        {name:"Galaxy pro",price:1},
        {name:"Galaxy Edg",price:1},
        {name:"Galaxy A1",price:1},
        {name:"Galaxy s5",price:1},
        {name:"Galaxy s7",price:1}
    ]
    var TABLETTE=[
        {name:"tablette #1",price:11},
        {name:"tablette #2",price:11},
        {name:"tablette #3",price:11},
        {name:"tablette #4",price:11},
        {name:"tablette #5",price:11},
        {name:"tablette #6",price:11}
]



    var ORDINATEUR=[
        {name:"ordinateur #1",price:12},
        {name:"tablette #2",price:12},
        {name:"tablette #3",price:12},
        {name:"tablette #4",price:12},
        {name:"tablette #5",price:11},
        {name:"tablette #6",price:11}
]



    //=========== html
   const  HTMLmobileProduct=(el)=>{
        let URL=`images/phone/${el}.jpg`
        let btn=`btnMobile${el+1}`
        return`
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm" >
        <img src="${URL}" class="card-img-top" style="width: 16rem;" alt="...">
        <div class="card-body">
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i> 
        <i style="color:orange;" class="fa fa-star"></i> 
            <p class="card-text"> ${MOBILE[el-1].name}</p> 
            <p class="card-text"> Price : ${MOBILE[el-1].price}.00 </p> 
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button"
                        class="btn btn-outline-secondary btn-sm"
                        onclick="cart2('${MOBILE[el-1].name}','${MOBILE[el-1].price}','${URL}','${el}','${btn}')">
                        Buy
                </button>
                <button type="button"
                id="${btn}"
                        class="btn btn-outline-secondary btn-sm"
                         onclick="cart('${MOBILE[el-1].name}','${MOBILE[el-1].price}','${URL}','${el}','${btn}')">
                    Add to cart
                </button>
                <small class="text-muted"> Free shipping</small>
                </div>
            </div>
        </div>
        </div>
        </div>
        `
    }


    const  HTMLtabletteProduct=(el)=>{
        let URL=`images/tablette/${el}.jpg`
        let btn=`btntablette${el}`
        return`
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm" >
        <img src="${URL}" class="card-img-top" style="width: 16rem;" alt="...">
        <div class="card-body">
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i> 
        <i style="color:orange;" class="fa fa-star"></i> 
            <p class="card-text"> ${TABLETTE[el-1].name}</p> 
            <p class="card-text"> Price : ${TABLETTE[el-1].price}.00 </p> 
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button"
                        class="btn btn-outline-secondary btn-sm"
                         onclick="cart2('${TABLETTE[el-1].name}','${TABLETTE[el-1].price}','${URL}','${el}','${btn}')">
                    Buy
                </button>
                <button type="button"
                        id="${btn}" 
                        class="btn btn-outline-secondary btn-sm"
                         onclick="cart('${TABLETTE[el-1].name}','${TABLETTE[el-1].price}','${URL}','${el}','${btn}')">
                    Add to cart
                </button>
                <small class="text-muted"> Free shipping</small>
                </div>
            </div>
        </div>
        </div>
        </div>
        `
    }

    const  HTMLordinateurProduct=(el)=>{
        let URL=`images/pc/${el}.jpg`
        let btn=`btnMobile${el}`
        return`
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm" >
        <img src="${URL}" class="card-img-top" style="width: 16rem;" alt="...">
        <div class="card-body">
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i> 
        <i style="color:orange;" class="fa fa-star"></i> 
            <p class="card-text"> ${ORDINATEUR[el-1].name}</p> 
            <p class="card-text"> Price : ${ORDINATEUR[el-1].price}.00 </p> 
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button"
                        class="btn btn-outline-secondary btn-sm"
                         onclick="cart2('${ORDINATEUR[el-1].name}','${ORDINATEUR[el-1].price}','${URL},''${el}','${btn}')">
                    Buy
                </button>
                <button type="button"
                        id="${btn}"
                        class="btn btn-outline-secondary btn-sm"
                         onclick="cart('${ORDINATEUR[el-1].name}','${ORDINATEUR[el-1].price}','${URL}','${el}','${btn}')">
                    Add to cart
                </button>
                <small class="text-muted"> Free shipping</small>
                </div>
            </div>
        </div>
        </div>
        </div>
        `
    }
    // enregistrement function
    function registre(){
        return`
        
        <div class="alert alert-success" role="alert"> 
            add to cart success
        </div>
        `
    }

    // ======cart function
    function cart(name,price,url,el,btncart){
        var item={
            name:name,
            price:price,
            url:url
        }
        cartItems.push(item)
        console.log(cartItems)
        let storage= JSON.parse(localStorage.getItem("cart"))
        if(storage==null){

            products.push(item)
            localStorage.setItem("cart",JSON.stringify(products))
        }else{
            products=JSON.parse(localStorage.getItem("cart"))
            products.push(item)
            localStorage.setItem("cart",JSON.stringify(products))
        }
            cart_n.innerHTML=`${products.length}`
            document.getElementById(btncart).style.display="none"
           document.innerHTML=`${registre()}`
     }
    // ======render
    function render(){
        for(let i=1;i<=6;i++){
            mobileSection.innerHTML+=`${HTMLmobileProduct(i)}`
            tabletteSection.innerHTML+=`${HTMLtabletteProduct(i)}`
            ordinateurSection.innerHTML+=`${HTMLordinateurProduct(i)}`
        } 
        if(localStorage.getItem("cart")==null){

        }else{
            products=JSON.parse(localStorage.getItem("cart"))
            cart_n.innerHTML=`[${products.length}]`
        }
    }
    render()