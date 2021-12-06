var home = document.getElementById('home');
    function showHome(){
        home.style.display='block';
        getEnvolve.style.display='none';
        threel.style.display='none';
        tickets.style.display='none';
        contact.style.display='none';
    };

var getEnvolve = document.getElementById('getenvolve');
    function showGetEnvolve(){
        home.style.display='none';
        getEnvolve.style.display='block';
        threel.style.display='none';
        tickets.style.display='none';
        contact.style.display='none';  
        
    };

var threel = document.getElementById('threel');
    function showThreel(){
        home.style.display='none';
        getEnvolve.style.display='none';
        threel.style.display='block';
        tickets.style.display='none';
        contact.style.display='none';    };

var tickets = document.getElementById('tickets');
    function showTickets(){
        home.style.display='none';
        getEnvolve.style.display='none';
        threel.style.display='none';
        tickets.style.display='block';
        contact.style.display='none';    };

var contact = document.getElementById('contact');
    function showContact(){
        home.style.display='none';
        getEnvolve.style.display='none';
        threel.style.display='none';
        tickets.style.display='none';
        contact.style.display='block';    };    



/*****************************************/

function showTicketsFormPersonRegular(){
    document.getElementById('ticketsformpersonregular').style.display='block';
    document.getElementById('ticketsformgroupregular').style.display='none'    
    document.getElementById('ticketsformgrouplate').style.display='none'    
    document.getElementById('ticketsformpersonbus').style.display='none'    
    document.getElementById('ticketsformpersonlate').style.display='none'    
    
}

function showTicketsFormGroupRegular(){
    document.getElementById('ticketsformpersonregular').style.display='none';
    document.getElementById('ticketsformgroupregular').style.display='block'    
    document.getElementById('ticketsformgrouplate').style.display='none'    
    document.getElementById('ticketsformpersonbus').style.display='none'    
    document.getElementById('ticketsformpersonlate').style.display='none'    
    
}


function showTicketsFormGroupLate(){
    document.getElementById('ticketsformpersonregular').style.display='none';
    document.getElementById('ticketsformgroupregular').style.display='none'    
    document.getElementById('ticketsformgrouplate').style.display='block'    
    document.getElementById('ticketsformpersonbus').style.display='none'    
    document.getElementById('ticketsformpersonlate').style.display='none'    
}

function showTicketsFormPersonBus(){
    document.getElementById('ticketsformpersonregular').style.display='none';
    document.getElementById('ticketsformgroupregular').style.display='none'    
    document.getElementById('ticketsformgrouplate').style.display='none'    
    document.getElementById('ticketsformpersonbus').style.display='block'    
    document.getElementById('ticketsformpersonlate').style.display='none'        
}

function showTicketsFormPersonLate(){
    document.getElementById('ticketsformpersonregular').style.display='none';
    document.getElementById('ticketsformgroupregular').style.display='none'    
    document.getElementById('ticketsformgrouplate').style.display='none'    
    document.getElementById('ticketsformpersonbus').style.display='none'    
    document.getElementById('ticketsformpersonlate').style.display='block'    
    
}

function hideTicketsForm(){
    document.getElementById('ticketsformpersonregular').style.display='none';
    document.getElementById('ticketsformgroupregular').style.display='none'    
    document.getElementById('ticketsformgrouplate').style.display='none'    
    document.getElementById('ticketsformpersonbus').style.display='none'    
    document.getElementById('ticketsformpersonlate').style.display='none'    
}

/******************/

function showStoresForm(){
    document.getElementById('storesform').style.display='block'    
}

function hideStoresForm(){
    document.getElementById('storesform').style.display='none'    
}

function showVolunteersForm(){
    document.getElementById('volunteersform').style.display='block'        
}

function hideVolunteersForm(){
    document.getElementById('volunteersform').style.display='none'        
}

function changeButton(){
    document.getElementsByClassName('submit')[0].style.backgroundColor='#444';
    document.getElementsByClassName('submit')[1].style.backgroundColor='#444';
    document.getElementsByClassName('submit')[2].style.backgroundColor='#444';
    document.getElementsByClassName('submit')[3].style.backgroundColor='#444';
}

/******************/

