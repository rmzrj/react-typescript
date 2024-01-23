class  TodoModel  {
   id: string;
   text: string
   
  constructor(todoTxt : string){
    this.id = Date().toString();
    this.text = todoTxt;
  }
}
export default TodoModel;