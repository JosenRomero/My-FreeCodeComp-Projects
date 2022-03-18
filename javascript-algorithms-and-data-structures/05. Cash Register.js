// Javascript Algorithms and Data Structures - projects - Cash Register

/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.



    Currency Unit           Amount

      Penny	                $0.01 (PENNY)
      Nickel	              $0.05 (NICKEL)
      Dime	                $0.1 (DIME)
      Quarter	              $0.25 (QUARTER)
      Dollar	              $1 (ONE)
      Five Dollars	        $5 (FIVE)
      Ten Dollars	          $10 (TEN)
      Twenty Dollars	      $20 (TWENTY)
      One-hundred Dollars	  $100 (ONE HUNDRED)

*/
function checkCashRegister(price, cash, cid) {

    let currency = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    const countMoney = (arr) => arr.reduce((t, v, i) => t += v[1], 0)

    //approximation of a number, for example 3.80 -> 3  or   3.99 -> 4
    const round_modified = (n) => ((n + 0.001) >= (Math.floor(n) + 1)) ? Math.floor(n) + 1 : Math.floor(n)

    let change = cash - price;

    let cash_in_drawer = countMoney(cid)

    // get the change due in coins and bills, sorted in highest to lowest order
    const getCoinsAndBills = () => {

        let coins_and_bills = cid.reduceRight((items, current_item, i) => {

            let current_amount = current_item[1]
            let current_currency = current_item[0]
            let sum = countMoney(items)

            if (sum < change) {

                const getItemDifferent = () => {
                    let timesToMultiply = round_modified((change - sum) / currency[current_currency])
                    let amount_different = timesToMultiply * currency[current_currency] // (difference / current_currency) * current_currency 
                    return [current_currency, amount_different]
                }

                let newItem = (sum + current_amount <= change) ? current_item : getItemDifferent()

                if (newItem[1] > 0) items.push(newItem) // for example newItem: [ 'QUARTER', 0.5 ]

            }

            return items

        }, [])

        return (cash_in_drawer === change)
            ? { status: "CLOSED", change: cid }
            : { status: "OPEN", change: coins_and_bills }

    }

    let totalCoinsAndBills = (cash_in_drawer < change) ? {} : getCoinsAndBills()

    return (cash_in_drawer < change) ? { status: "INSUFFICIENT_FUNDS", change: [] }
        : (countMoney(totalCoinsAndBills.change).toFixed(2) !== change.toFixed(2)) ? { status: "INSUFFICIENT_FUNDS", change: [] }
            : totalCoinsAndBills

}

console.log(
    checkCashRegister(
        19.5,
        20,
        [
            ["PENNY", 1.01],
            ["NICKEL", 2.05],
            ["DIME", 3.1],
            ["QUARTER", 4.25],
            ["ONE", 90],
            ["FIVE", 55],
            ["TEN", 20],
            ["TWENTY", 60],
            ["ONE HUNDRED", 100]
        ]
    )
); // { status: 'OPEN', change: [ [ 'QUARTER', 0.25 ] ] }


console.log(
    checkCashRegister(
        3.26,
        100,
        [
            ["PENNY", 1.01],
            ["NICKEL", 2.05],
            ["DIME", 3.1],
            ["QUARTER", 4.25],
            ["ONE", 90],
            ["FIVE", 55],
            ["TEN", 20],
            ["TWENTY", 60],
            ["ONE HUNDRED", 100]
        ]
    )
);
/*
{ status: 'OPEN',
  change: 
   [ [ 'TWENTY', 60 ],
     [ 'TEN', 20 ],
     [ 'FIVE', 15 ],
     [ 'ONE', 1 ],
     [ 'QUARTER', 0.5 ],
     [ 'DIME', 0.2 ],
     [ 'PENNY', 0.04 ] 
  ] 
}*/


console.log(checkCashRegister(
    19.5,
    20,
    [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ]
)); // { status: 'INSUFFICIENT_FUNDS', change: [] }

console.log(
    checkCashRegister(
        19.5,
        20,
        [
            ["PENNY", 0.5],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ]
    ));
/*
{ status: 'CLOSED',
  change: 
   [ [ 'PENNY', 0.5 ],
     [ 'NICKEL', 0 ],
     [ 'DIME', 0 ],
     [ 'QUARTER', 0 ],
     [ 'ONE', 0 ],
     [ 'FIVE', 0 ],
     [ 'TEN', 0 ],
     [ 'TWENTY', 0 ],
     [ 'ONE HUNDRED', 0 ] ] }*/