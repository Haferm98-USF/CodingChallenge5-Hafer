// Task 1: Create an Inventory Array of Product Objects

let inventory = 
[
    {name: 'Latte', price: 4.50, quantity: 99},
    {name: 'Americano', price: 3.00, quantity: 200},
    {name: 'Cappacino', price: 7.00, quantity: 50},
    {name: 'Muffin', price: 2.00, quantity: 77},
];

//Task 2: Create an Orders Array of Order Objects

let orders = [];
orders.push
({
    customerName: 'Matt',
    itemsOrdered: [Latte, Muffin],
    status: 'Pending'
});

//Task 3: Create a Function to Place an Order

function placeOrder (customerName, itemsOrdered)
{
 for (let item of itemsOrdered) 
    {
        const product = inventory.find(p => p.name === item.name);

        if (!product) //Logic branch if item is not in inventory
            {
                console.log('This item does not exist in the inventory');
                return;
            }
        if (product.quantity < item.quantity) // Logic branch if item stock is too low
        {
            console.log('Inssuficent quanitity. Availiable stock = ${product.quantity}');
            return;
        }
    }
}
itemsOrdered.forEach(item =>  //Logic Branch if the order can be successfully fulfilled
    {
        const product = inventory.find(p => p.name === item.name);
        product.quantity -= item.quantity;
    });
orders.push
(
    {
        customerName: customerName,
        items: itemsOrdered;
        status: 'Pending'
    }
);

//Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal (order)
{
    let total = 0;
    order.items.forEach(item => 
        {
            let product = inventory.find(p => p.name === item.name);
            total += product.price * product.quantity;
        });
    return total;
};

//Task 5: Create a Function to Mark an Order as Completed

function completeOrder (customerName) 
{
    const order = order.find(o => o.customerName === customerName);
    if (order) 
        {
            order.status = 'Completed';
            console.log('${customerName}s order has been completed.');
        }
    else 
    {
        console.log('Error. No order found under this name');
    };
};

