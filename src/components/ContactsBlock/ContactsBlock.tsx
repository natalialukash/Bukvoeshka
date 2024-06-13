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
                <p>+7 (499) 377-37-37</p>
              </div>
            </div>
            <div className={classes.containerContact}>
              <div>
                <img src="./assets/icons/email.svg" alt="email" />
              </div>
              <div className={classes.containerText}>
                <p>Написать письмо:</p>
                <p>bukvoeshka-centr@yandex.ru</p>
              </div>
            </div>
            <div>
              <div className={classes.containerText}>Связаться с нами в социальных сетях</div>
              <div>
                <img className={classes.containerIcon} src="./assets/icons/telegram.svg" alt="telegram" />
                <img className={classes.containerIcon} src="./assets/icons/instagram.svg" alt="telegram" />
                <img className={classes.containerIcon} src="./assets/icons/whatsup.svg" alt="telegram" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsBlock;
