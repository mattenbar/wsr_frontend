import { Link } from "react-router-dom";

export function GetCat(post) {
  if (post.post) {
    post = post.post;
  }
  switch (post.category_id) {
    case 1:
      return (
        <Link
        className="get-cat"
          
          to={{
            pathname: `/Capital-Connections`,
          }}
        >
          <h2>Capital Connections</h2>
        </Link>
      );
    case 2:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/The-Digital-Domain",
          }}
        >
          <h2>The Digital Domain</h2>
        </Link>
      );
    case 3:
      return (
        <Link
          className="get-cat"
          to={{
            pathname: "/Shout-Outs-And-Put-Downs",
          }}
        >
          <h2>Shout Outs & Put Downs</h2>
        </Link>
      );
    case 4:
      return (
        <Link
          className="get-cat"
          to={{
            pathname: "/Beltway-And-Beyond",
          }}
        >
          <h2>Beltway And Beyond</h2>
        </Link>
      );
    case 5:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/People-Moves",
          }}
        >
          <h2>People Moves</h2>
        </Link>
      );
    case 6:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/Nightmare-On-Compliance-St",
          }}
        >
          <h2>Nightmare On Compliance St</h2>
        </Link>
      )
    case 7:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/Buy-It-Or-Build-It",
          }}
        >
          <h2>Buy It Or Build It</h2>
        </Link>
      );
    case 8:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/Wallet-Share",
          }}
        >
          <h2>Wallet Share</h2>
        </Link>
      );
    case 9:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/CyberCrypt-Tales",
          }}
        >
          <h2>Cybercrypt Tales</h2>
        </Link>
      );
    case 10:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/On-The-Rise",
          }}
        >
          <h2>On The Rise</h2>
        </Link>
      );
    case 11:
      return (
        <Link
        className="get-cat"
          to={{
            pathname: "/Letters-From-Larry",
          }}
        >
          <h2>Letters From Larry</h2>
        </Link>
      ) ;
    case 12:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Dramatis-Personae" ,
          }}
        >
          <h2>Dramatis Personae</h2>
        </Link>
      );
    case 13:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/NewsMakers-Roundup" ,
          }}
        >
          <h2>Newsmakers Roundup</h2>
        </Link>
      );
    case 14:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Transactions-And-Transitions" ,
          }}
        >
          <h2>Transactions & Transitions</h2>
        </Link>
      );
    case 15:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Cast-And-Crew",
          }}
        >
          <h2>Cast & Crew</h2>
        </Link>
      );
    case 16:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Bizarre-Industry-Bazaar",
          }}
        >
          <h2>Bizarre Industry Bazaar</h2>
        </Link>
      );
    case 17:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Investment-Solutions-and-Gatekeepers",
          }}
        >
          <h2>Investment Solutions & Gatekeepers</h2>
        </Link>
      );
    case 18:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Words-In-Edgewise",
          }}
        >
          <h2>Words In Edgewise</h2>
        </Link>
      );
    case 19:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Noteworthy-Notes",
          }}
        >
          <h2>Noteworthy Notes</h2>
        </Link>
      );
    case 20:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Health-And-Wealth",
          }}
        >
          <h2>Health & Wealth</h2>
        </Link>
      );
    case 21:
      return (
        <Link
        className="get-cat"
          to={{
            pathname:"/Upmarket",
          }}
        >
          <h2>Upmarket</h2>
        </Link>
      );

    default:
      return "/";
  }
}
