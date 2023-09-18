document.querySelector("#weAddButton").addEventListener("click",function(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-3");
    //newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Add another work experience");

    let weOb=document.querySelector("#we");
    let weAddButtonOb=document.querySelector("div.weAddButton");
    
    weOb.insertBefore(newNode,weAddButtonOb);
});

document.querySelector("#aqAddButton").addEventListener("click",function (){

    let newNode1=document.createElement('textarea');
    newNode1.classList.add('form-control');
    newNode1.classList.add('aqField');
    newNode1.classList.add("mt-3");
    //newNode1.setAttribute("rows",3);
    newNode1.setAttribute('placeholder',"Add acadamic qualification");

    let aqOb=document.querySelector("#aq");
    let aqAddButtonOb=document.querySelector("div.aqAddButton");
    
    aqOb.insertBefore(newNode1,aqAddButtonOb);
});

document.querySelector("button.skill-button").addEventListener("click",function (){
   

    let newSkillNode=document.createElement('input');
    newSkillNode.classList.add('form-control');
    newSkillNode.classList.add('skillField');
    newSkillNode.classList.add("mt-3");
    //newNode1.setAttribute("rows",3);
    newSkillNode.setAttribute('placeholder',"Enter another skill");

    let skillOb=document.querySelector(".skill");
    let skillAddButtonOb=document.querySelector("div.skillAddButton");
    
    skillOb.insertBefore(newSkillNode,skillAddButtonOb);
});

document.querySelector("button.link-button").addEventListener("click",function (){
   

    let newlinkNode=document.createElement('input');
    newlinkNode.classList.add('form-control');
    newlinkNode.classList.add('linkField');
    newlinkNode.classList.add("mt-3");
    //newNode1.setAttribute("rows",3);
    newlinkNode.setAttribute('placeholder',"Enter other link");

    let linkOb=document.querySelector(".link");
    let linkAddButtonOb=document.querySelector("div.linkAddButton");
    
    linkOb.insertBefore(newlinkNode,linkAddButtonOb);
});

document.querySelector("button.lang-button").addEventListener("click",function (){
   

    let newlangNode=document.createElement('input');
    newlangNode.classList.add('form-control');
    newlangNode.classList.add('langField');
    newlangNode.classList.add("mt-3");
    //newNode1.setAttribute("rows",3);
    newlangNode.setAttribute('placeholder',"Other language known");

    let langOb=document.querySelector(".lang");
    let langAddButtonOb=document.querySelector("div.langAddButton");
    
    langOb.insertBefore(newlangNode,langAddButtonOb);
});



document.querySelector("a.generateCv").addEventListener("click",function(){

    /*Name*/
    let nameFirstField=document.querySelector("#nameFirstField").value;
    let nameLastField=document.querySelector("#nameLastField").value;
    nameT1=document.querySelector("#nameT1");
    nameT1.innerHTML=nameFirstField+" "+nameLastField;
    /*Name*/

    /*contact*/
     let phone=document.querySelector("#contactField").value;
     document.querySelector("#contactT").innerHTML=phone;
    /*contact*/

     /*email*/
     let mail=document.querySelector("#mailField").value;
     document.querySelector("#mailT").innerHTML=mail;
     /*email*/


    /*address*/
     let address=document.querySelector("#addressField").value;
     document.querySelector("#addressT").innerHTML=address;
    /*address*/

    /*links*/
    let links=document.getElementsByClassName("linkField");
    let str1=''
    for(let l of links){
        str1=str1+`<div> ${l.value}</div>`
    }
    document.getElementById("links-here").innerHTML=str1;
    /*links*/

    /*languages*/
     let lang=document.getElementsByClassName("langField");
     let str2=''
     for( let lan of lang){
        str2=str2+`<div> ${lan.value}</div>`
     }
     document.getElementById("languages-here").innerHTML=str2;
    /*languages*/





    /*objective*/
     let objective=document.querySelector("textarea.obField").value;
     document.querySelector("#objectiveT").innerHTML=objective;
     /*objective*/



   /*work-exp*/
     let weExp=document.getElementsByClassName("weField");
     let str3=''

     for(let e of weExp)
     {
        str3=str3+`<li>${e.value}</li>`;
     }
    document.getElementById("weT").innerHTML=str3;
    /*work-exp*/

    /*Acadamic-qualifications*/
      let aq=document.getElementsByClassName("aqField");
      let str4=''

     for(let a of aq)
     {
        str4=str4+`<li>${a.value}</li>`;
     }
     document.getElementById("aqT").innerHTML=str4;
    /*Acadamic-qualifications*/

    /*skills*/
    let sk=document.getElementsByClassName("skillField");
      let str5=''

     for(let s of sk)
     {
        str5=str5+`<li>${s.value}</li>`;
     }
     document.getElementById("skillT").innerHTML=str5;
    /*skills*/
      
    /*setting-img*/
    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

   reader.onloadend=function() {
 
    document.querySelector("img.myimg").src=reader.result;
   }
    /*setting-img*/

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
    
});

document.querySelector("button.printCv").addEventListener("click",function(){
document.querySelector("button.printCv").style.display="none";    
window.print();
});