import image404 from '../../assets/images/404.png'
import { Container } from './styles';

export default function Error404 () {
    return(
        <Container>
            <img className="image" src={image404.src} alt="" />
            <h1 className='title'>404</h1>
            <p className='text'>Page not found...</p>
        </Container>
    );
}