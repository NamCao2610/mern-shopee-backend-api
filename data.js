const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            name: 'Nam dep zai',
            email: 'nam@gmail.com',
            isAdmin: true,
            password: bcrypt.hashSync('1234', 8)
        },
        {
            name: 'Vuong',
            email: 'vuong@gmail.com',
            isAdmin: true,
            password: bcrypt.hashSync('1234', 8)
        }
    ],
    products: [
        {
            name: 'Xiaomi Redmi Note 8',
            image: '../images/p1.png',
            category: 'Mobile',
            brand: 'Xiaomi',
            price: 120,
            rating: 4.3,
            numReviews: 13,
            countInStock: 15,
            description: 'Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1).'
        },
        {
            name: 'SamSung Glaxy Note 10',
            image: '../images/p2.png',
            category: 'Mobile',
            brand: 'Samsung',
            price: 180,
            rating: 4.6,
            numReviews: 23,
            countInStock: 0,
            description: 'Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1).'
        },
        {
            name: 'Iphone 12',
            image: '../images/p3.png',
            category: 'Mobile',
            brand: 'Iphone',
            price: 210,
            rating: 3.5,
            numReviews: 25,
            countInStock: 10,
            description: 'Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1).'
        },
        {
            name: 'Iphone 11 ProMax',
            image: '../images/p4.png',
            category: 'Mobile',
            brand: 'Iphone',
            price: 550,
            rating: 3.8,
            numReviews: 16,
            countInStock: 0,
            description: 'Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1).'
        },
        {
            name: 'Oppo A7S',
            image: '../images/p5.png',
            category: 'Mobile',
            brand: 'Oppo',
            price: 410,
            rating: 5,
            numReviews: 30,
            countInStock: 15,
            description: 'Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1).'
        },
        {
            name: 'Realmi 8',
            image: '../images/p6.png',
            category: 'Mobile',
            brand: 'Realmi',
            price: 320,
            rating: 2.5,
            numReviews: 40,
            countInStock: 15,
            description: 'Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1).'
        },
        {
            name: 'Samsung A7',
            image: '../images/p7.png',
            category: 'Mobile',
            brand: 'Samsung',
            price: 250,
            rating: 4.2,
            numReviews: 25,
            countInStock: 8,
            description: 'Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1).'
        }
    ]
}

module.exports = data;