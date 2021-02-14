
// Quantity Amount Event Handle -> Start
let spanBtnIncrease = document.querySelectorAll(".increase-quantity");
let spanBtnDecrease = document.querySelectorAll(".decrease-quantity");
let quantityCounter = document.querySelectorAll(".quantity-counter");

function increaseCount(spanBtnIncrease){
    for(let spanBtn = 0; spanBtn < spanBtnIncrease.length; spanBtn++){
        spanBtnIncrease[spanBtn].addEventListener('click',()=>{
            let count = parseInt(quantityCounter[spanBtn].textContent);
        
                count += 1;
            quantityCounter[spanBtn].textContent = count.toString();
            
        })
    }
}

function decreaseCount(spanBtnDecrease){
    for(let spanBtn = 0; spanBtn < spanBtnDecrease.length; spanBtn++){
        spanBtnDecrease[spanBtn].addEventListener('click',()=>{
            let count = parseInt(quantityCounter[spanBtn].textContent);
                if(count>1){
                    count -= 1;
                    quantityCounter[spanBtn].textContent = count.toString();
                }
            
            
        })
    }
}


// function call
increaseCount(spanBtnIncrease);
decreaseCount(spanBtnDecrease);

// Quantity Amount Event Handle -> End


// Delete Order Item
let orderItems = document.querySelectorAll(".order-item");
orderItems.forEach((e)=>{
    e.querySelector('.close-icon').addEventListener('click',
    ()=>{
       e.remove();
    });
});




