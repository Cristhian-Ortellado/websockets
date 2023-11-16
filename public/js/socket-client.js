//html references 
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend')



const socket = io();

socket.on('connect', ()=>{
    lblOffline.classList.add('d-none')
    lblOnline.classList.remove('d-none')
    console.log('connected');
});

socket.on('disconnect', ()=>{
    lblOffline.classList.remove('d-none')
    lblOnline.classList.add('d-none')
    console.log('disconnected');
});

socket.on('send-message',(payload)=>{
    console.log(payload);
})

btnSend.addEventListener('click', ()=>{

    const message = txtMessage.value;
    const payload = {
        message
    }
    socket.emit('send-message',payload,(id)=>{
        console.log('El server respondio',id);
    });
    

});