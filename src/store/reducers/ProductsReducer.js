const initState = {
    products: [
        {
            id: 1,
            name: 'Vú sữa Lò Rèn - Vĩnh Kim', 
            image: 'Vu_sua_lo_ren.jpg', price: 92000, 
            quantity: 1, 
            desc: "Vú sữa Lò Rèn Vĩnh Kim là một loại trái cây có hương vị ngọt ngào, dịu mát. Thưởng thức trái vú sữa Vĩnh Kim, bạn sẽ cảm nhận được sự thanh ngọt như thuở còn ôm bầu sữa mẹ. Vú sữa loại này có hương thơm thoang thoảng, ai đã từng một lần thưởng thức thì không thể nào quên được. Loại vú sữa này khác hẳn với những giống vú sữa trái vàng, vỏ dày mà chúng ta thường gặp. Bởi sự thơm ngon của nó, Vú sữa Vĩnh Kim đã trở thành món quà quê dân dã mà quý báu để người ta thăm biếu nhau."
        },
        {
            id: 2,
            name: 'Mãng Cầu Bà Đen', 
            image: 'Mang-cau-ba-den.jpg', price: 85000, 
            quantity: 1, 
            desc: "Mãng Cầu Bà Đen là món đặc sản độc đáo của tỉnh Tây Ninh. Trái có kích cỡ lớn, ngoại hình lạ, thịt dai, thơm, hương vị ngọt sắc là đặc điểm nổi trội của mãng cầu Bà Đen. "
        },
        {
            id: 3,
            name: 'Chanh dây Sỹ Hải', 
            image: 'Chanh-Dây.png', price: 60000,  
            quantity: 1, 
            desc: "Đây là đặc sản nổi tiếng của vùng đất Yên Bái. Khi chín trái có màu tím thẫm và có mùi thơm dịu. Vỏ ngoài hơi sần sùi, bên trong có nhiều hột và có cùi màu vàng, vị mát. Cùng với sự hài hòa cả về khí hậu lẫn đất đai ở Đà Lạt cây chanh dây như tìm được miền đất hứa cho mình. Nó sinh trưởng và phát triển dưới sự chăm sóc cẩn thận, tỉ mỉ của những người nông dân giản dị nơi đây. Không phụ lòng người, cây luôn cho sản lượng và chất lượng tốt nhất.."
        },
        {
            id: 4,
            name: 'Xoài Cát Hòa Lộc', 
            image: 'Xoai_cat_hoa_loc.jpg', price: 75000,  
            quantity: 1,
            desc: "Xoài Cát Hòa Lộc là một loại xoài nổi tiếng có xuất xứ từ xã Hòa Lộc, huyện Giáo Đức, Định Tường (nay đã đổi thành xã Hòa Hưng, H. Cái Bè, Tiền Giang). Xoài có thịt dẻo, mịn, thịt dày, ít xơ, mềm, ăn rất thanh mát, có mùi vị đặc trưng quyến rũ. Mỗi trái xoài rất to, cầm nặng tay và có thể nặng từ 450 - 600g. Quả xoài khi còn xanh thì vỏ có màu xanh ngọc, trên cuống có những đốm nhỏ li ti. Khi quả chín thì có màu vàng chanh, xung quanh trái là một lớp phấn mỏng, trên cuống cũng có những chấm đen li ti."
        },
        {
            id: 5,
            name: 'Chuối Ngự Đại Hoàng', 
            image: 'chuoi.jpg', price: 62000,  
            quantity: 1, 
            desc: "Chuối Ngự Đại Hoàng có nguồn gốc từ Làng Đại Hoàng, Hòa Hậu, Lý Nhân, Hà Nam. Chuối Đại Hoàng mang hương vị rất riêng mà không loại chuối nào có được, quả chuối tuy nhỏ nhưng ăn vào rõ vị ngọt thanh, thịt chuối chắc dẻo và vàng ươm vô cùng hấp dẫn."
        },
        {
            id: 6,
            name: 'Măng cụt Cái Mơn - Bến Tre', 
            image: 'măng-cụt.png', price: 79000,  
            quantity: 1, 
            desc: "Măng cụt là đặc sản của vương quốc trái cây Bến Tre, nó được ví là “Nữ hoàng của các loại trái cây”. Măng cụt có dạng hình cầu, vỏ cứng, mặt ngoài của vỏ có màu đỏ tím đậm, mặt trong đỏ tươi như rượu vang. Ruột trắng muốt và chia thành nhiều múi giống như cánh hoa rất đẹp, nuột măng cụt thì mềm, mịn, có vị ngọt pha lẫn một chút chua dịu. "
        },
        {
            id: 7,
            name: 'Đu Đủ ruột vàng Tiến Thắng', 
            image: 'dudu.png', price: 55000,  
            quantity: 1,
            desc: "Đây là sản vật nổi tiếng có nguồn gốc ở Tiến Thắng, Yên Đồng, Ý Yên, Nam Định. Đu đủ Tiến Thắng có đặc điểm vị ngọt đậm, thịt chắc, dày thịt, có mùi thơm và màu vàng đẹp ... Ngoài ra trong quả đu đủ có chứa rất nhiều chất dinh dưỡng cần thiết cho cơ thể. Đu đủ chín có khoảng 70% nước, 13% đường, không có tinh bột, có nhiều carotenoit, acid hữu cơ, vitamin A, B,C, protid, 0,9% chất béo, cenlulose 0,05%, canxi, phospho, magie, sắt, thiamin, reboflavin....v.v phù hợp cho việc làm đẹp của phụ nữ và mang lại nhiều dinh dưỡng cho trẻ nhỏ."
        },
        {
            id: 8,
            name: 'Thanh Long Bình Thuận', 
            image: 'thanh-long.jpg', price: 65000, 
            quantity: 1, 
            desc: "Thanh long Bình Thuận nổi tiếng có màu đỏ mọng trông khá bắt mắt, trái không quá to, khi ăn vào có vị ngọt vừa, thanh mát đặc trưng ngọt thơm. Thanh long mang lại giá trị dinh dưỡng cao. Với nguồn dinh dưỡng dồi dào như protein, vitamin C, B, chất xơ…, thanh long là loại quả mang lại nhiều sức khỏe cho con người. Theo nghiên cứu, trung bình một quả thanh long chứa 60 đơn vị calo, 60 mg natri, 8g đường, 2mg chất béo không bão hòa và 2mg protein. Ăn một quả thanh long sẽ cung cấp 34% lượng vitamin C cần thiết cho cơ thể mỗi ngày."
        },

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;