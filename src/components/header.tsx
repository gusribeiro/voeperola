import { useTranslations } from "next-intl";
import Link from "next/link";

import style from "@/stylesheet/components/header.module.css";

interface IProps {
  language: "en" | "pt";
}

const Header = ({ language }: IProps) => {
  const t = useTranslations("header");

  const handleLocale = (locale: string) => {
    localStorage.setItem("locale", locale);
  };

  return (
    <header className={style.header}>
      <div className={style.menu}>
        <a href="/">{t("siteName")}</a>
        <nav>
          <ul>
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li>
              <Link href="/register">{t("register")}</Link>
            </li>
            <li>
              <Link href="/login">{t("logIn")}</Link>
            </li>
            <li className={style.locale}>
              <Link href="/en" onClick={() => handleLocale("en")}>
                <img
                  src="/images/svg/flag-us.svg"
                  width={20}
                  height={15}
                  alt="change language to en-us"
                  className={language === "en" ? style.activeLocale : ""}
                />
              </Link>
              <Link href="/pt" onClick={() => handleLocale("pt")}>
                <img
                  src="/images/svg/flag-br.svg"
                  width={20}
                  height={15}
                  alt="change language to pt-br"
                  className={language === "pt" ? style.activeLocale : ""}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
