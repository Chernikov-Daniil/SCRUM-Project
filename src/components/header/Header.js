import style from "./Header.module.css";
import img from "../../images/Brend_4.png";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Form } from "../Form";
import { useState } from "react";
import { CopyLayout } from "../copyLayout/CopyLayout";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../store/form/actions";
import imgMobil from "../../images/mobilV.png"

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (date) => {
    dispatch(getForm(date));
    navigate("layout/hotels");
  };
  return (
    <>
      <div className={style.wrap}>
        <section className={style.section}>
          <img className={style.logo} src={img} alt="brend" />
          <div className={style.wrapper}>
          <Button
                component={Link}
                to="layout/register"
                href="#"
                color="secondary"
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  minWidth: 150,
                  backgroundColor: "#fbf9fc",
                  opacity: 0.8,
                  marginRight: 1,
                  borderRadius: 2,
                }}
              >
                Регистрация
              </Button>
              <Button
                component={Link}
                to="layout/login"
                href="#"
                color="secondary"
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  minWidth: 150,
                  backgroundColor: "#fbf9fc",
                  opacity: 0.8,
                  marginRight: 15,
                  borderRadius: 2,
                }}
              >
                Войти
              </Button>
            <Button
              component={Link}
              variant="contained"
              to="layout/private"
              color="secondary"
              sx={{ borderRadius: 3, marginRight: 15, bgcolor: "#b91bf8" }}
            >
              Личный кабинет
            </Button>
            {/*<Button
              component={Link}
              variant="contained"
              to="layout"
              color="secondary"
              sx={{ borderRadius: 3, marginRight: 15, bgcolor: "#b91bf8" }}
            >
              Войти
            </Button>
            <Button
              href="#text-buttons"
              color="secondary"
              variant="contained"
              sx={{ borderRadius: 3, marginRight: 15, bgcolor: "#b91bf8" }}
            >
              Регистрация
            </Button>*/}
            <img className={style.logoMobil} src={imgMobil} alt="brend" />
          </div>
          <div className={style.formMain}>
            <Form onSubmit={handleSubmit} />
          </div>
          <div className={style.wrp}>
            <p className={style.text}>
              Чтобы изменить мир, надо его увидеть...{" "}
            </p>
            <Link to="layout" className={style.button}>
              Войти
            </Link>
            {/* <img src={svg} alt="войти" className={style.svg} />*/}
          </div>
        </section>
        <Outlet></Outlet>
      </div>
      <div>
        <CopyLayout></CopyLayout>
      </div>
    </>
  );
};
