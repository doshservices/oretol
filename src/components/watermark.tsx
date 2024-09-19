import topImg from '../assets/pictures/oretol watermark-top.png'
import bottomImg from '../assets/pictures/oretol watermark-bottom.png'

export const TopWatermark = () => {
    return (
        <img src={topImg} alt="oretol watermark" className='absolute top-0 right-0 h-10 sm:h-16 pointer-events-none -z-[1]' />
    )
}

export const BottomWatermark = () => {
    return (
        <img src={bottomImg} alt="oretol watermark" className='absolute bottom-0 right-0 h-12 sm:h-20 pointer-events-none -z-[1]' />
    )
}