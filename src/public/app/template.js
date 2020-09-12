$(()=>{

    $('#navbar').load('./components/navbar.html')
    $('#footer').load('./components/footer.html')
    $('#register').load('./components/register.html',()=>{
        $('#loginSignup').modal('show')
    })
    
})

