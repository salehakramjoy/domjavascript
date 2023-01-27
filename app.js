function mem_8(){
     
    const mem_money=document.getElementById('mem-money');
    mem_money.innerText=0;
    total();

    
}

function mem_16(){
     
    const mem_money=document.getElementById('mem-money');
    mem_money.innerText=180;
    total();

    
}

function store_256(){
    const store_money=document.getElementById('store-money');
    store_money.innerText=0;
    total();

} 

function store_512(){
    const store_money=document.getElementById('store-money');
    store_money.innerText=100;
    total();

}                                        

function store_1(){
    const store_money=document.getElementById('store-money');
    store_money.innerText=180;
    total();

} 
function deli_free(){
    const deli_money=document.getElementById('deli-money');
    deli_money.innerText=0;
    total();

} 
function deli_20(){
    const deli_money=document.getElementById('deli-money');
    deli_money.innerText=20;
    total();

} 

function total(dis){

    const mem_money=document.getElementById('mem-money');
    const deli_money=document.getElementById('deli-money');
    const store_money=document.getElementById('store-money');
    const base_money=document.getElementById('base_price');
 
    let total=parseInt(mem_money.innerText)+ parseInt(store_money.innerText)+ parseInt
    (deli_money.innerText)+ parseInt(base_price.innerText)
    
    const total_money=document.getElementById('total-money');
    if(dis){
        let dis_mon=total*(.20);
        let ty=Math.ceil(total - dis_mon);
        total_money.innerText=ty+"";
        

    }else{
        total_money.innerText=total+"";
        console.log(total)
    }
  


    
} 

function promo(){
   
    const promo=document.getElementById('exampleText0');
    const a=promo.value;
    if(a=="stevekaku"){
       total(true);
    }
}