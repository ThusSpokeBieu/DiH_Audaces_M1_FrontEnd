function getAge(){
  let age = prompt("What's your age?");           

  if (age <= 15){
    alert(`Your classification is young.`)
  } else if (age >= 16 && age <= 64){
    alert(`Your classification is adult.`)
  } else if (age > 64 && age <= 200){
    alert(`Your classification is old.`)
  } else {
    alert(`Please, insert a correct age.`)
    getClassification();
  }
}

getAge();
    
      
