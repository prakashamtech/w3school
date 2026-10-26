// Central content structure: topics, lesson order, examples, exercises and references.
// All explanatory text is original sample content written for this learning site.

const htmlDoc = (body, head = '') =>
  `<!DOCTYPE html>\n<html>\n<head>\n${head}</head>\n<body>\n\n${body}\n\n</body>\n</html>`

const L = (slug, title, intro, code, extra = {}) => ({ slug, title, intro, code, ...extra })

export const topics = [
  {
    slug: 'html', name: 'HTML', lang: 'html', runnable: true, color: '#D9EEE1',
    tagline: 'The language for building web pages',
    intro: 'HTML is the standard markup language for web pages. With HTML you describe the structure of a page using elements such as headings, paragraphs, links and images. Every website you visit is built on HTML.',
    sample: htmlDoc('<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>', '<title>HTML Tutorial</title>\n'),
    groups: [
      { title: 'HTML Tutorial', lessons: [
        L('html-home', 'HTML HOME', 'Welcome to the HTML tutorial. HTML is easy to learn – you will enjoy it! This tutorial follows a beginner-friendly order from basic elements to forms and semantic layout.', htmlDoc('<h1>My First Heading</h1>\n<p>My first paragraph.</p>')),
        L('html-introduction', 'HTML Introduction', 'HTML stands for Hyper Text Markup Language. It describes the structure of a web page and consists of a series of elements that tell the browser how to display content.', htmlDoc('<h1>My First Heading</h1>\n<p>My first paragraph.</p>', '<title>Page Title</title>\n'), {
          sections: [
            { h: 'What is HTML?', list: ['HTML stands for Hyper Text Markup Language', 'HTML is the standard markup language for creating web pages', 'HTML describes the structure of a web page', 'HTML elements label pieces of content such as "this is a heading" or "this is a link"'] },
            { h: 'Example Explained', list: ['The <!DOCTYPE html> declaration defines that this document is an HTML5 document', 'The <html> element is the root element of an HTML page', 'The <head> element contains meta information about the page', 'The <title> element specifies a title shown in the browser tab', 'The <body> element is a container for all the visible contents', 'The <h1> element defines a large heading', 'The <p> element defines a paragraph'] },
          ] }),
        L('html-editors', 'HTML Editors', 'Web pages can be created and modified with any plain text editor. Professional developers often use code editors with syntax highlighting, but a simple editor is enough to learn.', htmlDoc('<h1>Edited in a text editor</h1>\n<p>Save the file with the .html extension.</p>')),
        L('html-basic', 'HTML Basic', 'This lesson shows the most basic HTML examples. All HTML documents must start with a document type declaration and the visible part of the document goes between <body> and </body>.', htmlDoc('<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<p>This is a paragraph.</p>\n<a href="https://example.com">This is a link</a>')),
        L('html-elements', 'HTML Elements', 'An HTML element is defined by a start tag, some content and an end tag. Elements can be nested, which means elements can contain other elements.', htmlDoc('<h1>My First Heading</h1>\n<p>My <b>first</b> paragraph.</p>')),
        L('html-attributes', 'HTML Attributes', 'Attributes provide additional information about elements. They are always specified in the start tag and usually come in name/value pairs like name="value".', htmlDoc('<a href="https://example.com" title="Visit example">Visit example.com</a>\n<p lang="en" style="color:teal;">A styled paragraph.</p>')),
        L('html-headings', 'HTML Headings', 'HTML headings are titles or subtitles that you want to display on a web page. <h1> defines the most important heading and <h6> the least important.', htmlDoc('<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>')),
        L('html-paragraphs', 'HTML Paragraphs', 'The <p> element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space before and after it.', htmlDoc('<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>\n<hr>\n<p>This is a paragraph<br>with a line break.</p>')),
      ] },
      { title: 'HTML Content', lessons: [
        L('html-links', 'HTML Links', 'Links are found in nearly all web pages and let users click their way from page to page. The <a> element with an href attribute creates a hyperlink.', htmlDoc('<p><a href="https://example.com" target="_blank">Open example.com in a new tab</a></p>\n<p><a href="#bottom">Jump to bottom</a></p>\n<p id="bottom">Bottom of the page</p>')),
        L('html-images', 'HTML Images', 'Images can improve the design and appearance of a web page. The <img> element is empty, contains attributes only, and requires src and alt.', htmlDoc('<img src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27100%27%3E%3Crect width=%27200%27 height=%27100%27 fill=%27%2304AA6D%27/%3E%3C/svg%3E" alt="Green rectangle" width="200" height="100">')),
        L('html-lists', 'HTML Lists', 'HTML lists allow you to group a set of related items. Unordered lists use <ul>, ordered lists use <ol>, and each item uses <li>.', htmlDoc('<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n</ul>\n<ol>\n  <li>Step one</li>\n  <li>Step two</li>\n</ol>')),
        L('html-tables', 'HTML Tables', 'HTML tables arrange data into rows and columns. A table is built from <table>, <tr> rows, <th> header cells and <td> data cells.', htmlDoc('<table border="1">\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ana</td><td>28</td></tr>\n  <tr><td>Kofi</td><td>34</td></tr>\n</table>')),
        L('html-forms', 'HTML Forms', 'An HTML form collects user input. Forms contain input elements like text fields, checkboxes, radio buttons and submit buttons.', htmlDoc('<form onsubmit="event.preventDefault(); alert(\'Hello \' + this.fname.value)">\n  <label for="fname">First name:</label>\n  <input type="text" id="fname" name="fname" value="Sam">\n  <input type="submit" value="Submit">\n</form>')),
        L('html-semantic', 'HTML Semantic Elements', 'Semantic elements clearly describe their meaning to both the browser and the developer. Examples include <header>, <nav>, <main>, <article> and <footer>.', htmlDoc('<header><h1>Site title</h1></header>\n<nav><a href="#">Home</a> | <a href="#">About</a></nav>\n<main><article><h2>Article</h2><p>Content.</p></article></main>\n<footer>Footer text</footer>')),
      ] },
    ],
  },
  {
    slug: 'css', name: 'CSS', lang: 'html', runnable: true, color: '#FFF4A3',
    tagline: 'The language for styling web pages',
    intro: 'CSS is the language we use to style an HTML document. It describes how elements should be displayed: colors, layout, spacing, fonts and responsive behaviour across screen sizes.',
    sample: htmlDoc('<h1>This is a heading</h1>\n<p>This is a paragraph.</p>', '<style>\nbody {\n  background-color: lightblue;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\np {\n  font-family: verdana;\n}\n</style>\n'),
    groups: [
      { title: 'CSS Tutorial', lessons: [
        L('css-home', 'CSS HOME', 'CSS saves a lot of work: one stylesheet can control the layout of an entire website. This tutorial teaches CSS from basic to advanced.', htmlDoc('<h1>Styled page</h1>\n<p>Edit the CSS and click Run.</p>', '<style>\nbody { background: #fff4a3; font-family: sans-serif; }\nh1 { color: #282a35; }\n</style>\n')),
        L('css-introduction', 'CSS Introduction', 'CSS stands for Cascading Style Sheets. It describes how HTML elements are displayed on screen, paper or other media, and can control the layout of multiple pages at once.', htmlDoc('<h1>My First CSS Example</h1>\n<p>This is a paragraph.</p>', '<style>\nbody {\n  background-color: lightblue;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\np {\n  font-family: verdana;\n  font-size: 20px;\n}\n</style>\n'), {
          sections: [
            { h: 'What is CSS?', list: ['CSS stands for Cascading Style Sheets', 'CSS describes how HTML elements are displayed', 'CSS saves work by controlling many pages at once', 'External stylesheets are stored in .css files'] },
            { h: 'Why use CSS?', p: 'CSS defines styles for your pages, including design, layout and variations in display for different devices and screen sizes.' },
          ] }),
        L('css-syntax', 'CSS Syntax', 'A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style; each declaration includes a property name and a value.', htmlDoc('<p>Hello World!</p>\n<p>These paragraphs are styled with CSS.</p>', '<style>\np {\n  color: red;\n  text-align: center;\n}\n</style>\n')),
        L('css-selectors', 'CSS Selectors', 'CSS selectors find the HTML elements you want to style. You can select by element name, id, class, attribute or relationship.', htmlDoc('<p id="para1">Styled by id</p>\n<p class="center">Styled by class</p>', '<style>\n#para1 { color: red; }\n.center { text-align: center; color: blue; }\n</style>\n')),
        L('css-colors', 'CSS Colors', 'Colors are specified using predefined names or RGB, HEX, HSL, RGBA and HSLA values.', htmlDoc('<h1 style="background-color:Tomato;">Tomato</h1>\n<h1 style="background-color:#04AA6D;">#04AA6D</h1>\n<h1 style="background-color:hsl(240,100%,70%);">HSL</h1>')),
        L('css-box-model', 'CSS Box Model', 'Every HTML element is a box made of margins, borders, padding and the actual content. Understanding the box model is the key to layout.', htmlDoc('<div>This box has padding, a border and a margin.</div>', '<style>\ndiv {\n  width: 300px;\n  border: 15px solid green;\n  padding: 50px;\n  margin: 20px;\n}\n</style>\n')),
      ] },
      { title: 'CSS Layout', lessons: [
        L('css-flexbox', 'CSS Flexbox', 'The Flexible Box Layout module makes it easy to design flexible, responsive layouts without using floats or positioning.', htmlDoc('<div class="flex">\n  <div>1</div><div>2</div><div>3</div>\n</div>', '<style>\n.flex { display: flex; gap: 10px; background: #2196F3; padding: 10px; }\n.flex > div { background: #f1f1f1; padding: 20px; font-size: 30px; }\n</style>\n')),
        L('css-grid', 'CSS Grid', 'The CSS Grid Layout module offers a grid-based layout system with rows and columns, making it easier to design pages without floats.', htmlDoc('<div class="grid">\n  <div>1</div><div>2</div><div>3</div>\n  <div>4</div><div>5</div><div>6</div>\n</div>', '<style>\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.grid > div { background: #96D4D4; padding: 20px; text-align: center; }\n</style>\n')),
        L('css-responsive', 'CSS Media Queries', 'Media queries apply styles only when certain conditions are true, such as a minimum viewport width. They are the foundation of responsive design.', htmlDoc('<p>Resize the output panel to see the background change.</p>', '<style>\nbody { background: pink; }\n@media (min-width: 500px) {\n  body { background: lightgreen; }\n}\n</style>\n')),
      ] },
    ],
  },
  {
    slug: 'js', name: 'JavaScript', lang: 'html', runnable: true, color: '#FFF4A3',
    tagline: 'The language for programming web pages',
    intro: 'JavaScript is the programming language of the web. It can update and change both HTML and CSS, and it can calculate, manipulate and validate data in the browser.',
    sample: htmlDoc('<button onclick="myFunction()">Click Me!</button>\n<p id="demo"></p>\n\n<script>\nfunction myFunction() {\n  let x = document.getElementById("demo");\n  x.style.fontSize = "25px";\n  x.style.color = "red";\n  x.innerHTML = "Hello JavaScript!";\n}\n</script>'),
    groups: [
      { title: 'JS Tutorial', lessons: [
        L('js-home', 'JS HOME', 'JavaScript is easy to learn. This tutorial teaches JavaScript from basic to advanced with runnable examples you can edit.', htmlDoc('<p id="demo">JavaScript can change HTML content.</p>\n<button type="button" onclick="document.getElementById(\'demo\').innerHTML = \'Hello JavaScript!\'">Click Me!</button>')),
        L('js-introduction', 'JS Introduction', 'This lesson shows what JavaScript can do. One of many JavaScript HTML methods is getElementById(), which finds an element by id and lets you change its content.', htmlDoc('<h2>What Can JavaScript Do?</h2>\n<p id="demo">JavaScript can change HTML content.</p>\n<button type="button" onclick="document.getElementById(\'demo\').innerHTML = \'Hello JavaScript!\'">Click Me!</button>'), {
          sections: [
            { h: 'JavaScript Can Change HTML Styles', p: 'Changing the style of an HTML element is a variant of changing an HTML attribute, for example element.style.fontSize = "35px".' },
            { h: 'JavaScript Can Hide HTML Elements', p: 'Hiding elements can be done by changing the display style: element.style.display = "none".' },
          ] }),
        L('js-whereto', 'JS Where To', 'In HTML, JavaScript code is inserted between <script> and </script> tags. Scripts can be placed in the <head>, the <body>, or in external files.', htmlDoc('<p id="demo"></p>\n<script>\ndocument.getElementById("demo").innerHTML = "My First JavaScript";\n</script>')),
        L('js-output', 'JS Output', 'JavaScript can display data by writing into an HTML element, writing into the document, using an alert box, or writing to the browser console.', htmlDoc('<p id="demo"></p>\n<script>\ndocument.getElementById("demo").innerHTML = 5 + 6;\nconsole.log("Logged to console");\n</script>')),
        L('js-variables', 'JS Variables', 'Variables are containers for storing data. JavaScript variables can be declared with let, const or var.', htmlDoc('<p id="demo"></p>\n<script>\nconst price1 = 5;\nconst price2 = 6;\nlet total = price1 + price2;\ndocument.getElementById("demo").innerHTML = "The total is: " + total;\n</script>')),
        L('js-functions', 'JS Functions', 'A JavaScript function is a block of code designed to perform a particular task. It runs when something invokes (calls) it.', htmlDoc('<p id="demo"></p>\n<script>\nfunction toCelsius(f) {\n  return (5 / 9) * (f - 32);\n}\ndocument.getElementById("demo").innerHTML = toCelsius(77) + " °C";\n</script>')),
      ] },
      { title: 'JS Data & DOM', lessons: [
        L('js-arrays', 'JS Arrays', 'An array is a special variable that can hold more than one value. Array methods like map, filter and join make working with lists easy.', htmlDoc('<p id="demo"></p>\n<script>\nconst cars = ["Saab", "Volvo", "BMW"];\ndocument.getElementById("demo").innerHTML = cars.map(c => c.toUpperCase()).join(", ");\n</script>')),
        L('js-objects', 'JS Objects', 'Objects are variables that contain many values written as name:value pairs called properties.', htmlDoc('<p id="demo"></p>\n<script>\nconst car = { type: "Fiat", model: "500", color: "white" };\ndocument.getElementById("demo").innerHTML = car.type + " " + car.model;\n</script>')),
        L('js-events', 'JS Events', 'HTML events are things that happen to HTML elements, such as a click or a key press. JavaScript can react to these events.', htmlDoc('<button id="btn">Click count: 0</button>\n<script>\nlet n = 0;\ndocument.getElementById("btn").addEventListener("click", function () {\n  n++;\n  this.textContent = "Click count: " + n;\n});\n</script>')),
        L('js-dom', 'JS HTML DOM', 'The HTML DOM is a standard object model for HTML. With it, JavaScript can access and change all the elements of a document.', htmlDoc('<ul id="list"></ul>\n<script>\n["Apple", "Banana", "Cherry"].forEach(f => {\n  const li = document.createElement("li");\n  li.textContent = f;\n  document.getElementById("list").appendChild(li);\n});\n</script>')),
      ] },
    ],
  },
  {
    slug: 'python', name: 'Python', lang: 'python', runnable: false, color: '#96D4D4',
    tagline: 'A popular programming language',
    intro: 'Python is a popular, readable programming language used for web development, data analysis, automation, machine learning and scripting. Python examples on this site are shown with static output because Python needs its own runtime.',
    sample: 'if 5 > 2:\n  print("Five is greater than two!")', sampleOutput: 'Five is greater than two!',
    groups: [
      { title: 'Python Tutorial', lessons: [
        L('python-home', 'Python HOME', 'Python is a popular programming language. This tutorial covers syntax, data types, control flow and functions.', 'print("Hello, World!")', { output: 'Hello, World!' }),
        L('python-introduction', 'Python Intro', 'Python was created by Guido van Rossum and first released in 1991. It works on many platforms and has a simple syntax similar to the English language.', 'print("Hello, World!")\nprint(2 + 3)', { output: 'Hello, World!\n5', sections: [ { h: 'What can Python do?', list: ['Create web applications on a server', 'Connect to databases and read or modify files', 'Handle big data and perform complex mathematics', 'Prototype quickly or build production software'] } ] }),
        L('python-syntax', 'Python Syntax', 'Python uses indentation to indicate a block of code. Using the wrong indentation causes an error.', 'if 5 > 2:\n    print("Five is greater than two!")', { output: 'Five is greater than two!' }),
        L('python-variables', 'Python Variables', 'Variables are created the moment you first assign a value to them. Python has no command for declaring a variable.', 'x = 5\ny = "John"\nprint(x)\nprint(y)', { output: '5\nJohn' }),
        L('python-lists', 'Python Lists', 'Lists store multiple items in a single variable. They are ordered, changeable and allow duplicate values.', 'fruits = ["apple", "banana", "cherry"]\nfruits.append("orange")\nprint(fruits)', { output: "['apple', 'banana', 'cherry', 'orange']" }),
        L('python-functions', 'Python Functions', 'A function is a block of code that only runs when it is called. Functions are defined with the def keyword.', 'def greet(name):\n    return "Hello " + name\n\nprint(greet("Emil"))', { output: 'Hello Emil' }),
        L('python-loops', 'Python For Loops', 'A for loop iterates over a sequence such as a list, a tuple, a string or a range.', 'for x in range(3):\n    print(x)', { output: '0\n1\n2' }),
      ] },
    ],
  },
  {
    slug: 'sql', name: 'SQL', lang: 'sql', runnable: false, color: '#96D4D4',
    tagline: 'A language for accessing databases',
    intro: 'SQL is the standard language for storing, manipulating and retrieving data in relational databases such as MySQL, PostgreSQL, SQL Server and SQLite.',
    sample: 'SELECT * FROM Customers\nWHERE Country = \'Mexico\';', sampleOutput: 'CustomerID | CustomerName        | Country\n2          | Ana Trujillo Emp.   | Mexico\n3          | Antonio Moreno      | Mexico',
    groups: [
      { title: 'SQL Tutorial', lessons: [
        L('sql-home', 'SQL HOME', 'SQL is a standard language for storing, manipulating and retrieving data in databases.', 'SELECT * FROM Customers;', { output: '(all rows of the Customers table)' }),
        L('sql-introduction', 'SQL Intro', 'SQL stands for Structured Query Language. It lets you access and manipulate databases and became an ANSI standard in 1986.', 'SELECT CustomerName, City FROM Customers;', { output: 'CustomerName       | City\nAlfreds Futterkiste| Berlin\nAround the Horn    | London', sections: [ { h: 'What can SQL do?', list: ['Execute queries against a database', 'Retrieve, insert, update and delete records', 'Create new databases, tables and views', 'Set permissions on tables and procedures'] } ] }),
        L('sql-select', 'SQL Select', 'The SELECT statement is used to select data from a database. The data returned is stored in a result table.', 'SELECT CustomerName, City\nFROM Customers;', { output: 'CustomerName | City\n...          | ...' }),
        L('sql-where', 'SQL Where', 'The WHERE clause filters records so that only those that fulfil a specified condition are returned.', "SELECT * FROM Customers\nWHERE Country = 'Mexico';", { output: '2 rows returned' }),
        L('sql-orderby', 'SQL Order By', 'The ORDER BY keyword sorts the result-set in ascending or descending order.', 'SELECT * FROM Products\nORDER BY Price DESC;', { output: 'Rows sorted by Price, highest first' }),
        L('sql-insert', 'SQL Insert Into', 'The INSERT INTO statement is used to insert new records in a table.', "INSERT INTO Customers (CustomerName, City)\nVALUES ('Cardinal', 'Stavanger');", { output: '1 row inserted' }),
        L('sql-joins', 'SQL Joins', 'A JOIN clause combines rows from two or more tables based on a related column between them.', 'SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers\nON Orders.CustomerID = Customers.CustomerID;', { output: 'OrderID | CustomerName\n10308   | Ana Trujillo' }),
      ] },
    ],
  },
]

// Additional topics share the same templates with shorter lesson lists.
const simpleTopic = (slug, name, lang, tagline, intro, lessons, color = '#E7E9EB') => ({
  slug, name, lang, runnable: false, color, tagline, intro,
  sample: lessons[0][2], sampleOutput: lessons[0][3],
  groups: [{ title: `${name} Tutorial`, lessons: lessons.map(([s, t, code, output, desc]) => L(s, t, desc, code, { output })) }],
})

topics.push(
  simpleTopic('java', 'Java', 'java', 'A general-purpose, object-oriented language', 'Java is a popular object-oriented language that runs on billions of devices, from servers to Android phones. Java examples are shown with static output.', [
    ['java-home', 'Java HOME', 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}', 'Hello World', 'Java is one of the most widely used languages. This tutorial starts with your first program.'],
    ['java-introduction', 'Java Intro', 'public class Main {\n  public static void main(String[] args) {\n    System.out.println(3 + 4);\n  }\n}', '7', 'Java was released in 1995 and is used for mobile, desktop, web and server applications.'],
    ['java-variables', 'Java Variables', 'String name = "John";\nint myNum = 15;\nSystem.out.println(name + " is " + myNum);', 'John is 15', 'Variables are containers for storing data values. Every Java variable has a type.'],
    ['java-classes', 'Java Classes', 'public class Car {\n  String model = "Mustang";\n}\n\nCar c = new Car();\nSystem.out.println(c.model);', 'Mustang', 'Everything in Java is associated with classes and objects.'],
  ]),
  simpleTopic('php', 'PHP', 'php', 'A web server programming language', 'PHP is a server scripting language for building dynamic, interactive web pages. PHP runs on a server, so examples here show static output.', [
    ['php-home', 'PHP HOME', '<?php\necho "My first PHP script!";\n?>', 'My first PHP script!', 'PHP is a widely-used, free and efficient alternative to other server-side languages.'],
    ['php-introduction', 'PHP Intro', '<?php\n$x = 5;\n$y = 10;\necho $x + $y;\n?>', '15', 'PHP files can contain text, HTML, CSS, JavaScript and PHP code that runs on the server.'],
    ['php-variables', 'PHP Variables', '<?php\n$txt = "World";\necho "Hello $txt!";\n?>', 'Hello World!', 'In PHP, a variable starts with the $ sign followed by its name.'],
  ]),
  simpleTopic('c', 'C', 'c', 'A powerful general-purpose language', 'C is a general-purpose language that is close to the hardware and still used for operating systems, embedded devices and performance-critical software.', [
    ['c-home', 'C HOME', '#include <stdio.h>\n\nint main() {\n  printf("Hello World!");\n  return 0;\n}', 'Hello World!', 'C is a great first step toward understanding how computers run programs.'],
    ['c-introduction', 'C Intro', '#include <stdio.h>\n\nint main() {\n  int x = 5;\n  printf("%d", x * 2);\n  return 0;\n}', '10', 'C was developed by Dennis Ritchie in 1972 at Bell Labs.'],
  ]),
  simpleTopic('cpp', 'C++', 'cpp', 'A language for high-performance software', 'C++ extends C with classes and objects and is used in games, browsers and high-performance applications.', [
    ['cpp-home', 'C++ HOME', '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello World!";\n  return 0;\n}', 'Hello World!', 'C++ is one of the most popular languages for performance-critical code.'],
    ['cpp-introduction', 'C++ Intro', '#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 5, y = 6;\n  cout << x + y;\n}', '11', 'C++ was developed by Bjarne Stroustrup as an extension to C.'],
  ]),
  simpleTopic('cs', 'C#', 'csharp', 'A modern language for .NET', 'C# is a modern, object-oriented language from Microsoft that runs on .NET and is used for web apps, desktop apps and games.', [
    ['cs-home', 'C# HOME', 'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello World!");\n  }\n}', 'Hello World!', 'C# is pronounced "C-Sharp" and is closely related to C++ and Java.'],
    ['cs-introduction', 'C# Intro', 'string name = "Ada";\nConsole.WriteLine("Hi " + name);', 'Hi Ada', 'C# was first released in 2002 together with the .NET Framework.'],
  ]),
  simpleTopic('bootstrap', 'Bootstrap', 'html', 'A CSS framework for responsive sites', 'Bootstrap is a popular CSS framework for building responsive, mobile-first websites using a grid system and prebuilt components.', [
    ['bootstrap-home', 'Bootstrap HOME', '<div class="container">\n  <div class="row">\n    <div class="col-sm-6">Column</div>\n    <div class="col-sm-6">Column</div>\n  </div>\n</div>', 'Two equal columns on small screens and up', 'Bootstrap provides a grid, utilities and components out of the box.'],
    ['bootstrap-grid', 'Bootstrap Grid', '<div class="row">\n  <div class="col-4">1 of 3</div>\n  <div class="col-8">2 of 3</div>\n</div>', 'A 4/8 column split', 'The Bootstrap grid allows up to 12 columns across the page.'],
  ]),
  simpleTopic('react', 'React', 'jsx', 'A JavaScript library for user interfaces', 'React is a JavaScript library for building user interfaces from reusable components. React examples are displayed with a static preview.', [
    ['react-home', 'React HOME', 'function Hello() {\n  return <h1>Hello, React!</h1>;\n}', 'Hello, React!', 'React lets you compose complex UIs from small, isolated pieces of code called components.'],
    ['react-components', 'React Components', 'function Car(props) {\n  return <h2>I am a {props.color} car!</h2>;\n}\n\n<Car color="red" />', 'I am a red car!', 'Components are independent and reusable bits of code that return HTML.'],
    ['react-hooks', 'React useState', 'function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}', 'A button that counts clicks', 'The useState hook lets function components track state.'],
  ]),
  simpleTopic('nodejs', 'Node.js', 'javascript', 'JavaScript on the server', 'Node.js is an open source server environment that lets you run JavaScript on the server. Server code is shown with static output.', [
    ['nodejs-home', 'Node.js HOME', "const http = require('http');\n\nhttp.createServer((req, res) => {\n  res.end('Hello World!');\n}).listen(8000);", 'Server responds with: Hello World!', 'Node.js uses an event-driven, non-blocking I/O model.'],
    ['nodejs-modules', 'Node.js Modules', "exports.myDateTime = function () {\n  return Date();\n};", 'Exports a reusable function', 'Modules are like JavaScript libraries: a set of functions you include in your app.'],
  ]),
  simpleTopic('git', 'Git', 'bash', 'A version control system', 'Git is a popular version control system used to track changes in code and collaborate with other developers.', [
    ['git-home', 'Git HOME', 'git init\ngit add .\ngit commit -m "First commit"', '[main (root-commit) a1b2c3d] First commit', 'Git tracks every change to your project so you can review history and collaborate.'],
    ['git-branch', 'Git Branch', 'git branch hello-world\ngit checkout hello-world', "Switched to branch 'hello-world'", 'Branches let you work on different parts of a project without affecting the main branch.'],
  ]),
)

export const topicBySlug = Object.fromEntries(topics.map((t) => [t.slug, t]))
export const allLessons = (topic) => topic.groups.flatMap((g) => g.lessons)

// ---------- Exercises & quizzes ----------
const q = (question, options, answer, explain) => ({ question, options, answer, explain })
export const quizzes = {
  html: [
    q('What does HTML stand for?', ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'], 0, 'HTML stands for Hyper Text Markup Language.'),
    q('Which element defines the largest heading?', ['<heading>', '<h6>', '<h1>', '<head>'], 2, '<h1> is the most important heading.'),
    q('Which attribute specifies the URL of a link?', ['src', 'href', 'link', 'url'], 1, 'The href attribute holds the link destination.'),
  ],
  css: [
    q('What does CSS stand for?', ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'], 1, 'CSS stands for Cascading Style Sheets.'),
    q('Which property changes the text color?', ['font-color', 'text-color', 'color'], 2, 'Use the color property.'),
    q('How do you select an element with id "demo"?', ['.demo', '#demo', 'demo', '*demo'], 1, 'The # symbol selects by id.'),
  ],
  js: [
    q('Inside which element do you put JavaScript?', ['<js>', '<javascript>', '<script>', '<scripting>'], 2, 'JavaScript goes inside <script>.'),
    q('Which keyword declares a constant?', ['let', 'const', 'var', 'constant'], 1, 'const declares a block-scoped constant.'),
    q('How do you write "Hello" in an alert box?', ['msg("Hello")', 'alert("Hello")', 'alertBox("Hello")'], 1, 'alert() opens an alert dialog.'),
  ],
  python: [
    q('How do you output text in Python?', ['echo "Hi"', 'print("Hi")', 'console.log("Hi")'], 1, 'print() writes to standard output.'),
    q('Which keyword defines a function?', ['function', 'def', 'fun', 'define'], 1, 'Functions are defined with def.'),
    q('What indicates a code block in Python?', ['Curly braces', 'Indentation', 'Parentheses'], 1, 'Python uses indentation for blocks.'),
  ],
  sql: [
    q('Which statement retrieves data?', ['GET', 'OPEN', 'SELECT', 'EXTRACT'], 2, 'SELECT reads data from a database.'),
    q('Which clause filters rows?', ['WHERE', 'FILTER', 'IF', 'HAVING ONLY'], 0, 'WHERE filters records.'),
    q('Which keyword sorts results?', ['SORT BY', 'ORDER BY', 'ARRANGE'], 1, 'ORDER BY sorts the result-set.'),
  ],
}
const genericQuiz = (t) => [
  q(`${t.name} is best described as:`, [t.tagline, 'An image format', 'A web browser'], 0, `${t.name}: ${t.tagline.toLowerCase()}.`),
  q(`Where should you start learning ${t.name}?`, ['The last lesson', `The ${allLessons(t)[0].title} lesson`, 'Anywhere random'], 1, 'The tutorial is ordered for beginners.'),
]
export const quizFor = (slug) => quizzes[slug] || genericQuiz(topicBySlug[slug])

// Fill-in-the-blank code exercises (answer compared case-insensitively, trimmed)
export const codeExercises = {
  html: { task: 'Add the missing tag name to create a paragraph.', before: '<', after: '>This is a paragraph.</p>', answer: ['p'] },
  css: { task: 'Set the text color of all <p> elements to red.', before: 'p {\n  ', after: ': red;\n}', answer: ['color'] },
  js: { task: 'Complete the code to show "Hello" in an alert box.', before: '', after: '("Hello");', answer: ['alert', 'window.alert'] },
  python: { task: 'Insert the missing function to output "Hello World".', before: '', after: '("Hello World")', answer: ['print'] },
  sql: { task: 'Select all columns from the Customers table.', before: 'SELECT ', after: ' FROM Customers;', answer: ['*'] },
}

// ---------- References (structured repeated entries) ----------
export const references = {
  html: { title: 'HTML Element Reference', overview: 'An alphabetical list of commonly used HTML elements and what they do.', cols: ['Tag', 'Description', 'Category'], rows: [
    ['<a>', 'Defines a hyperlink', 'Links'], ['<article>', 'Defines an independent, self-contained article', 'Semantic'], ['<body>', 'Defines the document body', 'Basic'], ['<button>', 'Defines a clickable button', 'Forms'], ['<div>', 'Defines a generic section', 'Styles'], ['<footer>', 'Defines a footer for a document or section', 'Semantic'], ['<form>', 'Defines an HTML form for user input', 'Forms'], ['<h1> to <h6>', 'Defines HTML headings', 'Basic'], ['<header>', 'Defines a header for a document or section', 'Semantic'], ['<img>', 'Defines an image', 'Images'], ['<input>', 'Defines an input control', 'Forms'], ['<li>', 'Defines a list item', 'Lists'], ['<nav>', 'Defines navigation links', 'Semantic'], ['<ol>', 'Defines an ordered list', 'Lists'], ['<p>', 'Defines a paragraph', 'Basic'], ['<section>', 'Defines a section in a document', 'Semantic'], ['<span>', 'Defines an inline section', 'Styles'], ['<table>', 'Defines a table', 'Tables'], ['<td>', 'Defines a table cell', 'Tables'], ['<ul>', 'Defines an unordered list', 'Lists'],
  ], syntax: '<tagname attribute="value">Content</tagname>' },
  css: { title: 'CSS Property Reference', overview: 'An alphabetical list of commonly used CSS properties with their default values.', cols: ['Property', 'Description', 'Default'], rows: [
    ['background-color', 'Sets the background color of an element', 'transparent'], ['border', 'Shorthand for border width, style and color', 'medium none'], ['color', 'Sets the color of text', 'inherited'], ['display', 'Specifies how an element is displayed', 'inline'], ['flex', 'Shorthand for flex-grow, flex-shrink and flex-basis', '0 1 auto'], ['font-family', 'Specifies the font for text', 'browser'], ['font-size', 'Specifies the size of the font', 'medium'], ['gap', 'Sets the gap between rows and columns', 'normal'], ['grid-template-columns', 'Specifies the columns of a grid', 'none'], ['margin', 'Sets all margin properties', '0'], ['padding', 'Sets all padding properties', '0'], ['position', 'Specifies the positioning method', 'static'], ['text-align', 'Specifies horizontal alignment of text', 'start'], ['width', 'Sets the width of an element', 'auto'],
  ], syntax: 'selector {\n  property: value;\n}' },
  js: { title: 'JavaScript Reference', overview: 'Common built-in JavaScript methods grouped by object.', cols: ['Method', 'Description', 'Object'], rows: [
    ['concat()', 'Joins arrays and returns a new array', 'Array'], ['filter()', 'Creates an array with elements that pass a test', 'Array'], ['forEach()', 'Calls a function for each element', 'Array'], ['includes()', 'Checks if an array contains a value', 'Array'], ['join()', 'Joins all elements into a string', 'Array'], ['map()', 'Creates an array from calling a function on every element', 'Array'], ['push()', 'Adds new elements to the end', 'Array'], ['parse()', 'Parses a JSON string', 'JSON'], ['stringify()', 'Converts a value to a JSON string', 'JSON'], ['floor()', 'Rounds a number down', 'Math'], ['random()', 'Returns a random number between 0 and 1', 'Math'], ['slice()', 'Extracts part of a string', 'String'], ['split()', 'Splits a string into an array', 'String'], ['toUpperCase()', 'Converts a string to uppercase', 'String'], ['trim()', 'Removes whitespace from both ends', 'String'],
  ], syntax: 'object.method(arguments)' },
  python: { title: 'Python Built-in Functions', overview: 'Built-in functions that are always available in Python.', cols: ['Function', 'Description', 'Returns'], rows: [
    ['abs()', 'Returns the absolute value of a number', 'number'], ['input()', 'Reads input from the user', 'str'], ['int()', 'Converts a value to an integer', 'int'], ['len()', 'Returns the length of an object', 'int'], ['list()', 'Creates a list', 'list'], ['max()', 'Returns the largest item', 'any'], ['min()', 'Returns the smallest item', 'any'], ['print()', 'Prints to standard output', 'None'], ['range()', 'Returns a sequence of numbers', 'range'], ['sorted()', 'Returns a sorted list', 'list'], ['str()', 'Converts a value to a string', 'str'], ['sum()', 'Sums the items of an iterable', 'number'], ['type()', 'Returns the type of an object', 'type'],
  ], syntax: 'function_name(arguments)' },
  sql: { title: 'SQL Keywords Reference', overview: 'Reserved SQL keywords and what they do.', cols: ['Keyword', 'Description', 'Category'], rows: [
    ['AND', 'Only includes rows where both conditions are true', 'Operators'], ['CREATE TABLE', 'Creates a new table', 'DDL'], ['DELETE', 'Deletes rows from a table', 'DML'], ['DISTINCT', 'Selects only distinct values', 'Query'], ['GROUP BY', 'Groups the result set', 'Query'], ['INNER JOIN', 'Returns rows with matching values in both tables', 'Joins'], ['INSERT INTO', 'Inserts new rows', 'DML'], ['LIKE', 'Searches for a pattern in a column', 'Operators'], ['ORDER BY', 'Sorts the result set', 'Query'], ['SELECT', 'Selects data from a database', 'Query'], ['UPDATE', 'Updates existing rows', 'DML'], ['WHERE', 'Filters a result set', 'Query'],
  ], syntax: 'SELECT column1, column2\nFROM table_name\nWHERE condition;' },
}

// ---------- Search index ----------
export const searchIndex = [
  ...topics.map((t) => ({ title: `${t.name} Tutorial`, text: `${t.tagline} ${t.intro}`, url: `/${t.slug}/`, kind: 'Tutorial' })),
  ...topics.flatMap((t) => allLessons(t).map((l) => ({ title: l.title, text: `${t.name} ${l.intro}`, url: `/${t.slug}/${l.slug}/`, kind: t.name }))),
  ...Object.entries(references).map(([s, r]) => ({ title: r.title, text: r.overview + ' ' + r.rows.map((x) => x[0]).join(' '), url: `/${s}/reference/`, kind: 'Reference' })),
  ...topics.map((t) => ({ title: `${t.name} Exercises & Quiz`, text: `practice quiz exercises ${t.name}`, url: `/${t.slug}/exercises/`, kind: 'Exercise' })),
]

export function search(query) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return []
  return searchIndex
    .map((e) => {
      const title = e.title.toLowerCase(), text = e.text.toLowerCase()
      let score = 0
      for (const term of terms) {
        if (title.includes(term)) score += title.startsWith(term) ? 10 : 6
        else if (text.includes(term)) score += 1
        else return null
      }
      return { ...e, score }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
}
