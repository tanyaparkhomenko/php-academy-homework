var persons = [];
var a = prompt ("1-добавить нового пользователя, 2 -сгенерировать таблицу");

        var person = {
            name: '',
            sname: '',
            age: ''
        };

        function ask() {
            person.name = prompt("Введите свое имя:");
            person.sname = prompt("Введите свою фамилию:");
            person.age = prompt("Введите свой возраст:");
            persons.push(person);
        }

        function say() {
            document.write("Имя: " + person.name + "<br />");
            document.write("Фамилия: " + person.sname + "<br />");
            document.write("Возраст: " + person.age + "<br />");
            document.write("<hr/>");
        }

        function load() {
            var tableContainer = document.getElementById ('table');
            var table = document.createElement ('table');
            tableContainer.appendChild(table);
         
            for (var i=0; i<persons.lenght; i++) {
              var row= document.createElement('tr');
              table.appendChild(row);
              for (item in persons[i]) {
                var td= document.createElement('td');
                row.appendChild(td);
                td.innerHTML= persons[i][item];

              }
            }
         }

        // switch(a) {
        //   case "1":{
        //   ask();
        //   say();
        //   }
        //   break;
        //   case "2":{
        //    load();
        //   }
        //   break;
        // }

        // do{
        //   ask();
        //   say();
        // } while ( a===1 )
        // do {
        //   load();
        // } while(a===2)
        
        do {
          ask();
          say();
          persons=persons.concat(a);
        } while (a!=null && a===1)

