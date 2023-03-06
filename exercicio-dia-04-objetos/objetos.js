let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
    let del = order.order.delivery.deliveryPerson
    let pessoa = order.name
    let tel = order.phoneNumber
    let Rua = order.address.street
    let num = order.address.number
    let apt = order.address.apartment

    console.log(`Ola, ${del}, entrega para: ${pessoa}, Telefone: ${tel}, ${Rua}, Nº: ${num}, AP: ${701}`)
    
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
    let novo = order.name = "Luiz Silva"
    let total = order.payment.total = "50"
    let pizzas = Object.keys(order.order.pizza);
  let drinks = order.order.drinks.coke.type;

  console.log('Olá ' + novo + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + total + ',00.'); // Exiba a mensagem desejada
  }
  
  orderModifier(order);

