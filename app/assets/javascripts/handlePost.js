$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        const values = $(this).serialize();
        const post_resp = $.post('/posts', values);
        post_resp.done(function (resp_data) {
            console.log('resp_data :', resp_data);
        });
    });
});