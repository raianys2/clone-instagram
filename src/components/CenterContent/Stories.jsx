import StoriesCard from "./StoriesCard";

import jumamute from '../../assets/foto-jumamute.png';
import proa from '../../assets/foto-proa.png';
import aurora from '../../assets/foto-aurora.png';
import manobrown from '../../assets/foto-manobrown.png';
import ananda from '../../assets/foto-ananda.png';
import lucasinutilismo from '../../assets/foto-lucasinutilismo.png';
import senactito from '../../assets/foto-senactito.png';
import maisa from '../../assets/foto-maisa.png';

export default function Stories() {
  return (
    <div className="stories">
      <StoriesCard img={jumamute} nome="jumamutee" />
      <StoriesCard img={proa} nome="instituto.proa" />
      <StoriesCard img={aurora} nome="auroraseles" />
      <StoriesCard img={manobrown} nome="manobrown" />
      <StoriesCard img={ananda} nome="ananda" />
      <StoriesCard img={lucasinutilismo} nome="lucasinutilismo" />
      <StoriesCard img={senactito} nome="senactito" />
      <StoriesCard img={maisa} nome="maisa" />
    </div>
  );
}
