import { useRouter } from 'next/router'
import rickFace from '../../assets/images/rickFace.png'
import { NavIconContainer, RickFace } from './styles'

export default function NavIcon() {
    const router = useRouter();
    return (
        <NavIconContainer>
            <RickFace src={rickFace.src} onClick={()=>{router.push('/')}} />
        </NavIconContainer>
    )
}