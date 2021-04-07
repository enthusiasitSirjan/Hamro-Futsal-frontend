import React from "react";
import { Row, Col, Card } from "antd";
import futsalnepal1 from "../assets/futsalnepal1.jpg";
import nepalfutsal from "../assets/Gallery/fut3.jpg";

const Futsalnepal = () => {
  return (
    <>
      <div className="futsal-nepal">
        <h1>Futsal in Nepal</h1>
        <Row>
          <Col
            className="futsal-image"
            xs={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 9 }}
            sm={{ span: 24 }}
          >
            <img src={futsalnepal1} alt="futsal-nepal"></img>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 10 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Card hoverable className="futsal-1">
              <h2>What is Futsal?</h2>
              <p>
                Futsal is a football game played by two teams composed of five
                persons each. The roots of Futsal dates back to 1930 in Uruguay,
                where the laws of football were changed to allow the players a
                chance to play the game in their own room and on their own
                terms. The first documented rules of the futsal were a
                combination of rules of football, basketball, handball, and
                water polo. Over the years, sport has evolved, the rules have
                been established and distributed broadly across 170 countries.
                <br />
                Futsal enables players to settle on better choices and the
                diversion features this where I don’t figure football can do
                likewise. The following principle advantage for me must play
                underweight. In futsal, groups need to buckle down as a four and
                a person to play underweight, and this implies getting casual
                even in dilemmas, which for me is what’s missing now and then in
                the 11 a side diversion. It is difficult to prepare predominant
                reaction of frenzy in dilemmas where they have not generally
                worked or been presented to it. Nonetheless, if adolescents
                growing up are presented to these dilemmas under rivalry then
                for me they will probably build up an overwhelming reaction like
                the Brazilians or Spanish where they comprehend that on the off
                chance that they are squeezed there must be space elsewhere.
              </p>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col
            className="futsal-image-2"
            xs={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 9 }}
            sm={{ span: 24 }}
          >
            <img
              src={nepalfutsal}
              style={{
                maxWidth: "652px",
              }}
              alt="futsal-nepal-2"
            ></img>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 10 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Card hoverable className="futsal-1">
              <h2>Futsal in Nepal</h2>
              <p>
                More than 1,000 Nepalese are found playing futsal on a given
                day, resulting in 365,000 Nepalese in a year through
                extrapolation. There are most futsal players in futsal who will
                not be participating in any form of football. The effect of
                sufficient futsal facilities in Nepal has also prompted a big
                global youth football development initiative to explore the
                extension of their organization into Nepal. For their fun, one
                can find these people kicking ball. They are heavily influenced
                by the game. Teenagers are also designing techniques which on
                decrepit fields would not be feasible. Without some form of
                political or beau acratic interference, the agile and inventive
                minds of futsal pioneers have promoted the game of football and
                opened new arenas. Dozens of additional futsal facilities are on
                the brink of being constructed around the nation. This is due to
                interest in the game, high occupancy, sustainability and fans of
                football and madness to win the game. In Nepal, several futsal
                organized in Nepal have made it possible to play futsal at
                various rates. Futsal has developed partnership and incorporated
                the house game idea. Employees, teachers, football fanatics have
                had the chance to touch a game in the artificial turf carpets of
                40*20 meters that pop around the country.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Futsalnepal;
