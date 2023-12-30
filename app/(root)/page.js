import Hero from "./_components/hero/hero";
import GameDetails from "./_components/game-details/game-details";
import SportsMedia from "./_components/sports-media/sports-media";
import Challenge from "./_components/challenge/challenge";
import ThirtyChallenge from "./_components/thirty-challenge/thirty-challenge";
import Contact from "./_components/contact/contact";
import Dominate from "./_components/dominate/dominate";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.overflowHidden}>
        <Hero />
        <GameDetails />
        <SportsMedia />
        <Challenge />
        <ThirtyChallenge />
        <Contact />
        <Dominate />
      </main>
    </>
  );
}
