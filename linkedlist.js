/*
linked list demonstration
remove node by its data
*/

// node object
function Node(data, next=null){
  this.data = data
  this.next = next 
}


//linked list object
function LinkedList(){
  this.head = null
  this.size = 0
  
  //-------------set up-----------------
  //head
  this.insertHead = function(data){
    this.head = new Node(data, this.head)
    this.size++
  }
  //print
  this.printNodes = function(){
    let current = this.head
    
    let nodes = []
    while(current){
      nodes.push(current)
      current = current.next
    }
    
    return nodes
  }
  
  
  //-------------removeByValue-----------------
  this.removeByValue = function(val) {

    let current = this.head,
        count = 0,
        indexes = [];
        
    //get indexes array    
    while(current){
      if (current.data == val) {
        indexes.push(count)
      }
      current = current.next
      count++
    }
    
    //remove nodes by their indexes
    if (!indexes.length == 0) {
        
      
      for (let i = 0; i < indexes.length; i++) {
        
        let current = this.head;
        let previous;
        let count = 0;
        
        // Remove first
        if (indexes[i] == 0) {
          this.head = current.next;
        }
        else {
          while (count < indexes[i]) {
            count++;
            previous = current;
            current = current.next;
          }
    
          previous.next = current.next;
        }
    
        this.size--;
      }
      return this.printNodes()
    }
    else{
      return "no any node exists with the given value: "+val+"--"+indexes
    }
  }
}

linkedList = new LinkedList()

linkedList.insertHead(50)
linkedList.insertHead(40)
linkedList.insertHead(30)
linkedList.insertHead(20)
linkedList.insertHead(10)


console.log(linkedList.printNodes());
console.log(linkedList.removeByValue(30))
