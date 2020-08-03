import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/15279481?s=460&u=9807bda4999f308a1f56e10842e2aca853f112a4&v=4" alt="Lucas Becker"/>
        <div>
          <strong>Lucas Becker</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de física avançada.
        <br /> <br />
        Apaixonado por quedas livres em laboratório e por mudar a vida das pessoas através de experiências.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 25,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;