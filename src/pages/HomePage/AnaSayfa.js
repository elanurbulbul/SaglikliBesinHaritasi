import React, {useEffect, useState} from 'react'
import Loading from '../../components/Loading';
import cx from 'classnames';


const Anasayfa = () => {
  const [loading, setLoading] = useState(false);
  
  return (
    <section className={cx('hero-section')}>
      {loading && <Loading />}
      <div>

      </div>
    </section>
  )
}
export default Anasayfa;

