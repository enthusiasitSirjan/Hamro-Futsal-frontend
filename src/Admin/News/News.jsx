import { Card, message } from "antd";
import React, { useEffect, useState } from "react";
import Footer from "../../Landingpage/Footer";
import Navbar from "../../Landingpage/Navbar/Navbar";
import LatestNews from "./LatestNews";
import { ShowAllTournamentsLink } from "../../Api/Endpoint";
import { GetApi } from "../../Api/Callapi";
import { LocationCityOutlined } from "@material-ui/icons";
import { CalendarOutlined } from "@ant-design/icons";

const { Meta } = Card;

const News = () => {
  const [tournamentData, settournamentData] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async (e) => {
    const response = await GetApi(ShowAllTournamentsLink);
    if (response.status === 200) {
      const data = response.data;
      settournamentData(data);
      // message.success("List of All users");
    } else {
      message.error("Failed to load tournament right now");
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      {/* Page Title */}
      <div className="futsal-news-container">
        <div className="futsal-news-header-contents">
          <h2>THE INFORMATION YOU HAVE BEEN LOOKING FOR</h2>
          <h4>Stay updated with futsal</h4>
        </div>
      </div>
      {/* news-container */}
      <div className="futsal-news-main">
        {/* One image + list View */}
        <div className="futsal-news-imagelist">
          <div className="upcoming-tournaments">
            <h1>Upcoming Tournaments</h1>
            {tournamentData
              ? tournamentData.map((data, index) => (
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <img alt="Tournaments" src={data && data.tourno_photo} />
                    }
                    key={`tournament-${index}`}
                  >
                    <Meta
                      title={<h1>{data && data.tourno_name}</h1>}
                      description={
                        <>
                          <div style={{ display: "flex", gap: "15px" }}>
                            <CalendarOutlined />
                            <h6>{data && data.tourno_date}</h6>
                          </div>
                          <div style={{ display: "flex", gap: "15px" }}>
                            <LocationCityOutlined />
                            <h6>{data && data.tourno_location}</h6>
                          </div>
                        </>
                      }
                    />
                  </Card>
                ))
              : null}
          </div>

          <div className="futsal-news-list">
            <h1>What's New</h1>
            <a
              href={
                "https://www.the-afc.com/competitions/afc-cup/latest/news/afc-confirms-media-partnership-with-sportdigital-in-germany-austria-and-switzerl"
              }
              rel="noreferrer"
              target="_blank"
            >
              <LatestNews
                sidenewsImg={
                  "https://www.the-afc.com/img/image/upload/t_l14/v1580013931/sljlsbnchlt43myqiwmu.jpg"
                }
                sideNewsHead={
                  "AFC confirms media partnership with Sportdigital in Germany, Austria and Switzerland"
                }
                sideNewsPara={
                  "Sportdigital’s deal covers the AFC U23 Asian Cup 2022 and 2024, all AFC’s men’s youth competitions, the AFC Cup as well as all Futsal men’s national team and club competitions."
                }
              />
            </a>

            <a
              href={
                "https://www.the-afc.com/competitions/afc-cup/latest/news/afc-confirms-media-partnership-with-sportdigital-in-germany-austria-and-switzerl"
              }
              rel="noreferrer"
              target="_blank"
            >
              <LatestNews
                sidenewsImg={
                  "https://www.the-afc.com/img/image/upload/t_l14/v1580013931/sljlsbnchlt43myqiwmu.jpg"
                }
                sideNewsHead={
                  "AFC confirms media partnership with Sportdigital in Germany, Austria and Switzerland"
                }
                sideNewsPara={
                  "Sportdigital’s deal covers the AFC U23 Asian Cup 2022 and 2024, all AFC’s men’s youth competitions, the AFC Cup as well as all Futsal men’s national team and club competitions."
                }
              />
            </a>

            <a
              href={
                "https://www.the-afc.com/competitions/afc-cup/latest/news/afc-confirms-media-partnership-with-sportdigital-in-germany-austria-and-switzerl"
              }
              rel="noreferrer"
              target="_blank"
            >
              <LatestNews
                sidenewsImg={
                  "https://www.the-afc.com/img/image/upload/t_l14/v1580013931/sljlsbnchlt43myqiwmu.jpg"
                }
                sideNewsHead={
                  "AFC confirms media partnership with Sportdigital in Germany, Austria and Switzerland"
                }
                sideNewsPara={
                  "Sportdigital’s deal covers the AFC U23 Asian Cup 2022 and 2024, all AFC’s men’s youth competitions, the AFC Cup as well as all Futsal men’s national team and club competitions."
                }
              />
            </a>
            <a
              href={
                "https://www.the-afc.com/competitions/afc-cup/latest/news/afc-confirms-media-partnership-with-sportdigital-in-germany-austria-and-switzerl"
              }
              rel="noreferrer"
              target="_blank"
            >
              <LatestNews
                sidenewsImg={
                  "https://www.the-afc.com/img/image/upload/t_l14/v1580013931/sljlsbnchlt43myqiwmu.jpg"
                }
                sideNewsHead={
                  "AFC confirms media partnership with Sportdigital in Germany, Austria and Switzerland"
                }
                sideNewsPara={
                  "Sportdigital’s deal covers the AFC U23 Asian Cup 2022 and 2024, all AFC’s men’s youth competitions, the AFC Cup as well as all Futsal men’s national team and club competitions."
                }
              />
            </a>
          </div>
        </div>

        {/* Futsal-schedule*/}
      </div>
      <Footer />
    </>
  );
};

export default News;
