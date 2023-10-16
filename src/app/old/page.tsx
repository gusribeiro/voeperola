"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

import style from "@/stylesheet/home.module.css";
import { Button } from "@/components";
import { classNames } from "@/utils";

const Home = () => {
  const token = process.env.NEWSKY_API_TOKEN;
  const [hero, setHero] = useState<string>("");

  useEffect(() => {
    (async () => {
      const {
        data: { path },
      } = await axios.get("/api/hero");
      setHero(path);

      // const { data } = await axios.get("/api/flights/ongoing");
      // setFlights(data);
    })();
  }, []);

  return (
    <div className={style.home}>
      <header className={style.header}>
        <div className={style.menu}>
          <a href="/">Voe Perola</a>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              {/* <li>
                <a href="/">About</a>
              </li> */}
              {/* <li>
                <a href="/">Register</a>
              </li> */}
              {/* <li>
                <a href="/">Log In</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>

      <main className={style.main}>
        <header
          className={style.hero}
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolor
            voluptatum? Asperiores nam officia unde, quod doloremque similique
            quas, dolorem magnam excepturi iusto consectetur nemo! Aspernatur
            deserunt asperiores eos molestiae?
          </p>
          <Button type="button" variant="primary">
            Fly with us!
          </Button>
        </header>

        <div className={style.body}>
          <div className={style.wrap}>
            <section className={classNames(style.section, style.liveNow)}>
              <h1>Live Now</h1>
              
              <object
                data={`https://newsky.app/airline/public/map?style=light&token=${token}`}
              />
            </section>

            <section className={classNames(style.section, style.partners)}>
              <h1>Partners</h1>
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