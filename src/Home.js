import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { Button } from "@material-ui/core";
import Suggestion from "./Suggestion";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__cards">
        <Card
          title="Esperienze online"
          image="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg"
          description="Attività uniche da fare insieme, organizzate da host di tutto il mondo."
        />
        <Card
          title="Spazi unici"
          image="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"
          description="Molto più che semplici spazi dove trascorrere la notte."
        />
        <Card
          title="Case intere"
          image="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg"
          description="Alloggi privati e confortevoli, con tanto spazio per amici e parenti."
        />
      </div>
      <div className="home__online-experiences">
        <div className="home__online-experiences__top">
          <div className="home__online-experiences__text">
            <h1>Esperienze online a Broadway</h1>
            <h4>
              Assisti a performance live interattive e partecipa a conversazioni
              con persone di Broadway e non solo. Tutto senza uscire di casa.
            </h4>
          </div>
          <Button
            style={{
              color: "white",
              border: "1px solid white",
              textTransform: "capitalize",
            }}
          >
            Esplora tutto
          </Button>
        </div>

        <div className="home__online-experiences__cards">
          <Card
            title="La quotidianità di una ballerina di Las Vegas"
            image="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=720"
            description=""
            textColor="white"
            style={{
              gridRow: "1 / span 2",
              backgroundColor: "rgb(34, 34, 34)",
            }}
          />
          <Card
            title="Amore, luce e serata di guarigione con Aisha Jackson"
            image="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg"
            description=""
            textColor="white"
            style={{ backgroundColor: "rgb(34, 34, 34)" }}
          />
          <Card
            title="Una notte di magia e mentalismo"
            image="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=480"
            description=""
            textColor="white"
            style={{ backgroundColor: "rgb(34, 34, 34)" }}
          />
          <Card
            title="Partecipa a un musical live"
            image="https://a0.muscache.com/im/pictures/d88db0e7-ef5b-49c6-ae07-af3525ac252f.jpg?im_w=720"
            description=""
            textColor="white"
            style={{
              gridColumn: "2 / span 3",
              backgroundColor: "rgb(34, 34, 34)",
            }}
          />
        </div>
      </div>
      <div className="home__suggestion">
        <Suggestion />
      </div>
    </div>
  );
};

export default Home;
