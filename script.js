console.log('hello world!')
adj_List=["smelly","silly","ugly"];
let sentence1="My dog is "+adj_List[Math.floor(Math.random()*adj_List.length)]+", "+"but I love him."
let sentence2="He is "+adj_List[Math.floor(Math.random()*adj_List.length)]+", "+"but he is confident and successful."
let sentence3="No matter how "+adj_List[Math.floor(Math.random()*adj_List.length)]+" he is, we should respect him."
let word=prompt("Please enter an negative adjective")
let sentence4="My dog is "+word+", "+"but I love him."
document.write(sentence1+sentence2+sentence3+sentence4)
