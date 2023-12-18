import FeedPost from "./FeedPost";
import postAnitta from "../../assets/publi-anitta.png";
import perfilAnitta from "../../assets/foto-anitta.png";

import postTaylor from "../../assets/publi-taylor.png";
import perfilTaylor from "../../assets/foto-taylor.png";

import postDavidbowie from "../../assets/publi-davidbowie.png";
import perfilDavidbowie from "../../assets/foto-davidbowie.png";

import postBillie from "../../assets/publi-billie.png";
import perfilBillie from "../../assets/foto-billie.png";

import perfilGirlInRed from "../../assets/ImgGirlProfile.jpg"; 
import postGirlInRed from "../../assets/publi-girlInRed.png";



export default function Feed() {
  return (
    <div className="feed">
      <FeedPost
        imgProfile={perfilAnitta}
        post={postAnitta}
        altImg="post-anitta"
        likes="1,435,321"
        nameProfile="anitta"
        discriptionPost="Dance como se ninguém estivesse assistindo! 💃✨ A vida é uma festa, e você é a estrela. #AnittaVibes #VaiAnitta"
        comments="7,873"
      />

      <FeedPost
        imgProfile={perfilTaylor}
        post={postTaylor}
        altImg="post-taylor"
        likes={"12,577,714"}
        nameProfile="taylorswift"
        discriptionPost="Lyrics that touch the soul. 📝✨ What's your favorite Taylor Swift song that always moves you? #TaylorLyrics #MusicalEmotion"
        comments="5,232"
      />

      <FeedPost
        imgProfile={perfilDavidbowie}
        post={postDavidbowie}
        altImg="post-david"
        likes={"28,713"}
        nameProfile="davidbowie"
        discriptionPost="Sharing musical favorites today. What's your top David Bowie song? Drop it in the comments! #BowieFavorites #MusicTalk"
        comments="80"
      />

      <FeedPost
        imgProfile={perfilBillie}
        post={postBillie}
        altImg="post-billie"
        likes={"4,957,250"}
        nameProfile="billieeilish"
        discriptionPost="unarchived"
        comments="24,593"
      />

      <FeedPost
        imgProfile={perfilGirlInRed}
        post={postGirlInRed}
        altImg="post-girlInRed"
        likes={"496,584"}
        nameProfile="girlinred"
        discriptionPost="yeah"
        comments="870"
      />


    </div>
  );
}
