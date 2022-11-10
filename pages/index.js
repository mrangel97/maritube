import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorite";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red"
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                < Menu />
                <Header />
                <Timeline playlists={config.playlists} />
                <Favorite favorites={config.favorites} />
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
     img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
     }

     .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
     }
`;

const StyledBanner = styled.div`
    background-image: url(https://images.unsplash.com/photo-1618944847023-38aa001235f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80);
    background-position: center;
    height: 215px;
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })};
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorite(props) {
    const favoriteNames = Object.keys(props.favorites);
    return (
        <StyledFavorites>
            {favoriteNames.map((favoriteName) => {
                const favorites = props.favorites[favoriteName];
                return (
                    <section>
                        <h2>{favoriteName}</h2>
                        <div>
                            {favorites.map((favorite) => {
                                return (
                                    <a href={favorite.url}>
                                        <img src={favorite.img} />
                                        <span>
                                            {favorite.name}
                                        </span>
                                    </a>
                                )
                            })};
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    )
}