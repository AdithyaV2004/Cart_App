let items=[{
    "id":0,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYCU_c2eNsu0dwcSK8psP4VXcuFGbz0tzyg&s",
    "name":"dandelion",
    "price":4.99,
    "added":false
},{
    "id":1,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybV0EdywD6CtB7K9S4KKEkTk5J4jhjDbKPQ&s",
    "name":"sunflower",
    "price":2.99,
    "added":false
},{
    "id":2,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybV0EdywD6CtB7K9S4KKEkTk5J4jhjDbKPQ&s",
    "name":"lily",
    "price":3.99,
    "added":false
},{
    "id":3,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybV0EdywD6CtB7K9S4KKEkTk5J4jhjDbKPQ&s",
    "name":"rose",
    "price":1.99,
    "added":false
},{
    "id":4,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybV0EdywD6CtB7K9S4KKEkTk5J4jhjDbKPQ&s",
    "name":"tulip",
    "price":10,
    "added":false
},{
    "id":5,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybV0EdywD6CtB7K9S4KKEkTk5J4jhjDbKPQ&s",
    "name":"tulip",
    "price":10,
    "added":false
}]

render();

function render(){
    itemCountRender();
    itemListRender();
    itemSummaryRender();
}

function itemCountRender(length){
    const countDiv=document.getElementById("item-count");
    let itCount=0
    items.map((item)=>{
        if(!item.added){
            itCount+=1
        }
    })
    countDiv.innerHTML=`Total items: ${itCount}`;
}




function itemListRender(){
    const itemListDiv=document.getElementById("items");
    itemListDiv.innerHTML="";
    items.map((item)=>{   
        if(!item.added){
            const itemDiv=document.createElement("div");
            const imageEl=document.createElement("img");
            imageEl.setAttribute("src", item.image);
            imageEl.setAttribute("id", "image-div");
            const priceNameDiv=document.createElement("div");
            priceNameDiv.innerHTML=`${item.name} - ${item.price}`;
            const addButton=document.createElement("button");
            addButton.innerHTML="Add to Cart";
            addButton.setAttribute("onclick",`addCart(${item.id})`);
            itemDiv.appendChild(imageEl);
            itemDiv.appendChild(priceNameDiv);
            itemDiv.appendChild(addButton);
            itemListDiv.appendChild(itemDiv);
        }     
    })
}

function addCart(ind){
    items.map((item)=>{
        if(item.id==ind){
            item.added=true;
        }
    })
    render();
}




function itemSummaryRender(){
    const itemSummaryDiv=document.getElementById("item-summary");
    itemSummaryDiv.innerHTML="";
    const addedItemsDiv=document.createElement("div");
    let tPrice=0;
    let addedItems=0
    items.map((item)=>{
        if(item.added){
            const fulldetDiv=document.createElement("div");
            const detDiv=document.createElement("div");
            detDiv.setAttribute("id", "summaryEl");
            detDiv.innerHTML=`${item.name} - ${item.price}`;
            tPrice+=item.price
            addedItems+=1;
            addedItemsDiv.appendChild(detDiv);
            const cancelButton=document.createElement("button");
            cancelButton.innerHTML="Remove";
            cancelButton.setAttribute("onclick",`remove(${item.id})`);
            addedItemsDiv.appendChild(cancelButton);
        }        
    })
    const itemNos=document.createElement("p");
    itemNos.innerHTML=`Added items: ${addedItems}`
    itemSummaryDiv.appendChild(itemNos);
    itemSummaryDiv.appendChild(addedItemsDiv);
    const totPrice=document.createElement("div");
    totPrice.innerHTML=`Total Price:$ ${tPrice}`;
    itemSummaryDiv.appendChild(totPrice);
}

function remove(ind){
    items.map((item)=>{
        if(item.id==ind){
            item.added=false;
        }
    })
    render();
}