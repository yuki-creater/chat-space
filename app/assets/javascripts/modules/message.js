$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message-field__box"data-message-id=${message.id} >
          <div class="message-field__box__info">
            <div "message-field__box__info__user-name">
              ${message.user_name}
            </div>
            <div class="message-field__box__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="message-field__box__message__content" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-field__box" data-message-id=${message.id}>
        <div class="message-field__box__info">
          <div class="message-field__box__info__user-name">
            ${message.user_name}
          </div>
          <div class="message-field__box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="Message.content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.footer__form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    console.log(url)
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      // console.log(data)
      let html = buildHTML(data);
      $('.message-field').append(html);      
      $('form')[0].reset();
      $('.message-field').animate({ scrollTop: $('.message-field')[0].scrollHeight});
      $('.footer__form__box__send').prop("disabled", false);
    })
    .fail(function() {
      alert('メッセージ送信に失敗しました');
      $('.footer__form__box__send').prop("disabled", false);
    });
  });
})