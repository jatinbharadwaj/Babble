$(()=>{

    $('#navbar').load('./components/navbar.html')
    $('#footer').load('./components/footer.html')
    $('#register').load('./components/register.html',()=>{
        $('#ModalLoginForm').modal('show')
    })
    //loginIfNeeded()
})

// function loginIfNeeded() {
//     window.currentUser = window.localStorage.user
//       ? JSON.parse(window.localStorage.user)
//       : null
//     if (!currentUser) {
//       $.post('/api/users', {}, (user) => {
//         if (user) {
//           console.log('registered current user as ', user.username)
//           window.localStorage.user = JSON.stringify(user)
//           currentUser = user
//           $('#nav-username').text(currentUser.username)
//         }
//       })
//     } else {
//       console.log('resuming session as ', currentUser.username)
//       console.log($('#nav-username'))
//       $('#nav-username').text(currentUser.username)
//     }
//   }

