// Chờ cho toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {

    console.log('Trang My Forum đã tải xong!');

    // Lấy tất cả các mục trong diễn đàn
    const forumItems = document.querySelectorAll('.forum-item');

    // Lặp qua từng mục và thêm sự kiện 'click'
    forumItems.forEach(item => {
        
        item.style.cursor = 'pointer'; // Thêm con trỏ tay để báo là có thể click

        item.addEventListener('click', () => {
            // Lấy nội dung tin nhắn cuối cùng (nếu cần)
            // const latestMessage = item.querySelector('.latest-message span').textContent;
            
            // Lãy text từ ảnh (nếu cần)
            // const forumName = item.querySelector('.forum-image span').textContent;

            // Tạm thời, chúng ta chỉ hiện một cảnh báo (alert)
            // Trong dự án thật, bạn sẽ thay thế dòng này bằng:
            // window.location.href = '/forum-topic-url'; 
            
            alert('Bạn vừa click vào một mục forum!');
        });
    });

});