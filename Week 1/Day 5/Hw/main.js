class Tasks {
    constructor(Tasks, isbn) {
      this.title = title;
      this.isbn = isbn;
    }
  
    static fromJSON(json) {
      return new Tasks(json.Tasks, json.isbn);
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.Tasks = document.getElementById('Tasks-input');
      this.isbn = document.getElementById('isbn-input');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.Tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderBookTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (
        this.title.value == '' ||
        this.isbn.value == ''
      ) {
        return;
      }
  
      const Tasks = new Tasks(this.title.value, this.isbn.value);
  
      this.books.push(Tasks);
  
      this.saveTasksToLocalStorage();
      this.renderTasksTable();
  
      this.Tasks.value = '';
      this.isbn.value = '';
    }
  
    renderTasksTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.Tasks.length; i++) {
        const Tasks = this.Tasks[i];
  
        const tr = this.createTasksTableRow(Tasks);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTasksTableRow(book) {
      const tr = document.createElement('tr');
  
      const tdTasks = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdTitle.innerHTML = book.Tasks;
  
      const actionButtons = this.createActionButtons(Tasks);
      tdActions.appendChild(actionButtons[0]);
      tdActions.appendChild(actionButtons[1]);
  
      tr.appendChild(tdTasks);
      tr.appendChild(tdActions);
  
      return tr;
    }
  
    createActionButtons(Tasks) {
      const deleteButton = document.createElement('button');
      const editButton = document.createElement('button');
  
      deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () =>
        this.onRemoveBookClicked(Tasks)
      );
  
      editButton.setAttribute('class', 'btn btn-warning btn-sm ms-2');
      editButton.innerHTML = 'Edit';
      editButton.addEventListener('click', () => this.onEditTasksClicked(Tasks));
  
      return [deleteButton, editButton];
    }
  
    onRemoveBookClicked(Tasks) {
      this.Tasks = this.Tasks.filter((x) => {
        return book.isbn !== x.isbn;
      });
  
      this.saveBooksToLocalStorage();
      this.renderBookTable();
    }
  
    onEditBookClicked(book) {
      this.books = this.books.filter((x) => {
        return Tasks.isbn !== x.isbn;
      });
  
      this.title.value = book.Tasks;
      this.isbn.value = this.TasksArr.isbn;
  
      this.saveTaskToLocalStorage();
      this.renderTasksTable();
    }
  
    saveTasksToLocalStorage() {
      const json = JSON.stringify(this.TasksArr);
      localStorage.setItem('Tasks', json);
    }
  
    loadTasksFromLocalStorage() {
      const json = localStorage.getItem('Tasks');
      if (json) {
        const TasksArr = JSON.parse(json);
        this.TasksArr = TasksArr.map((x) => TasksArr.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();