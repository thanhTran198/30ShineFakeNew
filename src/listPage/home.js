import { useEffect, useRef, useState } from 'react';
import { FaAngleRight, FaAngleLeft, FaArrowRight } from 'react-icons/fa'
import Footer from './footer'

import shop from './shop.module.css';
import home from './home.module.css';
import slider1 from '../asset/imgs/home/sliderImg1.jpg'
import slider2 from '../asset/imgs/home/sliderImg2.jpg'
import slider3 from '../asset/imgs/home/sliderImg3.jpg'
import slider4 from '../asset/imgs/home/sliderImg4.jpg'
import slider5 from '../asset/imgs/home/sliderImg5.jpg'
import imgCombo1 from '../asset/imgs/home/combo-1.jpg'
import imgSub1Combo1 from '../asset/imgs/home/sub1.jpg'
import imgSub2Combo1 from '../asset/imgs/home/sub2.jpg'
import imgSub3Combo1 from '../asset/imgs/home/sub3.jpg'
import imgSub4Combo1 from '../asset/imgs/home/sub4.jpg'
import imgCombo2 from '../asset/imgs/home/combo-2.jpg'
import imgSub1Combo2 from '../asset/imgs/home/sub-combo-2.jpg'
import imgSub2Combo2 from '../asset/imgs/home/sub-combo-2-2.jpg'
import imgSub3Combo2 from '../asset/imgs/home/sub-combo-2-3.jpg'
import imgSub4Combo2 from '../asset/imgs/home/sub-combo-2-4.jpg'
import imgListenAttentively1 from '../asset/imgs/home/lang-nghe-tan-tam-1.jpg'
import imgListenAttentively2 from '../asset/imgs/home/lang-nghe-tan-tam-2.jpg'
import imgListenAttentively3 from '../asset/imgs/home/lang-nghe-tan-tam-3.jpg'
import imgShiningJourney1 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh1.jpg'
import imgShiningJourney2 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh2.jpg'
import imgShiningJourney3 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh3.jpg'
import imgShiningJourney4 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh4.jpg'
import imgAngelsTuAnh from '../asset/imgs/home/Anegls/TuAnh.jpg'
import imgAngelsTraMy from '../asset/imgs/home/Anegls/TraMy.jpg'
import imgAngelsThanhHong from '../asset/imgs/home/Anegls/ThanhHong.jpg'
import imgAngelsKhanhHang from '../asset/imgs/home/Anegls/KhanhHang.jpg'
import imgAngelsAiHien from '../asset/imgs/home/Anegls/AiHien.jpg'
import imgAngelsThuTrang from '../asset/imgs/home/Anegls/ThuTrang.jpg'
import imgAngelsDiemTuyen from '../asset/imgs/home/Anegls/DiemTuyen.jpg'
import imgAngelsMyDuyen from '../asset/imgs/home/Anegls/MyDuyen.jpg'
import imgAngelsNhuY from '../asset/imgs/home/Anegls/NhuY.jpg'
import imgAngelsNgocLien from '../asset/imgs/home/Anegls/NgocLien.jpg'
import imgAngelsTuyetTrinh from '../asset/imgs/home/Anegls/TuyetTrinh.jpg'
import imgStoreShop from '../asset/imgs/home/store/shop.jpg'
import imgSub1StoreShop from '../asset/imgs/home/store/subShop1.jpg'
import imgSub2StoreShop from '../asset/imgs/home/store/subShop2.jpg'
import imgSub3StoreShop from '../asset/imgs/home/store/subShop3.jpg'
import imgSub4StoreShop from '../asset/imgs/home/store/subShop4.jpg'
import imgArtistLeBaoBinh from '../asset/imgs/home/artist/30shine-ca-si-le-bao-binh.jpg'
import imgArtistLK from '../asset/imgs/home/artist/30shine-ca-si-lk.jpg'
import imgArtistThanhSon from '../asset/imgs/home/artist/30shine-dien-vien-thanh-son.jpg'
import imgArtistHoanDung from '../asset/imgs/home/artist/30shine-ca-si-hoang-dung.jpg'
import imgNewHairstyleBanner from '../asset/imgs/home/NewHairstyle/30shine-banner-kham-pha-kieu-to.jpg'
import imgNewHairstyleStyle from '../asset/imgs/home/NewHairstyle/30shine-kham-pha-kieu-toc-style-mater.png'
import imgNewHairstyleNew from '../asset/imgs/home/NewHairstyle/30shine-kham-pha-kieu-toc.png'
import imgAssurance1 from '../asset/imgs/home/anTam-tinTuong/1.jpg'
import imgAssurance2 from '../asset/imgs/home/anTam-tinTuong/2.jpg'
import imgAssurance3 from '../asset/imgs/home/anTam-tinTuong/3.jpg'
import imgEndow1 from '../asset/imgs/home/endow/1.jpg'
import imgEndow2 from '../asset/imgs/home/endow/2.jpg'
import imgEndow3 from '../asset/imgs/home/endow/3.jpg'
import imgEndow4 from '../asset/imgs/home/endow/4.jpg'
import imgEndow5 from '../asset/imgs/home/endow/5.jpg'
import imgEndow6 from '../asset/imgs/home/endow/6.jpg'
import img30shineShop from '../asset/imgs/home/Shop30shine/banner-shop.jpg'
import imgProduct1 from '../asset/imgs/home/Shop30shine/product1.jpg'
import imgProduct2 from '../asset/imgs/home/Shop30shine/product2.jpg'
import imgProduct3 from '../asset/imgs/home/Shop30shine/product3.jpg'
import imgProduct4 from '../asset/imgs/home/Shop30shine/product4.jpg'
import imgProduct5 from '../asset/imgs/home/Shop30shine/product5.jpg'
import imgProduct6 from '../asset/imgs/home/Shop30shine/product6.jpg'
import imgProduct7 from '../asset/imgs/home/Shop30shine/product7.jpg'
import imgProduct8 from '../asset/imgs/home/Shop30shine/product8.jpg'
import imgProduct9 from '../asset/imgs/home/Shop30shine/product9.jpg'
import imgProduct10 from '../asset/imgs/home/Shop30shine/product10.jpg'
import imgProduct11 from '../asset/imgs/home/Shop30shine/product11.jpg'
import imgProduct12 from '../asset/imgs/home/Shop30shine/product12.jpg'
import imgMemberShine from '../asset/imgs/home/member-Shine/20220103-ShineMember2022-v2.jpg'
import imgShinrMoment1 from '../asset/imgs/home/shineMoment/A1.jpg'
import imgShinrMoment2 from '../asset/imgs/home/shineMoment/A2.jpg'
import imgShinrMoment3 from '../asset/imgs/home/shineMoment/A3.jpg'
import imgShinrMoment4 from '../asset/imgs/home/shineMoment/A4.jpg'
import imgShinrMoment5 from '../asset/imgs/home/shineMoment/A5.jpg'
import imgShinrMoment6 from '../asset/imgs/home/shineMoment/A6.jpg'
import imgShinrMoment7 from '../asset/imgs/home/shineMoment/A7.jpg'
import imgShinrMoment8 from '../asset/imgs/home/shineMoment/A8.jpg'
import imgShinrMoment9 from '../asset/imgs/home/shineMoment/A9.jpg'
import imgShinrMoment10 from '../asset/imgs/home/shineMoment/A10.jpg'
import imgCareBanner from '../asset/imgs/home/30shineCare/banner-30shine-care-5.jpg'
import imgCare7Day from '../asset/imgs/home/30shineCare/7days.png'
import imgCare15Day from '../asset/imgs/home/30shineCare/15days.png'
import imgCare30Day from '../asset/imgs/home/30shineCare/30days-care.jpg'
import imgCareSale20 from '../asset/imgs/home/30shineCare/20%.png'
import imgNearestHCM from '../asset/imgs/home/nearest/salon-hcm.png'
import imgNearestDN from '../asset/imgs/home/nearest/salon-danang.png'
import imgNearestHN from '../asset/imgs/home/nearest/salon-hanoi.png'
import imgNearestOther from '../asset/imgs/home/nearest/salon-other.png'
import imgMessage from '../asset/imgs/home/contact/messenger.png'
import imgPhone from '../asset/imgs/home/contact/phoneNew.png'


function Home() {


    const Slider = ()=> {
        // l???y ra c??c element img
        const sliderItem1 = useRef()
        const sliderItem2 = useRef()
        const sliderItem3 = useRef()
        const sliderItem4 = useRef()
        const sliderItem5 = useRef()

        const [srcSlider, setSrcSlider] = useState(1)
                
        if(srcSlider >= 6) {
            setSrcSlider(1)
        }

        function handleSlider() {
            if(srcSlider == 1) {
                // console.log('s??? 1')
                sliderItem1.current.classList.remove(`${home.img0}`)
                sliderItem2.current.classList.remove(`${home.img0}`)
                sliderItem3.current.classList.remove(`${home.img0}`)
                sliderItem4.current.classList.remove(`${home.img0}`)
                sliderItem5.current.classList.remove(`${home.img0}`)

                sliderItem1.current.classList.add(`${home.img400}`)
                sliderItem2.current.classList.add(`${home.imgMinus100}`)
                sliderItem3.current.classList.add(`${home.imgMinus100}`)
                sliderItem4.current.classList.add(`${home.imgMinus100}`)
                sliderItem5.current.classList.add(`${home.imgMinus100}`)
                setSrcSlider(srcSlider + 1)
            }else if(srcSlider == 2) {
                // console.log('s??? 2')
                sliderItem1.current.classList.remove(`${home.img400}`)
                sliderItem2.current.classList.remove(`${home.imgMinus100}`)
                sliderItem3.current.classList.remove(`${home.imgMinus100}`)
                sliderItem4.current.classList.remove(`${home.imgMinus100}`)
                sliderItem5.current.classList.remove(`${home.imgMinus100}`)

                sliderItem1.current.classList.add(`${home.img300}`)
                sliderItem2.current.classList.add(`${home.img300}`)
                sliderItem3.current.classList.add(`${home.imgMinus200}`)
                sliderItem4.current.classList.add(`${home.imgMinus200}`)
                sliderItem5.current.classList.add(`${home.imgMinus200}`)
                setSrcSlider(srcSlider + 1)
            }
            else if(srcSlider == 3) {
                // console.log('s??? 3')
                sliderItem1.current.classList.remove(`${home.img300}`)
                sliderItem2.current.classList.remove(`${home.img300}`)
                sliderItem3.current.classList.remove(`${home.imgMinus200}`)
                sliderItem4.current.classList.remove(`${home.imgMinus200}`)
                sliderItem5.current.classList.remove(`${home.imgMinus200}`)

                sliderItem1.current.classList.add(`${home.img200}`)
                sliderItem2.current.classList.add(`${home.img200}`)
                sliderItem3.current.classList.add(`${home.img200}`)
                sliderItem4.current.classList.add(`${home.imgMinus300}`)
                sliderItem5.current.classList.add(`${home.imgMinus300}`)
                setSrcSlider(srcSlider + 1)
            }
            else if(srcSlider == 4) {
                // console.log('s??? 4')
                sliderItem1.current.classList.remove(`${home.img200}`)
                sliderItem2.current.classList.remove(`${home.img200}`)
                sliderItem3.current.classList.remove(`${home.img200}`)
                sliderItem4.current.classList.remove(`${home.imgMinus300}`)
                sliderItem5.current.classList.remove(`${home.imgMinus300}`)

                sliderItem1.current.classList.add(`${home.img100}`)
                sliderItem2.current.classList.add(`${home.img100}`)
                sliderItem3.current.classList.add(`${home.img100}`)
                sliderItem4.current.classList.add(`${home.img100}`)
                sliderItem5.current.classList.add(`${home.imgMinus400}`)
                setSrcSlider(srcSlider + 1)
            }
            else if(srcSlider == 5) {
                // console.log('s??? 5')
                sliderItem1.current.classList.remove(`${home.img100}`)
                sliderItem2.current.classList.remove(`${home.img100}`)
                sliderItem3.current.classList.remove(`${home.img100}`)
                sliderItem4.current.classList.remove(`${home.img100}`)
                sliderItem5.current.classList.remove(`${home.imgMinus400}`)

                sliderItem1.current.classList.add(`${home.img0}`)
                sliderItem2.current.classList.add(`${home.img0}`)
                sliderItem3.current.classList.add(`${home.img0}`)
                sliderItem4.current.classList.add(`${home.img0}`)
                sliderItem5.current.classList.add(`${home.img0}`)
                setSrcSlider(srcSlider + 1)
            }
        }
        
        let setTimeSlider = useRef()


        // s??t translateX cho img
       useEffect(()=>{
           setTimeSlider = setTimeout(()=>{
                handleSlider()
           },5000)
       },[srcSlider])
        
       const handleTransferPhotos = (command) => {
            if(command == 'right') {
                console.log('ti???n')
                clearTimeout(setTimeSlider)
                setSrcSlider(srcSlider + 1)
                handleSlider()
            }else if(command == 'left') {
                console.log('l??i')
                clearTimeout(setTimeSlider)
                setSrcSlider(srcSlider - 1)
                handleSlider()
            }
       }
    
        
        return (
            <div className={home.containerSlider}>
                <div className={home.slider}>
                    <div ref={sliderItem1} className={`${home.sliderItem1}`}>
                        <img className={`${home.sliderItemImg}`} src={slider1}/>
                    </div>
                    <div ref={sliderItem2} className={home.sliderItem2}>
                        <img className={home.sliderItemImg} src={slider2}/>
                    </div>
                    <div ref={sliderItem3} className={home.sliderItem3}>
                        <img className={home.sliderItemImg} src={slider3}/>
                    </div>
                    <div ref={sliderItem4} className={home.sliderItem4}>
                        <img className={home.sliderItemImg} src={slider4}/>
                    </div>
                    <div ref={sliderItem5} className={home.sliderItem5}>
                        <img className={home.sliderItemImg} src={slider5}/>
                    </div>
                </div>
                <i onClick={()=>{handleTransferPhotos('right')}} className={`${home.listStoryIconLeft} ${home.sliderIconLeft}`}><FaAngleLeft/></i>
                <i onClick={()=>{handleTransferPhotos('left')}} className={`${home.listStoryIconRight} ${home.sliderIconRight}`}><FaAngleRight/></i>
            </div>
        )
    }

    // n??t li??n h??? b??n g??c ph???i d?????i
    const Contact = ()=> {
        return(
            <div className={home.contact}>
                <div className={home.contactContainerPhone}>
                    <img className={home.contactImgPhone} src={imgPhone}/>
                </div>
                <div className={home.contactContainerMessage}>
                    <img className={home.contactImgMessage} src={imgMessage}/>
                </div>
            </div>
        )
    }

    // t???o ta ti??u ????? c???a t???ng d??ng l???n
    const IntroTitle = (introTitle)=> {
        return (
            <div className={introTitle.noneMTop ? home.bodyTitleNoneMtop : home.bodyTitle }>
                <div className={home.bodyTitleFirst}>
                    <h3 className={home.bodyTitleFirstTitle}>{introTitle.textTitle}</h3>
                    <p className={home.bodyTitleFirstSubtitle}>{introTitle.subTextTitle}</p>
                </div>
                <a href="#" className={introTitle.textAll ? home.bodyTitleAll : home.homeNone}>
                    <p className={home.bodyTitleAllText}>{introTitle.textAll}</p>
                    <i className={home.bodyTitleAllIcon}><FaAngleRight/></i>
                </a>
            </div>
        )
    }

    // t???o ra ???nh c?? hover zom
    const BackGroundImg = (value)=> {
        return(
            <div className={`${home.containerHoverZom} ${value.classContainerImg}`}>
                <img className={`${home.hoverZom} ${value.classImg}`} src={value.img}/>
            </div>
        )
    }

    // t???o ra 4 item n???m ngang
    const FourItem = (experiences)=> {
        return(
            <ul className={experiences.mgBt50 ? `${home.bodyList} ${home.mgBt50}`: `${home.bodyList}`}>
                    <li className={`${home.bodyItem}`}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg1}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService1}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList1}</p>
                        </div>
                    </li>
                    <li className={home.bodyItem}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg2}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService2}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList2}</p>
                        </div>
                    </li>
                    <li className={home.bodyItem}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg3}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService3}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList3}</p>
                        </div>
                    </li>
                    <li className={home.bodyItem}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg4}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService4}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList4}</p>
                        </div>
                    </li>
                </ul>
        )
    }

    // h??ng l???n
    const ExperienceAndTop1Service = (experiences)=> {
        return(
            <div className={home.bodyService}>
                <IntroTitle
                    textTitle = {experiences.textTitle}
                    subTextTitle = {experiences.subTextTitle}
                    noneMTop = {experiences.noneMTop ? true : false}
                />
                <div className={experiences.noZom ? `${home.bodyServiceContainerImg}` :`${home.bodyServiceContainerImg} ${home.containerHoverZom}`}>
                    <img className={experiences.noZom ? `${home.bodyServiceImg}` :`${home.bodyServiceImg} ${home.hoverZom}`} src={experiences.imgMain}/>
                    <div className={experiences.storeIntroduction ? home.storeIntroduction : home.homeNone}>{experiences.storeIntroduction}</div>
                    <div className={experiences.twoLineImageTitle ? home.twoLineImageTitle : home.homeNone}>
                        <h2 className={home.twoLineImageTitleTagH2}>{experiences.twoLineImageTitleTagH2}</h2>
                        <p className={home.twoLineImageTitleTagP}>{experiences.twoLineImageTitleTagP}</p>
                    </div>
                </div>
                <FourItem 
                    itemImg1 = {experiences.itemImg1}
                    itemService1 = {experiences.itemService1}
                    priceList1 = {experiences.priceList1}
                    itemImg2 = {experiences.itemImg2}
                    itemService2 = {experiences.itemService2}
                    priceList2 = {experiences.priceList2}
                    itemImg3 = {experiences.itemImg3}
                    itemService3 = {experiences.itemService3}
                    priceList3 = {experiences.priceList3}
                    itemImg4 = {experiences.itemImg4}
                    itemService4 = {experiences.itemService4}
                    priceList4 = {experiences.priceList4}
                />
            </div>
        )
    }

    const Part3Item = (value)=> {
        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = {value.textTitle}
                    subTextTitle = {value.subTextTitle}
                />
                <ul className={home.listenList}>
                    <li className={home.listenItem}>
                        <div className={`${home.listenItemContainerImg} ${home.containerHoverZom}`}>
                            <img className={`${home.listenItemImg} ${home.hoverZom}`} src={value.img1} />
                        </div>
                        <p className={home.listenItemText}>{value.listenItemText1}</p>
                    </li>
                    <li className={home.listenItem}>
                        <div className={`${home.listenItemContainerImg} ${home.containerHoverZom}`}>
                            <img className={`${home.listenItemImg} ${home.hoverZom}`} src={value.img2} />
                        </div>
                        <p className={home.listenItemText}>{value.listenItemText2}</p>
                    </li>
                    <li className={home.listenItem}>
                        <div className={`${home.listenItemContainerImg} ${home.containerHoverZom}`}>
                            <img className={`${home.listenItemImg} ${home.hoverZom}`} src={value.img3} />
                        </div>
                        <p className={home.listenItemText}>{value.listenItemText3}</p>
                    </li>
                </ul>
            </div>
        )

    }

    const ShiningJourney = ()=> {
        const [valuetransform, setValuetransform] = useState(0)
        const iconJourneyShineLeft = useRef()
        const iconJourneyShineRight = useRef()
        const JourneyShineList = useRef()

        function handaleClickShiningJourney(value) {
            if(value == "left") {
                if(valuetransform <= 0) {
                    iconJourneyShineLeft.current.style.cursor = 'no-drop'
                }else{
                    setValuetransform(valuetransform - 51)
                    iconJourneyShineRight.current.style.cursor = 'pointer'
                    console.log('left')
                }
            }else {
                if(valuetransform >= 102) {
                    iconJourneyShineRight.current.style.cursor = 'no-drop'
                }else {
                    setValuetransform(valuetransform + 51)
                    console.log('right')
                }
            }
        }

        useEffect(()=>{
            if(valuetransform == 0) {
                iconJourneyShineLeft.current.style.cursor = 'no-drop'
            }else{
                iconJourneyShineLeft.current.style.cursor = 'pointer'
            }
            JourneyShineList.current.style = `transform: translateX(-${valuetransform}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "H??nh tr??nh t???a s??ng"
                    subTextTitle = "C??u chuy???n ch??n th???c t??? h??ng ch???c kh??ch h??ng"
                    textAll = "Xem t???t c???"
                />
                <div className={home.containerListStory}>
                    <ul ref={JourneyShineList} className={home.listStory}>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney1}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>Thay ?????i ngo???i h??nh, ch??ng trai l???nh l??ng, ??t n??i khi???n c?? hoa kh??i rung ?????ng</p>
                        </li>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney2}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>Can ?????m thay ?????i m??i t??c 7 n??m, nam sinh Ki???n Tr??c l???t x??c ki???u t??c m???i c???c ?????p</p>
                        </li>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney3}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>B???n sinh vi??n IT l???t x??c th??nh hot boy v???n ng?????i m??</p>
                        </li>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney4}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>Ph??c l???t x??c m??i t??c ????? su???t bao n??m gi??p ngo???i h??nh m???i c???c cu???n h??t</p>
                        </li>
                    </ul>
                    <i ref={iconJourneyShineLeft} onClick={()=>{handaleClickShiningJourney('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={iconJourneyShineRight} onClick={()=>{handaleClickShiningJourney('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Angels = ()=> {
        const [transform, setTransfrom] = useState(0)
        const listAngels = useRef()
        const iconAngelsLeft = useRef()
        const iconAngelsRight = useRef()
        

        function handleTransferPhotosAngels(button) {
            if(button == 'up') {
                if(transform < 0) {
                }else {
                    setTransfrom(transform + 30)
                    iconAngelsLeft.current.style.cursor = 'pointer'
                }
            }else {
                if(transform <= 0) {
                    iconAngelsLeft.current.style.cursor = 'no-drop'
                }else {
                    setTransfrom(transform - 30)
                    console.log('l??i')
                }
            }
        }
        // kh??ng cho ng?????i d??ng ???n v??o khi ?????n ???nh ?????u ti??n
        useEffect(()=>{
            if(transform <= 0) {
                iconAngelsLeft.current.style.cursor = 'no-drop'
            }
            // check xem khi ???n ?????n cu???i ???nh s??? kh??ng cho b???m n???a
            if(transform >= 270) {
                iconAngelsRight.current.style.cursor = 'no-drop'
                iconAngelsRight.current.removeEventListener("onClick", handleTransferPhotosAngels())
            }else {
                iconAngelsRight.current.style.cursor = 'pointer'
            }
            // th??m transform khi render l???i giao di???n
            listAngels.current.style = `transform: translateX(-${transform}%)`
        })


        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "30Shine???s Angels"
                    subTextTitle = "Nh???ng thi??n th???n xinh ?????p h???t l??ng v?? kh??ch h??ng"
                />
                <div className={home.containerAngels}>
                    <ul ref={listAngels} className={home.angelsList}>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsTuAnh} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>T?? Anh - 255 Nguy???n An Ninh, B??nh D????ng</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???, th??n thi???n, s???ng s??ng</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsTraMy} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Tr?? My (Mina) - 152 Th???ng Nh???t, Nha Trang</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???, nhi???t t??nh, c???n th???n</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsThanhHong} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Thanh H???ng - 12 L???c Trung, H?? N???i</p>
                                <p className={home.angelsDescriptionDetailed }>Xinh x???n, t?? v???n kh??o, t???n t??m</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsKhanhHang} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Kh??nh H???ng - 152 Th???ng Nh???t, Nha Trang</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsAiHien} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>??i Hi???n - 113 Tr???n H??ng ?????o, An Giang</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???, h??a nh??, t?? v???n kh??o</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsThuTrang} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Thu Trang - 36 Phan Huy ??ch, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Ho?? ?????ng, d??? th????ng, vui v???</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsDiemTuyen} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Di???m Tuy???n - 36 Phan Huy ??ch, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Cao, ?????p, hi???n</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsMyDuyen} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>M??? Duy??n - 168 ?????ng V??n Bi, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???, nhi???t t??nh, d??? g???n</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsNhuY} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Nh?? ?? - 168 ?????ng V??n Bi, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???, ho?? ?????ng, ho???t b??t</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsNgocLien} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Ng???c Li??n - 1361 Ph???m V??n Thu???n, Bi??n H??a</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???, kh??o l??o, t??? tin</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsTuyetTrinh} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Tuy???t Trinh - 356 ????? Xu??n H???p, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Vui v???, ho?? ?????ng, n??i chuy???n vui</p>
                            </div>
                        </li>
                    </ul>
                        <i ref={iconAngelsLeft} onClick={()=>{handleTransferPhotosAngels('back')}} className={home.angelsIconLeft}><FaAngleLeft/></i>
                        <i ref={iconAngelsRight} onClick={()=>{handleTransferPhotosAngels('up')}} className={home.angelsIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const InspirationalAnd30shine = ()=> {
        const [valueTransformArtist, setValueTransformArtist] = useState(0)
        const ulArtistList = useRef()
        const iconOfArtistListLeft = useRef()
        const iconOfArtistListRight = useRef()

        function handaleClickArtist(value) {
            if(value == 'left'){
                if(valueTransformArtist == 0) {
                    iconOfArtistListLeft.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformArtist(valueTransformArtist - 51)
                    iconOfArtistListRight.current.style.cursor = 'pointer'
                }
            }else {
                if(valueTransformArtist >= 102) {
                    iconOfArtistListRight.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformArtist(valueTransformArtist + 51)
                    iconOfArtistListLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            ulArtistList.current.style = `transform: translateX(-${valueTransformArtist}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Ng?????i truy???n c???m h???ng v?? 30Shine"
                    subTextTitle = "C??ng lan t???a th??ng ??i???p thay ?????i ????? t???a s??ng"
                />
                <div className={home.containerArtistList}>
                    <ul ref={ulArtistList} className={home.artistList}>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistLeBaoBinh}/>
                            </div>
                            <p className={home.listenItemText}>Ca s?? L?? B???o B??nh: Thay ?????i ????? kh??ng ph???i ???B??? l??? m???t ng?????i???</p>
                        </li>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistLK}/>
                            </div>
                            <p className={home.listenItemText}>Ki???u t??c khi???n LK Tho??t ly chi???c m?? huy???n tho???i</p>
                        </li>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistHoanDung}/>
                            </div>
                            <p className={home.listenItemText}>Ho??ng D??ng: ???Ngo???i h??nh h???t s???c quan tr???ng, ch??? sau t??i n??ng???</p>
                        </li>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistThanhSon}/>
                            </div>
                            <p className={home.listenItemText}>Di???n vi??n Thanh S??n ???C??? M???t ?????i ??n O??n??? t??m l???i phong c??ch tr??? trung ????ng tu???i th???t</p>
                        </li>
                    </ul>
                    <i ref={iconOfArtistListLeft} onClick={()=>{handaleClickArtist('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={iconOfArtistListRight} onClick={()=>{handaleClickArtist('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const NewHairstyle = ()=> {
        return(
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Kh??m ph?? ki???u t??c"
                    subTextTitle = "Ngu???n c???m h???ng cho ki???u t??c m???i c???a b???n"
                    textAll = 'Xem t???t c???'
                />
                <div className={home.newHairstyle}>
                    <BackGroundImg 
                        classContainerImg = {home.newHairstyleContainerImg}
                        classImg = {home.newHairstyleImg}
                        img = {imgNewHairstyleBanner}
                    />
                    <div className={home.newHairstyleList}>
                        <div className={home.newHairstyleItem}>
                            <div className={`${home.containerHoverZom} ${home.newHairstyleItemContainerImg}`}>
                                <img className={`${home.newHairstyleItemImg} ${home.hoverZom}`} src={imgNewHairstyleStyle}/>
                            </div>
                            <div className={home.newHairstyleItemSub}>
                                <p className={home.newHairstyleItemIitle}>Kh??m ph?? ki??? t??c</p>
                                <p className={home.newHairstyleItemSunTitle}>T??m c???m h???ng ?????i m???i cho m??i t??c</p>
                            </div>
                        </div>
                        <div className={home.newHairstyleItem}>
                            <div className={`${home.containerHoverZom} ${home.newHairstyleItemContainerImg}`}>
                                <img className={`${home.newHairstyleItemImg} ${home.hoverZom}`} src={imgNewHairstyleNew}/>
                            </div>
                            <div className={home.newHairstyleItemSub}>
                                <p className={home.newHairstyleItemIitle}>Style Master</p>
                                <p className={home.newHairstyleItemSunTitle}>BXH c??c ki???u t??c hot trong th??ng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Endow = () => {
        const [valueTransformEndow, setvalueTransformEndow] = useState(0)
        const endowList = useRef()
        const iconEndowLeft = useRef()
        const iconEndowRight = useRef()

        // 29%
        function handleClickEndow(value) {
            if(value == 'left') {
                if(valueTransformEndow <=0) {
                }else{
                    setvalueTransformEndow(valueTransformEndow - 29)
                }
            }else if(value == 'right'){
                console.log(valueTransformEndow)
                if(valueTransformEndow >= 87) {
                    iconEndowRight.current.style.cursor = 'no-drop'
                }else{
                    setvalueTransformEndow(valueTransformEndow + 29)
                }
            }
        }

        useEffect(()=>{
            if(valueTransformEndow <=0) {
                iconEndowLeft.current.style.cursor = 'no-drop'
                iconEndowRight.current.style.cursor = 'pointer'
            }else{
                iconEndowLeft.current.style.cursor = 'pointer'
            }
            endowList.current.style = `transform: translateX(-${valueTransformEndow}%)`
        })
        return(
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "??u ????i"
                    subTextTitle = "Qu?? t???ng, chi???t kh???u ?????c bi???t c???p nh???t li??n t???c"
                    textAll = 'Xem t???t c???'
                />
                <div className={home.containerEndow}>
                    <ul ref={endowList} className={home.endow}>
                        <li className={`${home.endowItem}`}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow1} />
                            </div>
                            <p className={home.endowText}>Renewal Shine Box</p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow2} />
                            </div>
                            <p className={home.endowText}>Balance Skin Shine Box</p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow3} />
                            </div>
                            <p className={home.endowText}>Firming Shine Box </p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow4} />
                            </div>
                            <p className={home.endowText}>Brightening Shine Box</p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow5} />
                            </div>
                            <p className={home.endowText}>Smoothing Shine Box </p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow6} />
                            </div>
                            <p className={home.endowText}>Shimmering Shine Box </p>
                        </li>
                    </ul>
                    <i ref={iconEndowLeft} onClick={()=>{handleClickEndow('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={iconEndowRight} onClick={()=>{handleClickEndow('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Shop30shine = ()=> {
        const [valueTransformShop, setValueTransformShop] = useState(0)
        const productListList = useRef()
        const productListIconLeft = useRef()
        const productListIconRight = useRef()
        // 23%
        function handaleClickShop(value){
            if(value == 'left'){
                if(valueTransformShop <= 0){

                }else{
                    setValueTransformShop(valueTransformShop - 22.4)
                    productListIconLeft.current.style.cursor = 'pointer'
                    productListIconRight.current.style.cursor = 'pointer'
                }
            }else{
                if(valueTransformShop >= 176){
                    productListIconRight.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformShop(valueTransformShop + 22.4)
                    productListIconLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            if(valueTransformShop <= 0){
                productListIconLeft.current.style.cursor = 'no-drop'
                productListIconRight.current.style.cursor = 'pointer'
            }
            productListList.current.style = `transform: translateX(-${valueTransformShop}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "30Shine Shop"
                    subTextTitle = "M??? ph???m nam cao c???p ch??nh h??ng"
                    textAll = 'Xem t???t c???'
                />
                <BackGroundImg 
                    classContainerImg = {home.newHairstyleContainerImg}
                    classImg = {home.newHairstyleImg}
                    img = {img30shineShop}
                />
                <div className={home.containerProductList}>
                    <ul ref={productListList} className={home.productList}>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct1}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>S??p vu???t t??c Glanzen Fox</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>229.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct2}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>G??m X???t T??c Lady Killer - Th??ch th???c n??n b???o hi???m</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>150.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct3}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>M??y s???y t??c Furin - M???nh g???p 10 m??y s???y b???n c??</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>389.000???</p>
                                <p className={home.productItemPriceSub}>399.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct4}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>M??y s???y t??c t???o ki???u chuy??n nghi???p Sharkway Limited 1600W</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>299.000???</p>
                                <p className={home.productItemPriceSub}>350.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct5}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>S???a R???a M???t Tr??m Tr?? Skin&Dr Tea tree - Kh???c Tinh C???a M???n - Tr??? M???n</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>219.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct6}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>S??p Kh??? M??i Old Spice</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>130.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct7}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>M???t N??? Th???i ?????c Carbon Dash Bubble</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>279.000???</p>
                                <p className={home.productItemPriceSub}>399.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct8}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>S???a R???a M???t Th???i ?????c Dabo Hydration for men </p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>98.000???</p>
                                <p className={home.productItemPriceSub}>115.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct9}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Serum D?????ng Da Dabo 7in1 Black Force - L??m ?????p d??? d??ng v???i 7 b?????c d?????ng da trong 1 s???n ph???m</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>345.000???</p>
                                <p className={home.productItemPriceSub}>955.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct10}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>S???a R???a M???t ACSYS Tr??? M???n - Phi??n B???n ?????c Bi???t</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>289.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct11}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>S???a R???a M???t Skin&Dr Active Charcoal - Than Ho???t T??nh 100g</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>179.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct12}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>S??p vu???t t??c Glanzen Original Clay - V?? ?????ch gi??? n???p t???i 12 gi???</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>229.000???</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                    </ul>
                    <i ref={productListIconLeft} onClick={()=>{handaleClickShop('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={productListIconRight} onClick={()=>{handaleClickShop('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const ShineMoment = ()=> {
        const [valueTransformMoment, setValueTransformMoment] = useState(0)
        const allMomentList = useRef()
        const iconMomentListLeft = useRef()
        const iconMomentListRight = useRef()

        function handaleMomentClick(value) {
            if(value == 'left'){
                if(valueTransformMoment <= 0){

                }else{
                    setValueTransformMoment(valueTransformMoment - 30)
                    iconMomentListLeft.current.style.cursor = 'pointer'
                    iconMomentListRight.current.style.cursor = 'pointer'
                }
            }else{
                if(valueTransformMoment >= 200){
                    iconMomentListRight.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformMoment(valueTransformMoment + 30)
                    iconMomentListLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            if(valueTransformMoment <= 0){
                iconMomentListLeft.current.style.cursor = 'no-drop'
                iconMomentListRight.current.style.cursor = 'pointer'
            }
            allMomentList.current.style = `transform: translateX(-${valueTransformMoment}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Shine Moment"
                    subTextTitle = "C??ng lan t???a nh???ng ph??t gi??y t???a s??ng t???i 30Shine"
                />
                <div className={home.containerMomentList}>
                <ul ref={allMomentList} className={home.momentList}>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment1} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment2} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment3} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment4} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment5} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment6} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment7} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment8} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment9} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment10} />
                        </div>
                    </li>
                </ul>
                <i ref={iconMomentListLeft} onClick={()=>handaleMomentClick('left')} className={home.momentIconLeft}><FaAngleLeft/></i>
                <i ref={iconMomentListRight} onClick={()=>handaleMomentClick('right')} className={home.momentIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Nearest = ()=> {
        return(
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "T??m 30shine g???n nh???t"
                    subTextTitle = "????? xe thu???n ti???n an to??n, b???n ????? d???n ???????ng chi ti???t (79 salon)"
                    textAll = 'Xem t???t c???'
                />
                <FourItem 
                    itemImg1 = {imgNearestHCM}
                    itemService1 = "TP.H??? Ch?? Minh"
                    priceList1 = "40 Salon"
                    itemImg2 = {imgNearestDN}
                    itemService2 = "H?? N???i"
                    priceList2 = "18 Salon"
                    itemImg3 = {imgNearestHN}
                    itemService3 = "???? N???ng"
                    priceList3 = "1 Salon"
                    itemImg4 = {imgNearestOther}
                    itemService4 = "Th??nh Ph??? Kh??c"
                    priceList4 = "20 Salon"
                    mgBt50
                />
            </div>
        )
    }

    return (
        <div>
            <Slider/>
            <Contact/>
            {/* <SliderTest/> */}
            <ExperienceAndTop1Service
                textTitle= 'Tr???i nghi???m d???ch v???'
                subTextTitle = 'Th?? gi??n 30 ph??t v?? b???n s??? t???a s??ng'
                textAll = 'Xem t???t c???'
                imgMain = {imgCombo1}
                itemImg1 = {imgSub1Combo1}
                itemImg2 = {imgSub2Combo1}
                itemImg3 = {imgSub3Combo1}
                itemImg4 = {imgSub4Combo1}
                itemService1 = 'C???t g???i massage'
                itemService2 = 'U???n nh???p kh???u H??n'
                itemService3 = 'Nh???m nh???p kh???u ??'
                itemService4 = 'D???ch v??? kh??c'
                priceList1 = 'B???ng gi?? 2022 (h???p d???n)'
                priceList2 = 'Ch??? t??? 287k'
                priceList3 = 'Ch??? t??? 206k'
                priceList4 = '4 d???ch v???'
                noneMTop
            />
            <ExperienceAndTop1Service
                textTitle= 'TOP 1 d???ch v??? ???????c y??u th??ch nh???t'
                subTextTitle = '30Shine - T??? h??o lan t???a phong c??ch u???n t??c H??n Qu???c t???i nam gi???i Vi???t'
                imgMain = {imgCombo2}
                itemImg1 = {imgSub1Combo2}
                itemImg2 = {imgSub2Combo2}
                itemImg3 = {imgSub3Combo2}
                itemImg4 = {imgSub4Combo2}
                itemService1 = 'Thu???c u???n cao c???p nh???t'
                itemService2 = 'Stylist tay ngh??? cao'
                itemService3 = '??a d???ng phong c??ch'
                itemService4 = 'C??ng ngh??? hi???n ?????i'
                priceList1 = '???????c sao H??n tin d??ng'
                priceList2 = '100% ??p d???ng c??ng ngh??? chuy???n giao...'
                priceList3 = 'Bao ?????p trai v???i m???i khu??n m???t'
                priceList4 = 'K???t h???p nhi???u th??nh ph???n d?????ng t??c'
            />
            <Part3Item
                textTitle = "L???ng nghe & t???n t??m"
                subTextTitle = "Th???u hi???u nhu c???u, h??? tr??? nhi???t t??nh"
                listenItemText1 = "N??i g?? v???i Stylist ????? anh c?? ki???u t??c ??ng ??"
                listenItemText2 = "Supporter th??n thi???n - ????n ti???p, l???ng nghe v?? h??? tr??? b???n m???i l??c"
                listenItemText3 = "Nh???ng c??u h???i th?????ng g???p"
                img1 = {imgListenAttentively1}
                img2 = {imgListenAttentively2}
                img3 = {imgListenAttentively3}
            />
            <ShiningJourney/>
            <Angels/>
            <ExperienceAndTop1Service
                textTitle= 'Kh??ng gian & thi???t b???'
                subTextTitle = 'N???p n??ng l?????ng v???i tr???i nghi???m kh??ng gian m???'
                imgMain = {imgStoreShop}
                itemImg1 = {imgSub1StoreShop}
                itemImg2 = {imgSub2StoreShop}
                itemImg3 = {imgSub3StoreShop}
                itemImg4 = {imgSub4StoreShop}
                itemService1 = 'Salon r???ng l???n d??? t??m'
                itemService2 = 'Trang thi???t b??? 30Shine SET???'
                itemService3 = 'L??m ch??? th???i gian'
                itemService4 = 'Tr???i nghi???m ??m nh???c'
                priceList1 = 'Kh??ng gian m??? & k???t n???i'
                priceList2 = 'N??ng c???p tr???i nghi???m l??m ?????p'
                priceList3 = '?????t l???ch & c??c ti???n ??ch 30Shine App'
                priceList4 = 'N??ng l?????ng & C???m x??c'
                storeIntroduction = 'Ph?? v??? gi???i h???n c???a m???t ti???m t??c truy???n th???ng, 30Shine mang ?????n kh??ng gian tr???i nghi???m ho??n to??n m???i v???i di???n t??ch l???n tr??n 200m2/ 16 gh??? c???t. T???t c??? ?????u ???????c ?????t t???i v??? tr?? d??? t??m tr??n nh???ng con ph??? l???n, h??a v??o cu???c s???ng s??i ?????ng c???a ng?????i ????n ??ng hi???n ?????i.'
                noZom
            />
            <InspirationalAnd30shine/>
            <NewHairstyle/>
            <Part3Item
                textTitle = "An t??m & Tin t?????ng"
                subTextTitle = "Cam k???t ph??ng d???ch t???i ??a & m??? ph???m ch??nh h??ng"
                listenItemText1 = "Ph??ng ch???ng Covid-19 - V?? s???c kho??? kh??ch h??ng, nh??n vi??n v?? c???ng ?????ng"
                listenItemText2 = "M??? ph???m & s???n ph???m - Cam k???t ch???t l?????ng - ?????m b???o xu???t x???"
                listenItemText3 = "B???o qu???n xe c???, ????? ?????c"
                img1 = {imgAssurance1}
                img2 = {imgAssurance2}
                img3 = {imgAssurance3}
            />
            <Endow/>
            <Shop30shine/>
            <Part3Item
                textTitle = "Shine Member"
                subTextTitle = "Tham gia ngay c??ng 700.000 h???i vi??n v???i quy???n l???i ?????c bi???t"
                listenItemText1 = "Silver/ Gold Member v?? h??ng ng??n quy???n l???i"
                img1 = {imgMemberShine}
            />
            <ShineMoment/>
            <ExperienceAndTop1Service
                textTitle= 'Cam k???t 30shine Care'
                subTextTitle = 'S??? h??i l??ng c???a anh l?? ??u ti??n h??ng ?????u c???a 30Shine'
                imgMain = {imgCareBanner}
                itemImg1 = {imgCare7Day}
                itemImg2 = {imgCare15Day}
                itemImg3 = {imgCare30Day}
                itemImg4 = {imgCareSale20}
                itemService1 = '7 ng??y'
                itemService2 = '30 ng??y'
                itemService3 = '15 ng??y'
                itemService4 = 'Gi???m 20%'
                priceList1 = 'Ch???nh s???a t??c mi???n ph??'
                priceList2 = '?????i/tr??? h??ng mi???n ph??'
                priceList3 = 'B???o h??nh u???n nh???m'
                priceList4 = 'N???u ch??? ?????i qu?? l??u'
                twoLineImageTitle
                twoLineImageTitleTagH2 ='V?? CH???T L?????NG PH???C V??? L?? H??NG ?????U'
                twoLineImageTitleTagP = '??p d???ng t???i salon b???t k??? to??n h??? th???ng 30Shine'
            />
            <Nearest/>
            <Footer/>
        </div>
    )
} 
export default Home