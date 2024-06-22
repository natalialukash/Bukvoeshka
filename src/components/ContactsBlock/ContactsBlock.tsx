import classes from "./ContactsBlock.module.scss";

const ContactsBlock = () => {
  return (
    <>
      <section className={classes.containerContactsBlock}>
        <div>
          <h2>Наши контакты</h2>
        </div>
        <div className={classes.containerContacts}>
          <div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad6ee1870aa6456445a2cc16fd822b3c4e2e644f8ffc7a71472c7ab88d28b2abf&amp;source=constructor"
              width="797"
              height="674"
            ></iframe>
          </div>
          <div className={classes.containerContactInformation}>
            <div className={classes.containerContact}>
              <div>
                <img src="./assets/icons/location.svg" alt="location" />
              </div>
              <div className={classes.containerText}>
                <p>Мы находимся по адресу:</p>
                <p>г. Казань, Шоссейная ул., д. 20</p>
              </div>
            </div>
            <div className={classes.containerContact}>
              <div>
                <img src="./assets/icons/clock.svg" alt="clock" />
              </div>
              <div className={classes.containerText}>
                <p>Режим работы:</p>
                <p>Пн-Пт 9:00-21:00, Сб-Вс 10:00-18:00</p>
              </div>
            </div>
            <div className={classes.containerContact}>
              <div>
                <img src="./assets/icons/mobile_phone.svg" alt="mobile_phone" />
              </div>
              <div className={classes.containerText}>
                <p>Позвонить:</p>
                <p className="phone"><a href="tel:+74993773737">+7 (499) 377-37-37</a></p>
              </div>
            </div>
            <div className={classes.containerContact}>
              <div>
                <img src="./assets/icons/email.svg" alt="email" />
              </div>
              <div className={classes.containerText}>
                <p>Написать письмо:</p>
                <p className="mailto"><a href="mailto:bukvoeshka-centr@yandex.ru">bukvoeshka-centr@yandex.ru</a></p>
              </div>
            </div>
            <div>
              <div className={classes.containerText}><span>Связаться с нами в социальных сетях:</span></div>
              <div className={classes.social}>
              <div className="social telegram">
	<a href="https://t.me/bukvoeshka_bot" target="_blank">
		<svg role="img" viewBox="0 0 448 512">
			<path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/>
		</svg>
	</a>
</div>
<div className="social vk">
	<a href="#" target="_blank">
		<svg role="img" viewBox="0 0 576 512">
			<path fill="currentColor" d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/>
		</svg>
	</a>
</div>
<div className="social whatsapp">
	<a href="#" target="_blank">
		<svg role="img" viewBox="0 0 448 512">
			<path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
		</svg>
	</a>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsBlock;
