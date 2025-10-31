// Chờ cho toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {

    console.log('Trang My Forum đã tải xong!');

    // Lấy tất cả các mục trong diễn đàn
    const forumItems = document.querySelectorAll('.forum_item');

    // Lặp qua từng mục và thêm sự kiện 'click'
    forumItems.forEach(item => {
        
        item.style.cursor = 'pointer'; // Thêm con trỏ tay để báo là có thể click

        item.addEventListener('click', () => {
            // Lấy nội dung tin nhắn cuối cùng
            const latestMessage = item.querySelector('.latest_message span').textContent;
            
            // Lấy text từ ảnh
             const forumName = item.querySelector('.forum_image span').textContent;

            //hiện một cảnh báo (alert)
            window.location.href = '/forum_topic_url'; 
            
            //alert('Bạn vừa click vào một mục forum!');
        });
    });

});
