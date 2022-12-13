import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { RxEnvelopeClosed } from 'react-icons/rx'


function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
            <svg className='house' width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.399994 30.0004V11.4004L11.4 0.400391L22.4 11.4004V30.0004H0.399994ZM2.64999 27.7504H9.99999V22.4004H12.8V27.7504H20.1V12.3504L11.4 3.65039L2.64999 12.3504V27.7504ZM9.99999 16.4004V13.6004H12.8V16.4004H9.99999ZM26.75 30.0004V9.95039L17.25 0.400391H20.75L29 8.70039V30.0004H26.75ZM33.35 30.0004V7.20039L26.6 0.400391H30.1L35.6 5.95039V30.0004H33.35ZM2.64999 27.7504H20.1H2.64999Z" fill="white"/>
            </svg>
            <svg className='logo' width="72" height="19" viewBox="0 0 72 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7059 12.3261C11.7059 14.5744 11.1864 16.2487 10.1474 17.3491C9.10833 18.4416 7.67312 18.9879 5.84174 18.9879C4.01783 18.9879 2.58636 18.4416 1.54733 17.3491C0.515777 16.2487 0 14.5744 0 12.3261C0 11.9936 0 11.6413 0 11.2692C0 10.8892 0 10.4934 0 10.0817V1.22311H2.43312V10.3667C2.43312 10.7467 2.43312 11.099 2.43312 11.4236C2.43312 11.7482 2.43312 12.045 2.43312 12.3142C2.43312 13.8975 2.71718 15.0415 3.28528 15.746C3.85338 16.4427 4.70553 16.791 5.84174 16.791C6.98542 16.791 7.84131 16.4427 8.40941 15.746C8.98499 15.0415 9.27278 13.8975 9.27278 12.3142V1.22311H11.7059V12.3261Z" fill="white"/>
                <path d="M23.2936 18.7385V12.9198C23.2936 12.5794 23.2936 12.2905 23.2936 12.053C23.2936 11.8155 23.2936 11.5938 23.2936 11.388C23.2936 10.7705 23.2039 10.2282 23.0245 9.76111C22.8451 9.28612 22.5498 8.918 22.1387 8.65675C21.7275 8.38759 21.1781 8.25301 20.4904 8.25301C19.8849 8.25301 19.3355 8.41134 18.8422 8.728C18.3563 9.04466 17.9676 9.47612 17.6761 10.0224C17.392 10.5607 17.25 11.1742 17.25 11.863L16.2072 11.3167C16.2072 10.2955 16.4352 9.38112 16.8912 8.57363C17.3472 7.75822 17.9564 7.11302 18.7188 6.63803C19.4888 6.16304 20.3297 5.92554 21.2417 5.92554C22.1835 5.92554 22.9871 6.1195 23.6524 6.50741C24.3251 6.8874 24.8371 7.43365 25.1885 8.14614C25.5473 8.85071 25.7267 9.69382 25.7267 10.6755C25.7267 11.0396 25.7267 11.4434 25.7267 11.8867C25.7267 12.33 25.7267 12.7575 25.7267 13.1692V18.7385H23.2936ZM14.8169 18.7385V6.12741H17.25V18.7385H14.8169Z" fill="white"/>
                <path d="M28.8224 18.7385V6.12741H31.2219V18.7385H28.8224ZM30.0333 3.51495C29.6147 3.51495 29.2522 3.3962 28.9457 3.15871C28.6467 2.91329 28.4972 2.57684 28.4972 2.14934C28.4972 1.72977 28.6467 1.40123 28.9457 1.16373C29.2522 0.918321 29.6147 0.795614 30.0333 0.795614C30.4445 0.795614 30.7995 0.918321 31.0985 1.16373C31.405 1.40123 31.5583 1.72977 31.5583 2.14934C31.5583 2.57684 31.405 2.91329 31.0985 3.15871C30.7995 3.3962 30.4445 3.51495 30.0333 3.51495Z" fill="white"/>
                <path d="M34.3822 18.7385V1.22311H36.8154V17.9547L35.7165 16.5535H43.2177V18.7385H34.3822Z" fill="white"/>
                <path d="M45.7726 18.7385V6.12741H48.1721V18.7385H45.7726ZM46.9836 3.51495C46.565 3.51495 46.2024 3.3962 45.896 3.15871C45.597 2.91329 45.4475 2.57684 45.4475 2.14934C45.4475 1.72977 45.597 1.40123 45.896 1.16373C46.2024 0.918321 46.565 0.795614 46.9836 0.795614C47.3947 0.795614 47.7498 0.918321 48.0488 1.16373C48.3552 1.40123 48.5085 1.72977 48.5085 2.14934C48.5085 2.57684 48.3552 2.91329 48.0488 3.15871C47.7498 3.3962 47.3947 3.51495 46.9836 3.51495Z" fill="white"/>
                <path d="M52.8798 18.7385V8.26488H50.3121V6.12741H52.8798V4.74993C52.8798 4.10077 52.9545 3.51891 53.104 3.00433C53.261 2.48976 53.4778 2.04643 53.7544 1.67435C54.0309 1.29436 54.3561 0.981653 54.7299 0.73624C55.1111 0.490827 55.526 0.308746 55.9745 0.189998C56.4304 0.0633326 56.9051 0 57.3985 0C57.8021 0 58.1161 0.0277078 58.3403 0.0831235C58.572 0.130623 58.7253 0.174164 58.8 0.213747V2.36309C58.7103 2.33143 58.5571 2.2958 58.3403 2.25622C58.1235 2.21664 57.8918 2.19684 57.6451 2.19684C57.1667 2.19684 56.7743 2.27205 56.4678 2.42247C56.1613 2.57288 55.9221 2.78267 55.7502 3.05183C55.5783 3.31308 55.4587 3.61787 55.3914 3.96619C55.3316 4.30661 55.3017 4.67077 55.3017 5.05868V6.12741H58.6879V8.26488H55.3017V18.7385H52.8798Z" fill="white"/>
                <path d="M61.0341 13.3354V11.3286H69.8023L69.466 11.9223C69.466 11.8748 69.466 11.8273 69.466 11.7798C69.466 11.7244 69.466 11.6769 69.466 11.6373C69.466 10.9961 69.3351 10.4063 69.0735 9.86799C68.8119 9.32174 68.4195 8.88633 67.8962 8.56175C67.3804 8.22926 66.7338 8.06301 65.9564 8.06301C65.179 8.06301 64.4951 8.24113 63.9045 8.59738C63.3215 8.94571 62.8655 9.44445 62.5366 10.0936C62.2152 10.7348 62.0545 11.5067 62.0545 12.4092C62.0545 13.3275 62.2114 14.1192 62.5254 14.7842C62.8393 15.4412 63.2916 15.9479 63.8821 16.3041C64.4726 16.6604 65.179 16.8385 66.0013 16.8385C66.5769 16.8385 67.074 16.7791 67.4926 16.6604C67.9186 16.5337 68.2662 16.3675 68.5353 16.1616C68.8119 15.9558 69.0212 15.7342 69.1632 15.4967C69.3053 15.2512 69.3875 15.0098 69.4099 14.7723H71.8318C71.787 15.2869 71.6262 15.7975 71.3497 16.3041C71.0806 16.8029 70.6956 17.2581 70.1948 17.6698C69.7014 18.0735 69.0959 18.3981 68.3783 18.6435C67.6682 18.881 66.8497 18.9997 65.9228 18.9997C64.6819 18.9997 63.5943 18.7227 62.6599 18.1685C61.7256 17.6143 60.9967 16.8464 60.4735 15.8648C59.9502 14.8752 59.6886 13.7431 59.6886 12.4686C59.6886 11.1703 59.954 10.0303 60.4847 9.04862C61.0154 8.06697 61.7517 7.30302 62.6936 6.75678C63.6354 6.20262 64.7156 5.92554 65.934 5.92554C67.1749 5.92554 68.2475 6.20262 69.152 6.75678C70.064 7.31094 70.7666 8.07489 71.26 9.04862C71.7533 10.0224 72 11.1426 72 12.4092C72 12.5596 71.9963 12.7338 71.9888 12.9317C71.9813 13.1296 71.9701 13.2642 71.9551 13.3354H61.0341Z" fill="white"/>
            </svg>
        </div>
        <div className='icon-links'>
            <div className='shortlist-container'>
                <AiOutlineHeart className='heart'/>
                Shortlist
            </div>
            <div className='contact-container'>
                <RxEnvelopeClosed className='envelope'/>
                Contact Us
            </div>
        </div>  
    </div>
  )
}

export default Header