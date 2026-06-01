import React from "react";
import style from "./Input.module.css";
import Button from "./Button"; // ← Add this import
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import image from "../assets/formpic.png";
function Input() {
  return (
    <section className={style.section}>
      <div className={style.content}>
        <h1>Get in Touch With Us</h1>
        <p>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>

        <div className={style.button}>
          <Button text="Get Started" icon={<MdMessage />} />
          <Button text="Call Me" icon={<FaPhoneAlt />} />
        </div>
        <div className={style.emailButton}>
          <Button text="Email me" icon={<FaEnvelope />} />
        </div>

        <form className={style.form}>
          <input type="text" placeholder="Your Name" className={style.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={style.input}
          />
          <textarea
            placeholder="Your Message"
            className={`${style.input} ${style.textarea}`}
          ></textarea>
          <Button text="Submit" icon={<MdMessage />} />
        </form>
      </div>
      <div className={style.image}>
        <img src={image} alt="Form Illustration" className={style.formImage} />
      </div>
    </section>
  );
}

export default Input;
