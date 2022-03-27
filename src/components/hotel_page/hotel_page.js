import React from 'react';
import style from "./Hotel.module.css";
import img from "../../images/hotel.jpg";
import img_logo from "../../images/Brend_4.png";
import {Feedback} from "../feedback/feedback"
import { Footer } from '../footer/Footer';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

let HotelPage = () => {
    return (
        <><div className={style.wrap}>
            <section className={style.section}>
                <img src={img_logo} alt="brend" />
                <div className={style.wrapper}>
                    <Button
                        component={Link}
                        to="layout"
                        color="secondary"
                        sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            minWidth: 100,
                            backgroundColor: "#e7f1f1",
                            opacity: 0.6,
                            marginRight: 15,
                            borderRadius: 10,
                        }}
                    >
                        Войти
                    </Button>
                    <Button
                        href="#"
                        color="secondary"
                        sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            minWidth: 200,
                            backgroundColor: "#e7f1f1",
                            opacity: 0.6,
                            marginRight: 15,
                            borderRadius: 10,
                        }}
                    >
                        Регистрация
                    </Button>
                </div>
            </section>
        </div><div className={style.hotel}>
                <h3 className={style.name}>Radisson Blu Paradise Resort & Spa</h3>
                <img className={style.img} src={img} alt="Hotel" />
                <h2 className={style.desc}>Описание</h2>
                <p className={style.paragraph}>Sunt aliqua irure consequat reprehenderit minim nulla non veniam aliquip exercitation nostrud.Commodo dolore laborum excepteur officia non nisi tempor consectetur qui mollit officia incididunt.Ex quis occaecat dolor adipisicing id anim.</p>
                <h2 className={style.desc}>Отзывы пользователей</h2>
                <div className={style.feedback}><Feedback></Feedback></div>
                <Footer></Footer>
            </div></>
    )
  }

  export default HotelPage;