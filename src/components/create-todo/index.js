
import styles from "./index.module.css";

function CreateTodo() {
   
    let todo;

    function collectInput(event) {
        todo = event.target.value;
    }

    function saveTodo() {
        // Get existing list of todos from local storage
        let todos = JSON.parse(localStorage.getItem("TODO_KEY"))|| [];
        // Add new todo to existing list of todos
        todos.push(todo);
        // set all todos in local storage
        localStorage.setItem("TODO_KEY", JSON.stringify(todos));
    }

    return (
        <section className={styles.createTodoSection}>
            <input 
            onChange={collectInput}
            className={styles.createTodoInput} 
            placeholder="Start typing..."/>
            <button onClick={saveTodo}>Create</button> 
        </section>
    );
}

export default CreateTodo;