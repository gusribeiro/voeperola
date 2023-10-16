"use client";

import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";
import axios from "axios";

import style from "@/stylesheet/home.module.css";
import { Button, Header } from "@/components";
import { classNames } from "@/utils";

interface IProps {
  params: {
    locale: "en" | "pt";
  };
}

const Home = ({ params }: IProps) => {
  const token = process.env.NEWSKY_API_TOKEN;
  const { locale } = params;
  const [hero, setHero] = useState<string>("");

  const t = useTranslations("home");

  useEffect(() => {
    (async () => {
      const {
        data: { hero },
      } = await axios.get("/api/hero");
      setHero(hero);
    })();
  }, []);

  return (
    <div className={style.home}>
      <Header language={locale} />

      <main className={style.main}>
        <header
          className={style.hero}
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <h1>{t("welcome")}</h1>
          <p>{t("main")}</p>
          <Button type="button" variant="primary">
            {t("joinButton")}
          </Button>
        </header>

        <div className={style.body}>
          <div className={style.wrap}>
            <section className={classNames(style.section, style.liveNow)}>
              <h1>{t("live")}</h1>

              <object
                data={`https://newsky.app/airline/public/map?style=light&token=${token}`}
              />
            </section>

            <section className={classNames(style.section, style.partners)}>
              <h1>{t("partners")}</h1>
              <ul>
                <li>
                  <img
                    src="/images/partners/ivao.png"
                    width={200}
                    height={100}
                    alt="IVAO"
                  />
                </li>
                {/* <li>
                  <img
                    src="/images/partners/vatsim.png"
                    width={200}
                    height={100}
                    alt="VATSIM"
                  />
                </li> */}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className={style.footer}>&copy; 2023 voeperola.com</footer>
    </div>
  );
};

export default Home;
