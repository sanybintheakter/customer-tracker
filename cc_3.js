let customers = [
    { 
        name: "Tilka Nujhat",
        email: "tilka@gmail.com",
        purchases: ["notebook", "pen"]
    },

    { 
        name: "Anisha Rahman",
        email: "rahman@gmail.com",
        purchases: ["headphone"]
    },

    { 
        name: "Nuzrat Kabir",
        email: "nkabir816@gmailcom",
        purchases: ["tshirt", "sticker"]
    }
];

console.log(customers[0].email);  // tilka@gmail.com
console.log(customers[1].email);  // rahman@gmail.com
customers[2].email = "nuzrat@gmail.com";
console.log(customers[2].email); // tilka@gmail.com, rahman@gmail.com, nuzrat@gmail.com

customers.push(
    { 
       name: "Rafia Haq",
       email: "haq@gmail.com",
       purchases: ["ipencil"]  
    }
);

customers.shift(
);

customers[0].email = "anisha@gmail.com"; // nujhata@gmail.com, rahman@gmail.com, nuzrat@gmail.com (updated the email of first customer )
customers[1].purchases.push("phone case"); // headphone, tshirt, sticker, phone case, ipencil

customers.forEach(function(customer) 
{
  console.log(
    "Name:", customer.name,
    "Email:", customer.email,
    "Total Purchases:", customer.purchases.length
  );
}); 



