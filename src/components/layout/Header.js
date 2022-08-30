import styles from './Header.module.css';
import Navigation from './Navigation';
import LogoImg from '../../images/suveloper101.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <img src={LogoImg} className={styles.img} alt='logo' />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;