import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Delta";
  }, []);

  return (
    <>
      <div>
        <video
          src="src\component\Images\hightakeoff.mp4"
          width="100%"
          height="auto"
          autoPlay
          loop // Add loop attribute to make the video loop continuously
          muted // Mute the video
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "0",
            left: "0",
            minWidth: "100%",
            minHeight: "151%",
            objectFit: "cover",
          }}
        />

        <br />
        <br />
        <br />
        <div className="row">
          {" "}
          <div className="col-2"></div>
          <div className="col-8">
            <p
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "50px",
                borderRadius: "30px",
                fontFamily: "times new roman",
                fontSize: "17px",
                fontStyle: "italic",
              }}
            >
              The history of Delta Air Lines began with the world's first aerial
              crop dusting operation called Huff Daland Dusters, Inc. The
              company was founded on March 2, 1925, in Macon, Georgia, before
              moving to Monroe, Louisiana, in summer 1925.[12] It flew a
              Huff-Daland Duster, the first true crop duster, designed to combat
              the boll weevil infestation of cotton crops.[13] C.E. Woolman,
              general manager and later Delta's first CEO, led a group of local
              investors to acquire the company's assets. Delta Air Service was
              incorporated on December 3, 1928, and was named after the
              Mississippi Delta region.[14][15][16] Passenger operations began
              on June 17, 1929,[17] from Dallas, Texas, to Jackson, Mississippi,
              with stops at Shreveport and Monroe, Louisiana. By June 1930,
              service had extended east to Atlanta and west to Fort Worth,
              Texas.[18] Passenger service ceased in October 1930 when the
              airmail contract for the route Delta had pioneered was awarded to
              another airline, which purchased the assets of Delta Air Service.
              Local banker Travis Oliver, acting as a trustee, C.E. Woolman, and
              other local investors purchased back the crop-dusting assets of
              Delta Air Service and incorporated as Delta Air Corporation on
              December 31, 1930. Delta Air Corporation secured an air mail
              contract in 1934, and began doing business as Delta Air Lines over
              Mail Route 24, stretching from Fort Worth, Texas, to Charleston,
              South Carolina.[18][19][12] Delta moved its headquarters from
              Monroe, Louisiana, to its current location in Atlanta in 1941.[20]
              The company name officially became Delta Air Lines in 1945.[21] In
              1946, the company commenced regularly scheduled freight transport.
              In 1949, the company launched the first discounted fares between
              Chicago and Miami. In 1953, the company launched its first
              international routes after the acquisition of Chicago and Southern
              Air Lines.[22] In 1959, it was the first airline to fly the
              Douglas DC-8. In 1960, it was the first airline to fly Convair 880
              jets. In 1964, it launched the Deltamatic reservation systems
              using computers in the IBM 7070 series. In 1965, Delta was the
              first airline to fly the McDonnell Douglas DC-9.
            </p>{" "}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br /><br />
    </>
  );
};

export default About;
