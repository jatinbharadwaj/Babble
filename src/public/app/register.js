const login = $('#login-btn')
const signup = $('#SignUp-btn')


login.click(()=>{
    username = $('#logusername').val()
    let settings = {
        "url": `http://localhost:4444/api/users/${username}`,
        "method": "GET",
        "timeout": 0,
      };
      console.log(settings.url)
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
})

signup.click(()=>{

    username = $('#username').val()
    email = $('#email').val()
    password = $('#password').val()
    description = $('#description').val()

    let settings = {
        "url": "http://localhost:4444/api/users/",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "username": username,
          "description": description,
          "password": password,
          "email": email
        }
      }
      console.log(`${username} ${password} ${email} ${description}`)
      $.ajax(settings).done(function (response) {
        console.log(response);
      })
})
