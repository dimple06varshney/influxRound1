class TripGroup {
    constructor(name) {
      this.name = name,
      this.members = []
    }
    addMember(member){

        const found = this.members.some(el => el.member === member);
        if (!found) {
           this.members.push({
            member: member,
            exp: 0
        });
        console.log(this); 
        } 
        else console.log("Member already exist!");
            
        }
    addExpenses(member, expense){

        const found = this.members.some((el) => {
           if(el.member=== member){
             el.exp = expense;
             console.log(this,"Expenses added successfully. :)");
            return true
           }         
        })
        if(!found) {
            console.log("Sorry Member not exist! :(");
        }     
    }

    splitExpenses() {
        this.members.map((el)=> console.log(`${el.member} expnsees Rs.${el.exp}`))
    }
    
    main (membersArr, expenseArr){
        for(let i=0; i<membersArr.length; i++){
            this.addMember(membersArr[i])
        }
        for(let i=0; i<expenseArr.length; i++){
            this.addExpenses(expenseArr[i][0], expenseArr[i][1])
        }
       this.splitExpenses()
    }
  }
let dimple = new  TripGroup("Dimple") 
console.log(dimple);
dimple.main(['a','b','c'],[['a',30], ['b',30],['c',30]]) //membersArr and expenses Array
