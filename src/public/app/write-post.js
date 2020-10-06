$('#write-btn').click(()=>{
    const userId = JSON.parse(window.localStorage.user).id
    const title = $('#p-title').val()
    const body = $('#p-body').val()
    console.log(`userid ${userId} , ${title}, ${body}`)
    $.post('/api/posts', { userId, title, body }, (data) => {
      $('#content').load('/components/wall.html')
      $('.nav-item .active').removeClass('active')
      $("[data-components='wall']").addClass('active')
    })
  })