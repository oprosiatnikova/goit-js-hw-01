


//Оголоси функцію makeTransaction, яка очікує два параметри,
 //   значення яких будуть задаватися під час її виклику:
 //• quantity— перший параметр, число, що містить кількість замовлених дроїдів 
 //• pricePerDroid — другий параметр, число, що містить вартість одного дроїда



//Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
//"You ordered <quantity> droids worth <totalPrice> credits!", де: 
//• <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів


function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));