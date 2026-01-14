let inname=document.querySelector('#inputname');
let job=document.querySelector('#inputjob');
let nam=document.querySelector('#nam');
let prof=document.querySelector('#prof');
let inemail=document.querySelector('#inputemail');
let inphone=document.querySelector('#inputphone');
let email=document.querySelector('#emails');
let phone=document.querySelector('#phones');
let inlocation=document.querySelector('#inputlocation');
let linkedin=document.querySelector('#inputlink');
let loc=document.querySelector('#locations');
let linke=document.querySelector('#linkd');
let proff=document.querySelector('.proff');
let proffession=document.querySelector('#proffession');
let jobs=document.querySelector('.inputjobs');
let postjob1=document.querySelector('#postjob1');
let postdatejob1=document.querySelector('#postdatejob1');
let company=document.querySelector('.inputcompany');
let sps1=document.querySelector('.sps1');


let spjob1=document.querySelector('.spjob1');
let locationcom=document.querySelector('#inputlocationcom');


 let postdatejob2=document.querySelector('#postdatejob2');
 let postjob2=document.querySelector('#postjob2');

 let postedu=document.querySelector('#postedu');
 let postdateedu=document.querySelector('#postdateedu');
let work1description=document.querySelector('.descriptionbox1');
let bottom2=document.querySelector('.bottom2');
let jobb=document.querySelector('.inputjobs');

let jobtitle1=document.querySelector('#jobtite1');
let company1=document.querySelector('#company1');
let startdate1=document.querySelector('#startdate1');
let enddate1=document.querySelector('#enddate1');
let descriptionbox1=document.querySelector('#descriptionbox1');

let jobtitle2=document.querySelector('#jobtitle2');
let company2=document.querySelector('#company2');
let startdate2=document.querySelector('#startdate2');
let enddate2=document.querySelector('#enddate2');
let descriptionbox2=document.querySelector('#descriptionbox2');
let start;
let end;



inname.addEventListener('input',function(){
    nam.textContent=inname.value;
    nam.style.fontSize='2rem';
    nam.style.color='rgb(0, 85, 255)';
    nam.style.fontWeight='bold';
})

job.addEventListener('input',function(){
    prof.textContent=job.value;
    prof.style.fontSize='0.9rem';
    prof.style.color='rgb(76, 75, 75)';
    
})


inemail.addEventListener('input',function(){
    email.textContent=inemail.value;
    email.style.fontSize='0.88rem';
    email.style.color='rgb(106, 105, 105)';
    
})

inphone.addEventListener('input',function(){
    phone.textContent=inphone.value;
    phone.style.fontSize='0.88rem';
    phone.style.color='rgb(106, 105, 105)';
    
})

inlocation.addEventListener('input',function(){
    loc.textContent=inlocation.value;
    loc.style.fontSize='0.88rem';
    loc.style.color='rgb(106, 105, 105)';
    
})

linkedin.addEventListener('input',function(){
    linke.textContent=linkedin.value;
    linke.style.fontSize='0.88rem';
    linke.style.color='rgb(106, 105, 105)';
    
})

proffession.addEventListener('input',function(){
    proff.textContent=proffession.value;
    proff.style.fontSize='0.88rem';
    proff.style.color='rgb(106, 105, 105)';
    
})
jobs.addEventListener('input',function(){
    postjob1.textContent=jobs.value;
   postjob1.style.fontSize='0.9rem';
    postjob1.style.color='rgb(53, 52, 52)';
    
})

company1.addEventListener('input',function(){
    spjob1.textContent=company1.value;
   postjob1.style.fontSize='0.9rem';
    postjob1.style.color='rgb(53, 52, 52)';
    
})

locationcom.addEventListener('input',function(){
    sps1.textContent=locationcom.value;
   postjob1.style.fontSize='0.9rem';
    postjob1.style.color='rgb(53, 52, 52)';
    
})
startdate1.addEventListener('input',function(){
    postdatejob1.textContent=startdate1.value;
    start=startdate1.value;
    postdatejob1.style.fontSize='0.75rem';
     postdatejob1.style.color='rgb(143, 141, 141)';
    
})
enddate1.addEventListener('input',function(){
    postdatejob1.textContent=enddate1.value;
    end=enddate1.value;
    postdatejob1.style.fontSize='0.75rem';
     postdatejob1.style.color='rgb(143, 141, 141)';
    
})
enddate1.addEventListener('blur',function(){
    postdatejob1.textContent=start+ ' - '+ end;
    postdatejob1.style.fontSize='0.75rem';
     postdatejob1.style.color='rgb(143, 141, 141)';
    
})
startdate2.addEventListener('input',function(){
    postdatejob2.textContent=startdate2.value;
    start=startdate2.value;
    postdatejob2.style.fontSize='0.75rem';
     postdatejob2.style.color='rgb(143, 141, 141)';
    
})
enddate2.addEventListener('input',function(){
    postdatejob2.textContent=enddate2.value;
    end=enddate2.value;
    postdatejob2.style.fontSize='0.75rem';
     postdatejob2.style.color='rgb(143, 141, 141)';
    
})
enddate2.addEventListener('blur',function(){
    postdatejob2.textContent=startdate2.value+' - '+enddate2.value;
    postdatejob2.style.fontSize='0.75rem';
     postdatejob2.style.color='rgb(143, 141, 141)';
    
})
work1description.addEventListener('input',function(){
    bottom1.textContent=work1description.value;
    bottom1.style.fontSize='0.8rem';
    bottom1.style.color='rgb(50, 49, 49)';
    
})
jobtitle2.addEventListener('input',function(){
    postjob2.textContent=jobtitle2.value;
   postjob2.style.fontSize='0.9rem';
    postjob2.style.color='rgb(53, 52, 52)';
    
})
company2.addEventListener('input',function(){
    spjob2.textContent=company2.value;
   postjob2.style.fontSize='0.9rem';
    postjob2.style.color='rgb(53, 52, 52)';
    
})