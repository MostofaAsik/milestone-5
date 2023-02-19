//where to add
const fruitlist = document.getElementById('fruitName')
// console.log(fruitlist);
//what to add
const li = document.createElement('li')
li.innerText = 'jackfruit';
//add the child
fruitlist.appendChild(li);



// step-1


const container = document.getElementById('mainId');
// console.log(container);
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My Future Plan';
section.appendChild(h1);
const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'baby nibo 1 ta';
const li2 = document.createElement('li')
li2.innerText = 'baby nibo 2 ta';
ul.appendChild(li1)
ul.appendChild(li2)
section.appendChild(ul);
container.appendChild(section);


// append2-process

const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1> My Dress</h1>
<ul>
<li>shirts</li>
<li>Pants</li>
<li>Juta</li>
</ul>

`
container.appendChild(sectionDress);

const div = document.createElement('div')
// console.log(div)
div.innerHTML = `
 <h1>Hi I am MAS</h1>
 <p>age:30</p>
`
container.appendChild(div)


