export class Product {
    constructor(title, category, image, price, amount) {
        this.title = title;
        this.category = category;
        this.image = image;
        this.price = price;
        this.amount = amount;
    }

    get formattedPrice() {
        return ` RWF ${this.price}`;
    }

    get totalPrice() {
        return this.price * this.amount;
    }

    static pinkChair() {
        return new Product(
            'Pink Chair',
            'Furniture',
            require('../../../assets/image1.png'),
            130000,
            1
        );
    }

    static whiteChair() {
        return new Product(
            'White Chair',
            'Furniture',
            require('../../../assets/image2.jpg'),
            150000,
            1
        );
    }

    static woodChair() {
        return new Product(
            'Wood Chair',
            'Furniture',
            require('../../../assets/image1.png'),
            125000,
            1
        );
    }

    static blackLamp() {
        return new Product(
            'Black Lamp',
            'Lighting',
            require('../../../assets/image3.jpg'),
            80000,
            1
        );
    }
}
