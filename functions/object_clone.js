
//Using Spread operator
const userDetails = {
    name: "Sahriar Rahman",
    age: 20,
    verified: false
  };
  
  const cloneUser = { ...userDetails };
  cloneUser.name='Sazzadur Rahman'
  console.table(userDetails);
  console.table(cloneUser);
  

  const userDetails2 = {
    name: "Sakibur Rahman",
    age: 14,
    verified: true
  };
  
  const cloneUser2 = Object.assign({}, userDetails2);
  
  console.table(cloneUser2);
  
  const userDetails3 = {
    name: "Sazzadur Rahman",
    age: 29,
    verified: true
  };
  
  const cloneUser3 = JSON.parse(JSON.stringify(userDetails3));
  
  console.table(cloneUser3);
  