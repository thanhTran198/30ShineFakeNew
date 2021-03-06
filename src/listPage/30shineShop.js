// import clsx from 'clsx';
import css from './30shineShop.module.css'
import Footer from './footer'
import { AiFillCaretDown, AiOutlineRight, AiFillStar, AiOutlineStar, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect, useRef } from "react"
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import Contact from './home'

import imgBannerSlider1 from "../asset/imgs/30shineShop/imgsSlider/bannerT0322-1.jpg"
import imgBannerSlider2 from "../asset/imgs/30shineShop/imgsSlider/bannerT0322-2.jpg"
import imgIconCommit1 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-1.svg'
import imgIconCommit2 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-2.svg'
import imgIconCommit3 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-3.svg'
import imgIconCommit4 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-4.svg'
import imgCommit1 from '../asset/imgs/30shineShop/imgsCommit/hot.png'
import imgCommit2 from '../asset/imgs/30shineShop/imgsCommit/sale-shock.png'
import imgCommit3 from '../asset/imgs/30shineShop/imgsCommit/doc-quyen.png'
import imgCommit4 from '../asset/imgs/30shineShop/imgsCommit/het-mun.png'
import imgCommit5 from '../asset/imgs/30shineShop/imgsCommit/skincare.png'
import imgCommit6 from '../asset/imgs/30shineShop/imgsCommit/toc-dep.png'
import imgCommit7 from '../asset/imgs/30shineShop/imgsCommit/thom-tho.png'
import imgCommit8 from '../asset/imgs/30shineShop/imgsCommit/rau-care.png'
import imgProductHighlights1 from '../asset/imgs/30shineShop/imgsProductHighlights/1.jpg'
import imgProductHighlights2 from '../asset/imgs/30shineShop/imgsProductHighlights/2.jpg'
import imgProductHighlights3 from '../asset/imgs/30shineShop/imgsProductHighlights/3.jpg'
import imgProductHighlights4 from '../asset/imgs/30shineShop/imgsProductHighlights/4.png'
import imgProductHighlights5 from '../asset/imgs/30shineShop/imgsProductHighlights/5.png'
import imgProductHighlights6 from '../asset/imgs/30shineShop/imgsProductHighlights/6.jpg'
import imgProductHighlights7 from '../asset/imgs/30shineShop/imgsProductHighlights/7.jpg'
import imgProductHighlights8 from '../asset/imgs/30shineShop/imgsProductHighlights/8.jpg'
import imgProductHighlights9 from '../asset/imgs/30shineShop/imgsProductHighlights/9.jpg'
import imgProductHighlights10 from '../asset/imgs/30shineShop/imgsProductHighlights/10.jpg'
import imgProductHighlights11 from '../asset/imgs/30shineShop/imgsProductHighlights/11.jpg'
import imgProductHighlights12 from '../asset/imgs/30shineShop/imgsProductHighlights/12.jpg'
import imgProductHighlights13 from '../asset/imgs/30shineShop/imgsProductHighlights/13.jpg'
import imgProductHighlights14 from '../asset/imgs/30shineShop/imgsProductHighlights/14.jpg'
import imgProductHighlights15 from '../asset/imgs/30shineShop/imgsProductHighlights/15.jpg'
import imgProductHighlights16 from '../asset/imgs/30shineShop/imgsProductHighlights/16.jpg'
import imgProductHighlights17 from '../asset/imgs/30shineShop/imgsProductHighlights/17.jpg'
import imgProductHighlights18 from '../asset/imgs/30shineShop/imgsProductHighlights/18.jpg'
import imgProductHighlights19 from '../asset/imgs/30shineShop/imgsProductHighlights/19.jpg'
import imgProductHighlights20 from '../asset/imgs/30shineShop/imgsProductHighlights/20.jpg'
import imgProductHighlights21 from '../asset/imgs/30shineShop/imgsProductHighlights/21.jpg'
import imgProductHighlights22 from '../asset/imgs/30shineShop/imgsProductHighlights/22.jpg'
import imgProductHighlights23 from '../asset/imgs/30shineShop/imgsProductHighlights/23.jpg'
import imgProductHighlights24 from '../asset/imgs/30shineShop/imgsProductHighlights/24.jpg'
import imgProductHighlights25 from '../asset/imgs/30shineShop/imgsProductHighlights/25.jpg'
import imgProductHighlights26 from '../asset/imgs/30shineShop/imgsProductHighlights/26.jpg'
import imgProductHighlights27 from '../asset/imgs/30shineShop/imgsProductHighlights/27.png'
import imgProductHighlights28 from '../asset/imgs/30shineShop/imgsProductHighlights/28.jpg'
import imgProductHighlights29 from '../asset/imgs/30shineShop/imgsProductHighlights/29.jpg'
import imgProductHighlights30 from '../asset/imgs/30shineShop/imgsProductHighlights/30.png'
import imgHighlightCombos1 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-1.jpg'
import imgHighlightCombos2 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-2.jpg'
import imgHighlightCombos3 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-3.jpg'
import imgHighlightCombos4 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-4.jpg'
import imgHighlightCombos5 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-5.jpg'
import imgHighlightCombos6 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-6.jpg'
import imgProductSuggestionBanner from '../asset/imgs/30shineShop/ProductSuggestion/banner-group.png'
import imgProductNew1 from '../asset/imgs/30shineShop/productNew/1.jpg'
import imgProductNew2 from '../asset/imgs/30shineShop/productNew/2.jpg'
import imgProductNew3 from '../asset/imgs/30shineShop/productNew/3.jpg'
import imgProductNew4 from '../asset/imgs/30shineShop/productNew/4.jpg'
import imgProductNew5 from '../asset/imgs/30shineShop/productNew/5.jpg'
import imgProductNew6 from '../asset/imgs/30shineShop/productNew/6.jpg'
import imgProductNew7 from '../asset/imgs/30shineShop/productNew/7.jpg'
import imgProductNew8 from '../asset/imgs/30shineShop/productNew/8.jpg'
import imgProductNew9 from '../asset/imgs/30shineShop/productNew/9.jpg'
import imgProductNew10 from '../asset/imgs/30shineShop/productNew/10.jpg'
import imgProductNew11 from '../asset/imgs/30shineShop/productNew/11.png'
import imgProductNew12 from '../asset/imgs/30shineShop/productNew/12.jpg'
import imgProductNew13 from '../asset/imgs/30shineShop/productNew/13.jpg'
import imgProductNew14 from '../asset/imgs/30shineShop/productNew/14.jpg'
import imgProductNew15 from '../asset/imgs/30shineShop/productNew/15.jpg'
import imgProductNew16 from '../asset/imgs/30shineShop/productNew/16.jpg'
import imgProductNew17 from '../asset/imgs/30shineShop/productNew/17.png'
import imgProductNew18 from '../asset/imgs/30shineShop/productNew/18.jpg'
import imgProductNew19 from '../asset/imgs/30shineShop/productNew/19.jpg'
import imgProductNew20 from '../asset/imgs/30shineShop/productNew/20.jpg'
import imgTrademark1 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_1_img.webp'
import imgTrademark2 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_2_img.webp'
import imgTrademark3 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_3_img.webp'
import imgTrademark4 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_4_img.webp'
import imgTrademark5 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_5_img.webp'
import imgTrademark6 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_6_img.webp'
import imgTrademark7 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_7_img.webp'
import imgListCommit1 from '../asset/imgs/30shineShop/ListCommit/1.png'
import imgListCommit2 from '../asset/imgs/30shineShop/ListCommit/2.png'
import imgListCommit3 from '../asset/imgs/30shineShop/ListCommit/3.png'
import imgListCommit4 from '../asset/imgs/30shineShop/ListCommit/4.png'
import imgListCommit5 from '../asset/imgs/30shineShop/ListCommit/5.png'
import imgListCommit6 from '../asset/imgs/30shineShop/ListCommit/6.png'
import imgListCommit7 from '../asset/imgs/30shineShop/ListCommit/7.png'
import imgListCommit8 from '../asset/imgs/30shineShop/ListCommit/8.png'


function HairStore() {


    const Products = (values) => {
        return(
            <a className={css.productsItem} href={values.href}>
                <img className={css.productsItemImg} src={values.img}/>
                <div className={css.productsItemDetail}>
                    <p className={css.productsItemName}>{values.nameProduct}</p>
                    <div className={css.productsItemPrices}>
                        <span className={css.productsItemPrice}>{values.price}???</span>
                        {values.oldPrice ? <span className={css.productsItemOldPrice}>{values.oldPrice}???</span> : ''}
                    </div>
                    {values.star == 0 ? <div className={css.productsItemStar}><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 1 ? <div className={css.productsItemStar}><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 2 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 3 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 4 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div> : ''}
                    {values.star == 5 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> : ''}
                </div>
                {values.oldPrice ? <span className={css.saleLabel}><p className={css.saleLabelSale}>{(((values.price / values.oldPrice) * 100) - 100).toFixed(0) }%</p></span> : ''}
            </a>
        )
    }

    const Navbar = () => {
        return(
            <div className={css.navbar}>
                <ul className={css.navbarList}>
                    <li className={`${css.navbarItem} ${css.navbarCateegoryCateegory}`}>
                        <div className={`${css.navbarCateegoryCateegoryList}`}>
                            <h4 className={`${css.navbarItemText}`}>DANH M???C</h4>
                            <AiFillCaretDown/>
                        </div>
                        <div className={css.navbarCateegoryContainerList}>
                            <ul className={css.navbarCateegoryList}>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading} ${css.hairStyling}`}>T???O KI???U T??C</h5>
                                        <p className={`${css.navbarCateegoryItemProduct} ${css.text123}`}>S??p vu???t t??c</p>
                                        <p className={css.navbarCateegoryItemProduct}>G??m gi??? n???p</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???o m??u t??c</p>
                                        <p className={css.navbarCateegoryItemProduct}>Pre Styling</p>
                                        <p className={css.navbarCateegoryItemProduct}>S???y t??c</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C DA M???T</h5>
                                        <p className={css.navbarCateegoryItemProduct}>S???a r???a m???t</p>
                                        <p className={css.navbarCateegoryItemProduct}>D?????ng da</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???y da ch???t</p>
                                        <p className={css.navbarCateegoryItemProduct}>Toner</p>
                                        <p className={css.navbarCateegoryItemProduct}>Kem ch???ng n???ng</p>
                                        <p className={css.navbarCateegoryItemProduct}>M???t n???</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C T??C</h5>
                                        <p className={css.navbarCateegoryItemProduct}>D???u g???i</p>
                                        <p className={css.navbarCateegoryItemProduct}>D???u x???</p>
                                        <p className={css.navbarCateegoryItemProduct}>D?????ng t??c</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C C?? TH???</h5>
                                        <p className={css.navbarCateegoryItemProduct}>S???a t???m</p>
                                        <p className={css.navbarCateegoryItemProduct}>Kh??? m??i c?? th???</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???y da ch???t c?? th???</p>
                                        <p className={css.navbarCateegoryItemProduct}>N?????c hoa</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C C?? NH??N</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Ch??m s??c r??ng mi???ng</p>
                                        <p className={css.navbarCateegoryItemProduct}>C???o r??y</p>
                                        <p className={css.navbarCateegoryItemProduct}>Dung d???ch v??? sinh</p>
                                        <p className={css.navbarCateegoryItemProduct}>Bao cao su</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>TH???C PH???M CH???C N??NG</h5>
                                        <p className={css.navbarCateegoryItemProduct}>L??m ?????p</p>
                                        <p className={css.navbarCateegoryItemProduct}>S???c kh???e</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>TH???I TRANG</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Qu???n l??t nam</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???t nam</p>
                                    </li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>COMBO SI??U H???I</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>S???N PH???M B??N CH???Y</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>S???N PH???M M???I</h4>
                    </li>
                    <li className={`${css.navbarItem} ${css.exclusiveBrandContainer}`}>
                        <div className={css.exclusiveBrand}>
                            <h4 className={css.navbarItemText}>TH????NG HI???U ?????C QUY???N</h4>
                            <AiFillCaretDown/>
                        </div>
                        <div className={css.containerTrademark}>
                            <ul className={css.exclusiveBrandList}>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>SNP ACSYS For Men</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>30SHINE</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>GLANZEN</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>SKIN&DR</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>REUZEL</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>THE PLANT BASE</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>GI???I THI???U</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>LI??N H???</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>BLOG</h4>
                    </li>
                </ul>
            </div>
        )
    }

    const Slider = () => {
        const [imgActive, setImgActive] = useState(1)
        const imgItem1 = useRef()
        const imgItem2 = useRef()
        let setTimeSlider = useRef()

        function setImgSlider() {
            if(imgActive == 1) {
                imgItem1.current.classList.add(`${css.imgMinus100}`)
                imgItem2.current.classList.add(`${css.imgMinus100}`)
                imgItem2.current.classList.add(`${css.zIndex2}`)

                setTimeout(()=>{
                    imgItem1.current.classList.remove(`${css.imgMinus100}`)
                    imgItem1.current.classList.add(`${css.zIndex1}`)
                    imgItem1.current.classList.add(`${css.img100}`)
                },250)

                setImgActive(2)
            }else if(imgActive == 2) {
                imgItem2.current.classList.remove(`${css.zIndex2}`)
                imgItem1.current.classList.remove(`${css.zIndex1}`)
                imgItem1.current.classList.remove(`${css.img100}`)

                imgItem2.current.classList.add(`${css.imgMinus200}`)
                imgItem2.current.classList.add(`${css.zIndex1}`)

                setTimeout(()=>{
                    imgItem1.current.classList.add(`${css.zIndex2}`)
                    imgItem2.current.classList.remove(`${css.imgMinus200}`)
                    imgItem2.current.classList.remove(`${css.imgMinus100}`)
                },250)
                setImgActive(1)
            }
        }

        useEffect(()=>{
            setTimeSlider =  setTimeout(()=>{
                setImgSlider()
            },5000)
            return ()=>{
                clearTimeout(setTimeSlider)
            }
        }, [imgActive])

        // x??? l?? click tr???i ph???i
        function handaleClickSlider(value) {
            clearTimeout(setTimeSlider)
            if(value) {
                if(imgActive == 1){
                    setImgActive(2)
                    setImgSlider()
                }else{
                    setImgActive(1)
                    setImgSlider()
                }
            }
        }


        return(
            <div className={css.slider}>
                <img ref={imgItem1} className={css.sliderImg1} src={imgBannerSlider1}/>
                <img ref={imgItem2} className={css.sliderImg2} src={imgBannerSlider2}/>
                <div className={css.iconSlider}>
                    <i onClick={()=>{handaleClickSlider("left")}} className={`${css.sliderIconLeft}`}><FaAngleLeft/></i>
                    <i onClick={()=>{handaleClickSlider("right")}} className={`${css.sliderIconRight}`}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Commit = () => {
        return (
            <div className={css.commit}>
                <div className={css.commitService}>
                    <div className={css.commitServiceList}>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit1}/>
                            <p className={css.commitServiceText}>Giao h??ng si??u t???c</p>
                        </a>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit2}/>
                            <p className={css.commitServiceText}>Ho??n ti???n 120%</p>
                        </a>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit3}/>
                            <p className={css.commitServiceText}>?????i tr??? t??n n??i</p>
                        </a>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit4}/>
                            <p className={css.commitServiceText}>Cam k???t 7 ng??y hi???u qu???</p>
                        </a>
                    </div>
                    <div className={css.commitProduct}>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit1}/>
                            <p className={css.commitProductText}>S???n ph???m m???i</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit2}/>
                            <p className={css.commitProductText}>Sale s???c deal h???i</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit3}/>
                            <p className={css.commitProductText}>S???n ph???m ?????c quy???n</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit4}/>
                            <p className={css.commitProductText}>Nhanh h???t m???n</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit5}/>
                            <p className={css.commitProductText}>Skin care</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit6}/>
                            <p className={css.commitProductText}>Mu???n t??c ?????p</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit7}/>
                            <p className={css.commitProductText}>Th??m tho s???ch s???</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit8}/>
                            <p className={css.commitProductText}>R??u care</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }


    // danh s??ch s???n ph???m n???i b???t
    const listProductHighlights = [
        {
            nameProduct: "M??y s???y t??c Flyco FH6277VN 1800w ION",
            href: "#",
            img: imgProductHighlights1,
            price: "399.000",
            oldPrice: "459.000",
            star: "0"
        },
        {
            nameProduct: "M??y s???y t??c Flyco FH1610VN 2200W",
            href: "#",
            img: imgProductHighlights2,
            price: "359.000",
            oldPrice: "399.000",
            star: "0"
        },
        {
            nameProduct: "S??p Kh??? M??i Old Spice",
            href: "#",
            img: imgProductHighlights3,
            price: "130.000",
            star: "0"
        },
        {
            nameProduct: "L??n Kh??? M??i Etiaxil ?????c Tr??? - N??i Kh??ng V???i H??i N??ch",
            href: "#",
            img: imgProductHighlights4,
            price: "293.000",
            star: "0"
        },
        {
            nameProduct: "L??n Kh??? M??i H??ng Ng??y Etiaxil - Tr??? H??i N??ch Hi???u Qu??? T???m Bi???t M??i H??i",
            href: "#",
            img: imgProductHighlights5,
            price: "237.000",
            star: "3"
        },
        {
            nameProduct: "L??n Kh??? M??i H??ng Ng??y Etiaxil - Tr??? H??i N??ch Hi???u Qu??? T???m Bi???t M??i H??i",
            href: "#",
            img: imgProductHighlights6,
            price: "237.000",
            star: "0"
        },
        {
            nameProduct: "S???a D?????ng Da Grinif All In One cho Nam - Tr???ng M???n Da",
            href: "#",
            img: imgProductHighlights7,
            price: "359.000",
            star: "5"
        },
        {
            nameProduct: "Vi??n S???i Gi???m Stress Dr. Frei Magnesium + B Complex",
            href: "#",
            img: imgProductHighlights8,
            price: "149.000",
            star: "0"
        },
        {
            nameProduct: "M??y r???a m???t Halio Facial Cleansing & Massaging Device - Mustard",
            href: "#",
            img: imgProductHighlights9,
            price: "559.000",
            oldPrice: "849.000",
            star: "0"
        },
        {
            nameProduct: "M??y r???a m???t Halio Facial Cleansing & Massaging Device - Sky Blue",
            href: "#",
            img: imgProductHighlights10,
            price: "559.000",
            oldPrice: "859.000",
            star: "0"
        },
        {
            nameProduct: "Gel r????a m?????t Simple Refreshing Facial Wash ",
            href: "#",
            img: imgProductHighlights11,
            price: "89.000",
            oldPrice: "150.000",
            star: "0"
        },
        {
            nameProduct: "Toner la??m di??u da nha??y ca??m Simple Soothing Facial Toner",
            href: "#",
            img: imgProductHighlights12,
            price: "92.000",
            oldPrice: "150.000",
            star: "0"
        },
        {
            nameProduct: "Dung D???ch D?????ng Tr???ng Hada Labo Perfect White Supreme Lotion",
            href: "#",
            img: imgProductHighlights13,
            price: "220.000",
            oldPrice: "225.000",
            star: "0"
        },
        {
            nameProduct: "Kem R???a M???t L??m S???ch S??u Oxy Deep Wash Cream Formula",
            href: "#",
            img: imgProductHighlights14,
            price: "72.000",
            star: "0"
        },
        {
            nameProduct: "Serum M??? Th??m Kh??ng Vi??m V?? Ng???a M???n G.G.G Wonder Glow Healing Serum",
            href: "#",
            img: imgProductHighlights15,
            price: "220.000 ??? - 476.000",
            star: "0"
        },
        {
            nameProduct: "Serum D?????ng S??ng V?? C???p N?????c G.G.G Wonder Glow Brightening Serum",
            href: "#",
            img: imgProductHighlights16,
            price: "220.000 ??? - 595.000",
            star: "0"
        },
        {
            nameProduct: "D???u G???i Tr??? R???ng V?? K??ch Th??ch M???c T??c Dr.FORHAIR Folligen Plus ",
            href: "#",
            img: imgProductHighlights17,
            price: "205.000 ??? - 605.000???",
            star: "0"
        },
        {
            nameProduct: "S???a R???a M???t Th???i ?????c Dabo Hydration for men ",
            href: "#",
            img: imgProductHighlights18,
            price: "89.000",
            oldPrice: "115.000",
            star: "0"
        },
        {
            nameProduct: "Set D???u G???i V?? D???u X??? Hairburst",
            href: "#",
            img: imgProductHighlights19,
            price: "646.000",
            star: "5"
        },
        {
            nameProduct: "G??m X???t T??c Lady Killer - Th??ch th???c n??n b???o hi???m",
            href: "#",
            img: imgProductHighlights20,
            price: "150.000",
            star: "5"
        },
        {
            nameProduct: "S???a R???a M???t Skin&Dr Active Charcoal - Than Ho???t T??nh 100g",
            href: "#",
            img: imgProductHighlights21,
            price: "179.000",
            star: "4"
        },
        {
            nameProduct: "Gel ?????c Tr??? M???n Acsys Spot Gel Patch",
            href: "#",
            img: imgProductHighlights22,
            price: "399.000",
            star: "5"
        },
        {
            nameProduct: "Gel T???y T??? B??o Ch???t Acsys Peeling Gel",
            href: "#",
            img: imgProductHighlights23,
            price: "350.000",
            star: "5"
        },
        {
            nameProduct: "S???a R???a M???t ACSYS Tr??? M???n - Phi??n B???n ?????c Bi???t",
            href: "#",
            img: imgProductHighlights24,
            price: "289.000",
            star: "4"
        },
        {
            nameProduct: "Mi???ng D??n Tr??? M???n SNP ACSYS Spot Trouble Patch",
            href: "#",
            img: imgProductHighlights25,
            price: "91.800",
            oldPrice: "102.000",
            star: "0"
        },
        {
            nameProduct: "S??p vu???t t??c Glanzen Fox",
            href: "#",
            img: imgProductHighlights26,
            price: "229.000",
            star: "5"
        },
        {
            nameProduct: "Glanzen Prime - Floral | Phi??n ?????c Bi???t H????ng Hoa",
            href: "#",
            img: imgProductHighlights27,
            price: "329.000",
            star: "5"
        },
        {
            nameProduct: "S??p vu???t t??c Glanzen Original Clay - V?? ?????ch gi??? n???p t???i 12 gi???",
            href: "#",
            img: imgProductHighlights28,
            price: "299.000 ??? - 500.000",
            star: "0"
        },
        {
            nameProduct: "Glanzen Prime - Sandar Wood | Phi??n B???n ?????c Bi???t H????ng G???",
            href: "#",
            img: imgProductHighlights29,
            price: "329.000",
            star: "0"
        },
        {
            nameProduct: "M??y s???y t??c t???o ki???u chuy??n nghi???p Sharkway Limited 1600W",
            href: "#",
            img: imgProductHighlights30,
            price: "237.000",
            oldPrice: "350.000",
            star: "0"
        },
    ]
    // top s???n ph???m n???i b???t
    const Highlights = () => {
        const [product, setProduct] = useState(0)
        const listProduct = useRef()
        const buttonClickRight = useRef()
        const buttonClickLeft = useRef()

        function handleTransferProduct(value) {
            if(value == 'left') {
                if(product >= -10) {
                    buttonClickLeft.current.style.cursor = 'no-drop'
                }else {
                    setProduct(product + 101.2)
                    buttonClickLeft.current.style.cursor = 'pointer'
                    buttonClickRight.current.style.cursor = 'pointer'
                }
            }else if(value == 'right'){
                if(product <= -500) {
                    buttonClickRight.current.style.cursor = 'no-drop'
                    buttonClickLeft.current.style.cursor = 'pointer'
                }else {
                    setProduct(product - 101.2)
                    buttonClickLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            if(product <= 0) {
                buttonClickLeft.current.style.cursor = 'no-drop'
            }
            listProduct.current.style = `transform: translateX(${product}%`
        }, [product])



        return(
            <div className={css.containerHighlights}>
                <div className={css.highlights}>
                    <div className={css.highlightsTitle}>
                        <h2 className={css.highlightsTitleText}>TOP S???N PH???M N???I B???T</h2>
                        <a className={css.highlightsTitleAllProduct} href="#">
                            <p className={css.highlightsTitleAllProductText}>Xem t???t c???</p>
                            <AiOutlineRight/>
                        </a>
                    </div>
                </div>
                <div className={css.highlightsContainerListProduct}>
                    <div ref={listProduct} className={css.highlightsListProduct}>
                        {listProductHighlights.map((product, index)=>{
                            return(
                                <a key={index} className={css.productItem} href={product.href}>
                                    <img className={css.productItemImg} src={product.img}/>
                                    <div className={css.productItemDetail}>
                                        <p className={css.productItemName}>{product.nameProduct}</p>
                                        <div className={css.productItemPrices}>
                                            <span className={css.productItemPrice}>{product.price}???</span>
                                            {product.oldPrice ? <span className={css.productItemOldPrice}>{product.oldPrice}???</span> : ''}
                                        </div>
                                        {product.star == 0 ? <div className={css.productItemStar}><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 1 ? <div className={css.productItemStar}><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 2 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 3 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 4 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 5 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> : ''}
                                    </div>
                                    {product.oldPrice ? <span className={css.saleLabel}><p className={css.saleLabelSale}>{(((product.price / product.oldPrice) * 100) - 100).toFixed(0) }%</p></span> : ''}
                                </a>
                            )
                        })}
                    </div>
                    <i ref={buttonClickLeft} onClick={()=>{handleTransferProduct('left')}} className={`${css.listStoryIconLeft}`}><FaAngleLeft/></i>
                    <i ref={buttonClickRight} onClick={()=>{handleTransferProduct('right')}} className={`${css.listStoryIconRight}`}><FaAngleRight/></i>
                </div>
                <div className={css.comboHighlights}>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos1}/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos2}/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos3}/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos4}/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos5}/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos6}/>
                </div>
            </div>
        )
    }

    const ProductSuggestion = () => {
        return(
            <div className={css.productSuggestion}>
                <div className={css.productSuggestionBanner}>
                    <img className={css.productSuggestionBannerImg} src={imgProductSuggestionBanner}/>
                    <div className={css.productSuggestionBannerText}>
                        <h3 className={css.productSuggestionBannerTextTitle}>G???I ?? H??M NAY MUA S???M LI???N TAY</h3>
                        <p className={css.productSuggestionBannerTextSubText}>L???a Ch???n H??ng ?????u D??nh Cho Qu?? Kh??ch</p>
                    </div>
                </div>
                <div className={css.productSuggestionProduct}>
                    <div className={css.productSuggestionContainerCategory}>
                        <div className={css.productSuggestionCategory}>
                            <div className={css.productSuggestionCategoryItem}>S???n ph???m m???i</div>
                            <div className={css.productSuggestionCategoryItem}>T???o ki???m t??c</div>
                            <div className={css.productSuggestionCategoryItem}>Ch??m s??c t??c</div>
                            <div className={css.productSuggestionCategoryItem}>Ch??m s??c da</div>
                            <div className={css.productSuggestionCategoryItem}>Ch??m s??c c?? nh??n</div>
                            <div className={css.productSuggestionCategoryItem}>Combo si??u ti???t ki???m</div>
                        </div>
                    </div>
                    <div className={css.productSuggestionListProduct}>
                        <Products
                            img = {imgProductNew1}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew2}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew3}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew4}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew5}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew6}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew7}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew8}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew9}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew10}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew11}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew12}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew13}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew14}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew15}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew16}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew17}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew18}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew19}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew20}
                            nameProduct = "M??y s???y t??c Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                    </div>
                    <div className={css.seeMoreProducts}>
                        <span className={css.seeMoreProductsText}>Xem th??m</span>
                        <AiOutlineArrowRight/>
                    </div>
                </div>
            </div>
        )
    }

    const Trademark = () => {
        const [trademarkSlider, setTrademarkSlider] = useState(0)
        const buttonClickLeft = useRef()
        const buttonClickRight = useRef()
        const trademarkListImg = useRef()

        function handleTransferProduct(value) {
            if(value == 'left') {
                if(trademarkSlider >= 0) {
                    buttonClickLeft.current.style.cursor = 'no-drop'
                }else {
                    setTrademarkSlider(trademarkSlider + 16.7)
                    buttonClickLeft.current.style.cursor = 'pointer'
                    buttonClickRight.current.style.cursor = 'pointer'
                }
            }else if(value == 'right'){
                if(trademarkSlider <= -16) {
                    buttonClickRight.current.style.cursor = 'no-drop'
                    buttonClickLeft.current.style.cursor = 'pointer'
                }else {
                    setTrademarkSlider(trademarkSlider - 16.7)
                    buttonClickLeft.current.style.cursor = 'pointer'
                }
            }
        }
        useEffect(()=>{
            if(trademarkSlider <= 0) {
                buttonClickLeft.current.style.cursor = 'no-drop'
            }
            trademarkListImg.current.style = `transform: translateX(${trademarkSlider}%`
        }, [trademarkSlider])

        return(
            <div className={css.trademark}>
                <h2 className={css.trademarkTitle}>TH????NG HI???U N???I B???T</h2>
                <div className={css.trademarkContainer}>
                    <div ref={trademarkListImg} className={css.trademarkList}>
                        <img className={css.trademarkItem} src={imgTrademark1}/>
                        <img className={css.trademarkItem} src={imgTrademark2}/>
                        <img className={css.trademarkItem} src={imgTrademark3}/>
                        <img className={css.trademarkItem} src={imgTrademark4}/>
                        <img className={css.trademarkItem} src={imgTrademark5}/>
                        <img className={css.trademarkItem} src={imgTrademark6}/>
                        <img className={css.trademarkItem} src={imgTrademark7}/>
                    </div>
                    <i ref={buttonClickLeft} onClick={()=>{handleTransferProduct('left')}} className={`${css.trademarkIconLeft}`}><FaAngleLeft/></i>
                    <i ref={buttonClickRight} onClick={()=>{handleTransferProduct('right')}} className={`${css.trademarkIconRight}`}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const ListCommit = () => {
        return(
            <div className={css.ContainerListCommit}>
                <div className={css.listCommit}>
                    <div className={css.listCommitContainerItem}>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit1}/>
                            <span className={css.listCommitText}>Cam k???t 7 ng??y hi???u qu???</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit2}/>
                            <span className={css.listCommitText}>Mua 1 h?????ng 5 ?????c quy???n</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit3}/>
                            <span className={css.listCommitText}>Ch??nh s??ch ho??n ti???n 120%</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit4}/>
                            <span className={css.listCommitText}>Ch???t l?????ng s???n ph???m cao c???p nh???t</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit5}/>
                            <span className={css.listCommitText}>Giao h??ng si??u t???c 2h</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit6}/>
                            <span className={css.listCommitText}>?????i tr??? t???n n??i trong 24h</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit7}/>
                            <span className={css.listCommitText}>T???ng ????i t?? v???n m???i l??c m???i n??i</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit8}/>
                            <span className={css.listCommitText}>An to??n chu???n giao v???n qu???c t???</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id={`${css.page}`}>
            <Navbar/>
            <Slider/>
            <Commit/>
            <Highlights/>
            <ProductSuggestion/>
            <Trademark/>
            <ListCommit/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HairStore