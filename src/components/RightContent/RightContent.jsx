
import SugestionCard from './SugestionCard';
import ImgJpProfile from '../../assets/jp_loureiro.jpeg'

import ImgTrizProfile from '../../assets/ImgTrizProfile.jpg'
import ImgCalangoProfile from '../../assets/ImgCalangoProfile.jpg'
import ImgClairoProfile from '../../assets/ImgClairoProfile.jpg'
import ImgLenProfile from '../../assets/ImgLenProfile.jpg'
import ImgGirlProfile from '../../assets/ImgGirlProfile.jpg'


function RightContent() {
  return (
    <div className='RightContent'>
      <SugestionCard
        srcImg={ImgJpProfile}
        name='Jp.'
        nickName='jp_loureiro.'
      />

      <div>
        <div className='suggestionSide'>
          <span>Suggested for you</span>
          <span><strong>See all</strong></span>
        </div>
        <div className='suggestionsCards'>

          <SugestionCard
            srcImg={ImgTrizProfile}
            name='triz pariz'
            nickName='triz'
          />

          <SugestionCard
            srcImg={ImgCalangoProfile}
            name='Calango'
            nickName='calaaaango'
          />

          <SugestionCard
            srcImg={ImgClairoProfile}
            name='Claire Cottrill'
            nickName='clairo'
          />

          <SugestionCard
            srcImg={ImgLenProfile}
            name='Len'
            nickName='elenidrake'
          />

          <SugestionCard
            srcImg={ImgGirlProfile}
            name='girl in red'
            nickName='girlinred'
          />

          <div className='direitos'>
            <ul>
              <li>About</li>
              <li>Help</li>
              <li>Press</li>
              <li>API</li>
              <li>Jobs</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Locations</li>
              <li>Language</li>
              <li>Meta Verified</li>
            </ul>

            <div>
              <p>© 2023 INSTAGRAM FROM jp_loureiro</p>
            </div>

          </div>

        </div>
      </div>
    </div>


  )
}

export default RightContent
