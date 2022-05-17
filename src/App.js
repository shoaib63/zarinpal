import { useState, useRef } from 'react';


import './App.css';
import './fonts.css'



import logo from './images/logo.svg'
import downArrow from "./images/down-arrow-svgrepo-com.svg"
import hamburger from "./images/hamburger.svg"
import cross from './images/cross.svg'
import arrow from './images/arrow.svg'
import home from "./images/home.svg"
import pg from './images/pg.svg';
import zarincard from './images/zarincard.svg';
import zarinLink from './images/social-image.svg'
import payout from "./images/payout.svg"
import verifiedIcon from './images/verifiedIcon.svg'
import splite from './images/splite.svg'
import support from "./images/support.svg"
import instagram from "./images/instagram.svg"
import telegram from "./images/telegram.svg"
import twitter from "./images/twitter.svg"
import linkedin from "./images/linkedin.svg"
import aparat from "./images/aparat.svg"
import bell from "./images/bell.svg"


function App() {

  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showMoreItem, setShowMoreItem] = useState(false);


  const hamburgerListener = () => {
    setHamburgerMenu(true);
  }

  const crossListener = () => {
    setHamburgerMenu(false);
  }




  return (
    <div className="body">
      <header>
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul className='header-ul'>
            <li className='more-menu' id='show-product-menu'>
              <a onMouseEnter={() => setShowProducts(true)} onMouseLeave={() => setShowProducts(false)} href="#">محصولات</a>
              <img src={downArrow} alt="DownArrow" />
              {showProducts && <div className='product-menu'>
                <div>
                  <a href="#">
                    <p>درگاه پرداخت</p>
                    <p>مهندسی شده برای فروش بیشتر</p>
                  </a>
                  <a href="#">
                    <p>زرین لینک</p>
                    <p>لینک پرداخت در شبکه های اجتماعی</p>
                  </a>
                  <a href="#">
                    <p>زرین پلاس</p>
                    <p>ابزار هوشمند سوددهی</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>زرین کارت</p>
                    <p>طلایی ترین کارت بانکی</p>
                  </a>
                  <a href="#">
                    <p>تسهیم</p>
                    <p>درگاه پرداخت اشتراکی</p>
                  </a>
                </div>
              </div>}

            </li>
            <li>
              <a href="#">تعرفه ها</a>
            </li>
            <li>
              <a href="#">توسعه  دهنده ها</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>

            <li className='more-menu' id='show-more-menu'>
              <a onMouseEnter={() => setShowMoreItem(true)} onMouseLeave={() => setShowMoreItem(false)} href="#">بیشتر</a>
              <img src={downArrow} alt="DownArrow" />
              {showMoreItem &&
                <ul>
                  <li><a href="#">وبلاگ</a></li>
                  <li><a href="#">دریافت شماره شبا</a></li>
                  <li><a href="#">سوالات متداول</a></li>
                  <li><a href="#">اپلیکیشن</a></li>
                  <li><a href="#">زرین بین</a></li>
                </ul>}

            </li>

            <li>
              <a href="#"> ‍‍‍زرین پال من</a>
            </li>

          </ul>
        </nav>
        <img onClick={hamburgerListener} src={hamburger} alt="hamburger" className='hamburger-icon' />
        <div className={hamburgerMenu ? "hamburger-menu show-hamburger-menu" : 'hamburger-menu'}>
          <div onClick={crossListener} className='cross-icon'>
            <img src={cross} alt="" />
          </div>
          <div className='hamburger-menu-items'>
            <ul>
              <li>
                <a href="#">تعرفه ها</a>
              </li>
              <li>
                <a href="#">اپلیکیشن</a>
              </li>
              <div></div>
              <li>
                <a href="#">سوالات متداول</a>
              </li>
              <li>
                <a href="#">محصولات</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </div>
          <div className='more-item'>
            <a href="#">زرین پال من</a>
            <img src={arrow} alt="" />
          </div>
        </div>
      </header>

      <main>
        <div className='banner'>
          <div className='banner-text'>
            <h3>بیش از ۱۱ سال </h3>
            <h3>انتخاب مطمئن کسب و کار های آنلاین</h3>
            <p>
              زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.
            </p>
            <div className='banner-button'>
              <a className='register' href="#">ثبت نام</a>
              <a className='login' href="#">ورود</a>
            </div>
          </div>
          <div className='banner-image' >
            <img src={home} alt="" />
          </div>
        </div>
        <div className='go-down'>
          <div></div>
          <img src={downArrow} alt="" />
        </div>
      </main>

      <section className='online-payment'>
        <div>
          <img src={pg} className="section-image" alt="" />
        </div>
        <div className='section-text'>
          <h2>درگاه پرداخت اینترنتی</h2>
          <h3>مهندسی شده برای رشد و فروش بیشتر</h3>
          <p>
          درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی (PSPها) ،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود.
          </p>
          <div className='section-links'>
            <a href="#" className='first-button'>ساخت درگاه پرداخت</a>
            <a href="#" className='second-button'>
              بیشتر بدانید
              <img src={arrow} />
            </a>

          </div>
        </div>

      </section>

      <section className='online-payment'>

        <div className='section-text'>
          <h2>زرین لینک</h2>
          <h3>پرداخت در شبکه‌های اجتماعی</h3>
          <p>
            زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی مانند اینستاگرام، تلگرام یا وب‌سایت می‌شود.
          </p>
          <div className='section-links'>
            <a href="#" className='first-button'>ساخت زرین لینک</a>
            <a href="#" className='second-button'>
              بیشتر بدانید
              <img src={arrow} />
            </a>

          </div>
        </div>
        <div>
          <img src={zarinLink} className="section-image" alt="" />
        </div>

      </section>


      <section className='online-payment'>
        <div>
          <img src={zarincard} className="section-image" alt="" />
        </div>
        <div className='section-text'>
          <h2>زرین‌کارت</h2>
          <h3>طلایی‌ترین کارتِ بانکی</h3>
          <p>
            زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.
          </p>
          <div className='section-links'>
            <a href="#" className='first-button'>درخواست زرین کارت</a>
            <a href="#" className='second-button'>
              بیشتر بدانید
              <img src={arrow} />
            </a>

          </div>
        </div>
      </section>


      <section className='online-payment'>

        <div className='section-text'>
          <h2>تسهیم</h2>
          <h3>درگاه پرداخت اشتراکی</h3>
          <p>
            تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود.          </p>
          <div className='section-links'>
            <a href="#" className='first-button'>درخواست فعال سازی تسهیم</a>
            <a href="#" className='second-button'>
              بیشتر بدانید
              <img src={arrow} />
            </a>

          </div>
        </div>
        <div>
          <img src={payout} className="section-image" alt="" />
        </div>

      </section>

      <section className='online-payment'>
        <div>
          <img src={zarincard} className="section-image" alt="" />
        </div>
        <div className='section-text'>
          <h2>زرین پلاس</h2>
          <h3>ابزار هوشمند سوددهی</h3>
          <p>
            زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.
          </p>
          <div className='section-links'>
            <a href="#" className='first-button'>پیوستن به زرین پلاس</a>
            <a href="#" className='second-button'>
              بیشتر بدانید
              <img src={arrow} />
            </a>

          </div>
        </div>
      </section>


      <article class="attributes">
        <div class="definition">
          <h3>ویژگی‌های درگاه پرداخت زرین‌پال</h3>
          <p>
            درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر
            وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای
            هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.
          </p>
        </div>
        <div class="items">
          <div class="item first-item">
            <div>
              <img src={verifiedIcon} />
              <h4>ضمانتِ پرداخت</h4>
            </div>
            <p>
              درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را
              به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.
            </p>
          </div>
          <div class="item second-item">
            <div>
              <img src={splite} />
              <h4>مسیردهی هوشمند</h4>
            </div>
            <p>
              استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود
              کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق
              هدایت شوند.
            </p>
          </div>
          <div class="item third-item">
            <div>
              <img src={support} />
              <h4>پشتیبانی ۲۴/۷</h4>
            </div>
            <p>
              هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و
              راهنمایی به کاربران هستیم.
            </p>
          </div>
          <div class="item fourth-item">
            <div>
              <img src={support} />
              <h4>امنیتِ پرداخت</h4>
            </div>
            <p>
              درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام
              پرداخت‌‌های اینترنتی آن‌هاست.
            </p>
          </div>
        </div>
      </article>

      <div className='start-box'>
        <h4>به خانواده ی یک میلیونی زرین پال بپیوندید</h4>
        <p>
          یک ماه رایگان، هدیه ی عضویت زرین پال به شما
        </p>
        <a href="#">شروع کنید</a>
      </div>

      <div className='support'>
        <div className='support-number'>
                <p>پشتیبانی ۲۴ ساعته، ۷ روز هفته<span id='line'>|</span> شماره تماس: <span className='phone-number'>۴۱۲۳۹-۰۲۱</span></p>
        </div>
        <div>
        <div className='support-request'>
          <p>درخواست پشتیبانی</p>
          <img src={arrow} alt="" />
        </div>

        </div>
      </div>


      <footer>
      <div class="footer-links">
        <div>
          <p>محصولات</p>
          <ul>
            <li><a href="#">زرین‌لینک</a></li>
            <li><a href="#">درگاه پرداخت اینترنتی</a></li>
            <li><a href="#">زرین‌کارت</a></li>
            <li><a href="#">تسهیم</a></li>
          </ul>
        </div>
        <div>
          <p>آشنایی با زرین‌پال</p>
          <ul>
            <li><a href="#">تعرفه ها</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">سوالات متداول</a></li>
            <li><a href="#">همکاری در فروش</a></li>
          </ul>
        </div>
        <div>
          <p>ارتباط بیشتر</p>
          <ul>
            <li><a href="#">تماس با ما</a></li>
            <li><a href="#">قوانین و مقررات</a></li>
            <li><a href="#">حریم خصوصی</a></li>
          </ul>
        </div>
        <div>
          <p>منابع</p>
          <ul>
            <li><a href="#">دریافت شماره شبا</a></li>
            <li><a href="#">زرین‌بین</a></li>
            <li><a href="#">توسعه دهندگان</a></li>
            <li><a href="#">وبلاگ</a></li>
          </ul>
        </div>
      </div>
      <div class="social-media">
        <p>زرین‌پال در شبکه های اجتماعی</p>
        <div>
          <a><img src={instagram} /></a>
          <a><img src={twitter} /></a>
          <a><img src={telegram} /></a>
          <a><img src={linkedin} /></a>
          <a><img src={aparat} /></a>
        </div>
      </div>
    </footer>
    <div class="bell">
      <img src={bell} />
    </div>



    </div>
  );
}

export default App;
