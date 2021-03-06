import Footer from './footer'
import css from './hairStyle.module.css'
import { FaHeart,  FaShare } from 'react-icons/fa';
import Contact from './home'

import imgItemA1 from '../asset/imgs/hairStyle/a1.jpg'
import imgItemA2 from '../asset/imgs/hairStyle/a2.jpg'
import imgItemA3 from '../asset/imgs/hairStyle/a3.jpg'
import imgItemA4 from '../asset/imgs/hairStyle/a4.jpg'
import imgItemA5 from '../asset/imgs/hairStyle/a5.jpg'
import imgItemA6 from '../asset/imgs/hairStyle/a6.jpg'
import imgItemA7 from '../asset/imgs/hairStyle/a7.jpg'
import imgItemA8 from '../asset/imgs/hairStyle/a8.jpg'
import imgItemB1 from '../asset/imgs/hairStyle/b1.jpg'
import imgItemB2 from '../asset/imgs/hairStyle/b2.png'
import imgItemB3 from '../asset/imgs/hairStyle/b3.jpg'
import imgItemB4 from '../asset/imgs/hairStyle/b4.jpg'
import imgItemB5 from '../asset/imgs/hairStyle/b5.jpg'
import imgItemB6 from '../asset/imgs/hairStyle/b6.jpg'
import imgItemB7 from '../asset/imgs/hairStyle/b7.jpg'
import imgItemB8 from '../asset/imgs/hairStyle/b8.png'
import imgItemC1 from '../asset/imgs/hairStyle/c1.jpg'
import imgItemC2 from '../asset/imgs/hairStyle/c2.jpg'
import imgItemC3 from '../asset/imgs/hairStyle/c3.jpg'
import imgItemC4 from '../asset/imgs/hairStyle/c4.jpg'
import imgItemC5 from '../asset/imgs/hairStyle/c5.png'
import imgItemC6 from '../asset/imgs/hairStyle/c6.png'
import imgItemC7 from '../asset/imgs/hairStyle/c7.png'
import imgItemD1 from '../asset/imgs/hairStyle/d1.png'
import imgItemD2 from '../asset/imgs/hairStyle/d2.png'
import imgItemD3 from '../asset/imgs/hairStyle/d3.png'
import imgItemD4 from '../asset/imgs/hairStyle/d4.png'
import imgItemD5 from '../asset/imgs/hairStyle/d5.png'
import imgItemD6 from '../asset/imgs/hairStyle/d6.png'
import imgItemD7 from '../asset/imgs/hairStyle/d7.png'
import imgItemE1 from '../asset/imgs/hairStyle/e1.png'
import imgItemE2 from '../asset/imgs/hairStyle/e2.jpg'
import imgItemE3 from '../asset/imgs/hairStyle/e3.jpg'
import imgItemE4 from '../asset/imgs/hairStyle/e4.jpg'
import imgItemE5 from '../asset/imgs/hairStyle/e5.jpg'
import imgItemE6 from '../asset/imgs/hairStyle/e6.jpg'
import imgItemE7 from '../asset/imgs/hairStyle/e7.jpg'



function HairStyle() {

    const HeadingHairStyle = () => {
        return(
            <div className={css.ContainerButton}>
                <div className={css.buttonList}>
                    <div className={`${css.buttonItem} ${css.active}`}>
                        <p className={css.buttonItemText}>Discover</p>
                    </div>
                    <div className={css.buttonItem}>
                        <p className={css.buttonItemText}>Style Master</p>
                    </div>
                    <div className={css.buttonItem}>
                        <p className={css.buttonItemText}>Lookbook</p>
                    </div>
                </div>
                <div className={css.HeadingHairStyleText}>
                    C??NG 30SHINE KH??M PH?? 
                    <p className={css.HeadingHairStyleSubText}>XU H?????NG T??C HOT NH???T</p>
                </div>
            </div>
        )
    }

    const Image = (value) => {
        return(
            <a className={css.imageItem} href="#">
                <img className={css.imageItemimg} src={value.img1}/>
                <div className={css.imageItemInteractive}>
                    <div className={css.imageItemIconHeart}>
                        <FaHeart/>
                    </div>
                    <div className={css.imageItemIconShare}>
                        <FaShare/>
                    </div>
                </div>
                <h4 className={css.imageItemText}>{value.text}</h4>
            </a>
        )
    }


    const BodyHairStyle = () => {
        return(
            <div className={css.bodyHairStyle}>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemA1}
                        text = "Ph?? c??ch v???i ki???u t??c nam Side Part vu???t r??? v?? h???c c??ch vu???t trong t??ch t???c"
                    />
                    <Image
                        img1 = {imgItemA2}
                        text = "4 M???o Gi??? Form T??c Khi ?????i M?? B???o Hi???m "
                    />
                    <Image
                        img1 = {imgItemA3}
                        text = "T??c Hai M??i H??n Qu???c H???p G????ng M???t N??o? "
                    />
                    <Image
                        img1 = {imgItemA4}
                        text = "Bao L??u G???i ?????u M???t L???n ????? Gi??? Ki???u T??c ?????p?"
                    />
                    <Image
                        img1 = {imgItemA5}
                        text = "M???o Vu???t T??c Mohican T???i Nh?? "
                    />
                    <Image
                        img1 = {imgItemA6}
                        text = "????n ??ng Bao L??u N??n C???t T??c M???t L???n?"
                    />
                    <Image
                        img1 = {imgItemA7}
                        text = "3 L?? Do Kh??ng Th??? B??? L??? T??c U???n Con S??u"
                    />
                    <Image
                        img1 = {imgItemA8}
                        text = "Top M??u T??c ?????p Kh??ng C???n T???y Cho Nam "
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemB1}
                        text = "Top 3 M??u Nhu???m T??c L?? T?????ng Cho H???c Sinh "
                    />
                    <Image
                        img1 = {imgItemB2}
                        text = "M???o ????? T??c H???t Ch???a V?? B???t D??nh "
                    />
                    <Image
                        img1 = {imgItemB3}
                        text = "Nh???ng Ai N??n Tr??nh Xa Ki???u T??c Mohican???"
                    />
                    <Image
                        img1 = {imgItemB4}
                        text = "Nhu???m T??c M??u Kh??i Ph???i T???y T??c M???y L???n? "
                    />
                    <Image
                        img1 = {imgItemB5}
                        text = "Tuy???t Chi??u Du???i T??c Th???ng Kh??ng C???n D??ng Nhi???t"
                    />
                    <Image
                        img1 = {imgItemB6}
                        text = "L?? Do Khi???n N??u Kh??i L?? M??u Nhu???m Hot Nh???t 2020"
                    />
                    <Image
                        img1 = {imgItemB7}
                        text = "H??nh Tr??nh ??i T??m Trend T??c Cho Nam Gi???i Vi???t "
                    />
                    <Image
                        img1 = {imgItemB8}
                        text = 'Anh Ch??ng "Ch??a Nhu???m T??c Bao Gi???" L???t X??c V???i M??u Nhu???m X??m Kh??i'
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemC1}
                        text = "Top 3 M??u Nhu???m T??c L?? T?????ng Cho H???c Sinh "
                    />
                    <Image
                        img1 = {imgItemC2}
                        text = "M???o ????? T??c H???t Ch???a V?? B???t D??nh "
                    />
                    <Image
                        img1 = {imgItemC3}
                        text = "Nh???ng Ai N??n Tr??nh Xa Ki???u T??c Mohican???"
                    />
                    <Image
                        img1 = {imgItemC4}
                        text = "Tuy???t Chi??u Du???i T??c Th???ng Kh??ng C???n D??ng Nhi???t "
                    />
                    <Image
                        img1 = {imgItemC5}
                        text = "L?? Do Khi???n N??u Kh??i L?? M??u Nhu???m Hot Nh???t 2020"
                    />
                    <Image
                        img1 = {imgItemC6}
                        text = "H??nh Tr??nh ??i T??m Trend T??c Cho Nam Gi???i Vi???t "
                    />
                    <Image
                        img1 = {imgItemC7}
                        text = 'Anh Ch??ng "Ch??a Nhu???m T??c Bao Gi???" L???t X??c V???i M??u Nhu???m X??m Kh??i'
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemD1}
                        text = "Sport - Ki???u T??c D??nh Cho ????n ??ng Chu???n Men "
                    />
                    <Image
                        img1 = {imgItemD2}
                        text = "Th??? ?????i Ki???u T??c Cho C???u B???n Hot Boy Tr?????ng Y "
                    />
                    <Image
                        img1 = {imgItemD3}
                        text = "Side Part Violet Cho D??n V??n Ph??ng "
                    />
                    <Image
                        img1 = {imgItemD4}
                        text = "L???t X??c Gi??m ?????c Thi???t K??? C???a 30Shine "
                    />
                    <Image
                        img1 = {imgItemD5}
                        text = 'Side Part - Ki???u t??c l???ch l??m "c??? ????? l?? ?????p"'
                    />
                    <Image
                        img1 = {imgItemD6}
                        text = 'Ki???u T??c "C???p M??c" Ca S?? L?? B???o B??nh '
                    />
                    <Image
                        img1 = {imgItemD7}
                        text = '?????ng Nghi???p Ph???i Tr???m Tr??? Tr?????c M??u T??c M???i C???a Anh B???n Ph?? Gi??m ?????c '
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemE1}
                        text = "Ca s?? Ho??ng D??ng - Ngo???i h??nh v???i t??i r???t quan tr???ng, ch??? x???p sau t??i n??ng "
                    />
                    <Image
                        img1 = {imgItemE2}
                        text = "Ki???u T??c ?????p Cho G????ng M???t Vu??ng "
                    />
                    <Image
                        img1 = {imgItemE3}
                        text = "T??c B?? Li???m V???n ?????p Trai Nh?? Binz "
                    />
                    <Image
                        img1 = {imgItemE4}
                        text = "Sport Nhu???m Kh??i Xanh Nh?? S??n T??ng MTP "
                    />
                    <Image
                        img1 = {imgItemE5}
                        text = 'M???t B??o V?? Tr??n ????? T??c G?? Cho ?????p?'
                    />
                    <Image
                        img1 = {imgItemE6}
                        text = 'Top 4 Ki???u t??c c??ng mu???n x???u cho c??c b?? trai'
                    />
                    <Image
                        img1 = {imgItemE7}
                        text = 'Di???n vi??n Thanh S??n V?? C??u Chuy???n Chinh Ph???c Vai Di???n "Ch???ng Ai Mong Mu???n"'
                    />
                </div>
            </div>
        )
    }




    return (
        <div className={css.hairStyle}>
            <div className={css.hairStyleBody}>
                <HeadingHairStyle/>
                <BodyHairStyle/>
            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HairStyle