$(()=>{

    $('#navbar').load('./components/navbar.html')
    $('#footer').load('./components/footer.html')
    $(window).on('load',function()
    {
        $('#loginSignup').modal('show')
    })
    //$('#content').load('/components/explore.js')

})

