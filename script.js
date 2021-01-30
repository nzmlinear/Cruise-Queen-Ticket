
const FirstclassPlus= document.querySelector("#first-class-plusbtn");
const FirstclassMinus=document.querySelector("#first-class-minusbtn");
const FirstclassTicket=document.querySelector("#first-class-ticket");
const EconomyPlus=document.querySelector("#economy-class-plusbtn");
const EconomyMinus=document.querySelector("#economy-class-minusbtn");
const EconomyTicket=document.querySelector("#economy-class-ticket");

//-------All Event Listerner To key-up value 

FirstclassTicket.addEventListener("keyup",function(){
    grandTotalIncriment();
});
EconomyTicket.addEventListener("keyup",function(){
    grandTotalIncriment();
});

//-------All Event Listerner To key-up value 
FirstclassPlus.addEventListener("click",function(){
    IncreaseValue(FirstclassTicket);
    grandTotalIncriment();
});
FirstclassMinus.addEventListener("click",function(){
    DecrementValue(FirstclassTicket);
    grandTotalIncriment();
});
EconomyPlus.addEventListener("click",function(){
    IncreaseValue(EconomyTicket);
    grandTotalIncriment();
});
EconomyMinus.addEventListener("click",function(){
    DecrementValue(EconomyTicket);
    grandTotalIncriment();
});

//------------Incremnet & Decrement
function IncreaseValue(incrimentItem){
  incrimentItem.value++;
  incrimentItem.value * 150;
};

function DecrementValue(decrementItem){
    let items = Number(decrementItem.value);

    if (!items || items < 0) {
        decrementItem.classList.add('error');
    } else {
        decrementItem.value--;
        decrementItem.value * 150;
    }
};

//------------Total value
function grandTotalIncriment(){
    let CountFirstclassPrice = FirstclassTicket.value*150;
    let CountEconomyclassPrice=EconomyTicket.value*100;
    let SubTotal = (document.querySelector("#subtotal").textContent = CountFirstclassPrice + CountEconomyclassPrice);
    let vatValue = (document.querySelector("#vat").textContent = Math.round(SubTotal * 0.1));
    let totalPrize = (document.querySelector("#total").textContent = SubTotal + vatValue);
    //--------------For Invoice
    let totalInvoiceValue=(document.querySelector("#totalinvoice").textContent = totalPrize);
};

//--------------Invoice part
document.querySelector("#booknow").addEventListener("click",function(){

    const JourneyFrom = document.querySelector('#journey-from').value;
    const JourneyTo = document.querySelector('#journey-to').value;
    const JourneyDeparture = document.querySelector('#journey-date').value;
    const JourneyReturn = document.querySelector('#return-date').value;
    const firstClassTicket = document.querySelector('.firstclassTicketamount').value;
    const economyClassTicket = document.querySelector('.economyTicketAmount').value;
    if (!JourneyFrom || !JourneyTo || !JourneyDeparture || !JourneyReturn || !firstClassTicket || !economyClassTicket) {
        console.log(alert('You must fill out the form!'));
    }
    else{
        document.querySelector('.formbook').style.display = 'none';
        document.querySelector('.invoice').style.display = 'block';
        document.querySelector('#from').textContent = JourneyFrom;
        document.querySelector('#to').textContent = JourneyTo;
        document.querySelector('#fromDate').textContent = JourneyDeparture;
        document.querySelector('#toDate').textContent = JourneyReturn;
        document.querySelector('#firstcls').textContent = firstClassTicket;
        document.querySelector('#economycls').textContent = economyClassTicket;
        grandTotal();
    }

});

