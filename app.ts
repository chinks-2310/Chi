import persons from '../mock.json';
window.addEventListener('load',()=>{
    
    let toDoLength:number =0;
    let inProgress:number=0;
    let done:number=0;
    for(var i=0;i<persons.persons.length;i++)
    {
        if(persons.persons[i].Status==="High Priority" || persons.persons[i].Status==="Low Priority")
        {
            toDoLength++;
        }
        if(persons.persons[i].Status==="In Progress") {
            inProgress++;
        }
        if(persons.persons[i].Status==="Done"){
            done++;
        }
    }
    console.log(persons.persons.length);
    
  let container1=document.querySelector('.container1')
  let container2=document.querySelector('.container2')
  let container3=document.querySelector('.container3')
  let container1content = '';
  let container2content = '';
  let container3content = ''
  let list = document.querySelector('.list');


  let f1=0;
  let f2=0;
  let f3=0;
    
    for(let i=0;i<persons.persons.length;i++)
    {
        if(persons.persons[i].Status==="High Priority" || persons.persons[i].Status==="Low Priority"){
            if(f1==0)
            {
                container1content+=`<div class="title1" style="background-color=#ebedf4";>
                <h3>To Do ${toDoLength}</h3>
                </div>
                `
                f1=1;
            }
         container1content += ` <div class="row-card">
        <div class="card" style="margin-bottom:20px";>
            <div class="date">
                <p>ID:${persons.persons[i].id}</p>
                <p>${persons.persons[i].date}</p>
            </div>
            <div class="user-name">
                <h4>${persons.persons[i].title}</h4>
            </div>
            <div class="description">
                <p>${persons.persons[i].description}</p>
            </div>
            <div class="user">
                <div class="assignee">
                    <p>Assignee</p>
                    <div class="author">
                        <img src=${persons.persons[i].Assignee['profile-pic']}   style="margin-left: 20px;">
                        <p>${persons.persons[i].Assignee.name}</p>
                        <p>${persons.persons[i].Assignee.position}</p>
                    </div>
                </div>
                <div class="status">
                    <p style="margin-bottom: 1px;">Status</p>
                    <p style="color: white; background-color: red;border-radius: 0px; border: 1px solid;">${persons.persons[i].Status}</p>
                </div>
            </div>
        </div>
    </div>
        `
        
        }
        if(persons.persons[i].Status==="In Progress"){
            if(f2==0)
            {
                container2content+=`<div class="title1">
                <h3>In Progress ${inProgress}</h3>
                </div>
                `
                f2=1;
            }
            container2content += ` <div class="row-card">
           <div class="card" style="margin-bottom:20px";>
               <div class="date">
                   <p>ID:${persons.persons[i].id}</p>
                   <p>${persons.persons[i].date}</p>
               </div>
               <div class="user-name">
                   <h4>${persons.persons[i].title}</h4>
               </div>
               <div class="description">
                   <p>${persons.persons[i].description}</p>
               </div>
               <div class="user">
                   <div class="assignee">
                       <p>Assignee</p>
                       <div class="author">
                           <img src=${persons.persons[i].Assignee['profile-pic']}   style="margin-left: 20px;">
                           <p>${persons.persons[i].Assignee.name}</p>
                           <p>${persons.persons[i].Assignee.position}</p>
                       </div>
                   </div>
                   <div class="status">
                       <p style="margin-bottom: 1px;">Status</p>
                       <p style="color: white; background-color: red;border-radius: 0px; border: 1px solid;">${persons.persons[i].Status}</p>
                   </div>
               </div>
           </div>
       </div>
           `
           }
           //console.log(container2content);
           
           if(persons.persons[i].Status==="Done"){
            if(f3==0)
            {
                container3content+=`<div class="title1">
                <h3>Done ${done}</h3>
                </div>
                `
                f3=1;
            }
            container3content += ` <div class="row-card">
           <div class="card" style="margin-bottom:20px";>
               <div class="date">
                   <p>ID:${persons.persons[i].id}</p>
                   <p>${persons.persons[i].date}</p>
               </div>
               <div class="user-name">
                   <h4>${persons.persons[i].title}</h4>
               </div>
               <div class="description">
                   <p>${persons.persons[i].description}</p>
               </div>
               <div class="user">
                   <div class="assignee">
                       <p>Assignee</p>
                       <div class="author">
                           <img src=${persons.persons[i].Assignee['profile-pic']}   style="margin-left: 20px;">
                           <p>${persons.persons[i].Assignee.name}</p>
                           <p>${persons.persons[i].Assignee.position}</p>
                       </div>
                   </div>
                   <div class="status">
                       <p style="margin-bottom: 1px;">Status</p>
                       <p style="color: white; background-color: red;border-radius: 0px; border: 1px solid;">${persons.persons[i].Status}</p>
                   </div>
               </div>
           </div>
       </div>
           `
           
           }
        
    }
    container1?.innerHTML=container1content;
    container2?.innerHTML=container2content;
    container3?.innerHTML=container3content;

list?.appendChild(container1);
list?.appendChild(container2);
list?.appendChild(container3);

let data=document.querySelector('.data');
let cont1=document.querySelector('.cont1')
console.log(cont1);
let cont2=document.querySelector('.cont2')
let cont3=document.querySelector('.cont3')
let cont1content = '';
let cont2content = '';
let cont3content = '';

cont1content+= `               
<div class="sub-cont1">
    <div>Type:</div>
    <div>${persons.persons[0]['page-desciption']?.Type}</div>
</div>
<div class="sub-cont1">
    <div>Priority:</div>
    <div>${persons.persons[0]['page-desciption']?.Priority}</div>
</div>
<div class="sub-cont1">
    <div>Affects Version/s:</div>
    <div>${persons.persons[0]['page-desciption']?.['Affects Version/s']}</div>
</div>
<div class="sub-cont1">
    <div>Components/s:</div>
    <div>${persons.persons[0]['page-desciption']?.['Components/s']}</div>
</div>
<div class="sub-cont1">
    <div>Labels:</div>
    <div>${persons.persons[0]['page-desciption']?.Labels}</div>
</div>
<div class="sub-cont1">
    <div>Sprint:</div>
    <div></div>
</div>
<div class="sub-cont1">
    <div>Story Points:</div>
    <div>${persons.persons[0]['Story Points']}</div>

`
console.log(cont1content);

cont1?.innerHTML=cont1content;
data?.appendChild(cont1);

let divs = document.getElementsByClassName('row-card');

for (let div of divs){
addclickevent(div)
}

function addclickevent(div)
{
    div.addEventListener('click',()=>{
        let id = div.id

        window.location.href = `http://localhost:1234/src/issue-details.html?id=${id}`
        

    }
    )
}



})


