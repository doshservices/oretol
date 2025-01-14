import { Fragment } from 'react'
import { PagesContainer } from '../components/PagesContainer'
import { Navbar } from '../components/Navbar'
import backArrow from '../assets/icons/back-arrow.svg.svg'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import homeHero from "../assets/pictures/homeHero.png";
import { SingleInsight } from '../data/blog/insights'
import { ErrorPage } from './PageNotFound'

export default function InsightSinglePage() {
    const { id } = useParams();

    const insight = SingleInsight?.find((insight) => insight?.id === id);

    return (
        <Fragment>
            <Navbar />
            <PagesContainer>
                {insight?.id ? (
                    <section className='px-[7%] py-12'>
                        <Link to='/insight'>
                            <div className='flex items-center gap-3'>
                                <span><img src={backArrow} alt="" /></span>
                                <span>Back to Insights</span>
                            </div>
                        </Link>

                        <div className='mt-10'>
                            <div className='relative before:w-[2px] before:h-[100%] before:bg-[#42BEFA] before:absolute'>
                                <div className='pl-7'>
                                    <h2 className='text-[32px] font-[500]'>{insight.title}</h2>
                                    <div className='flex items-center gap-3 mt-4'>
                                        <h3 className='font-[400] text-[14px] text-[#2D2D2D]'>MARKET INSIGHT</h3> <span className='text-[#00000099]'>|</span> <span className='font-[400] text-[14px] text-[#2D2D2D]'>{insight.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-16'>
                                <p className='font-[400] text-[16px] text-[#6A6A6A] leading-[32px] tracking-[-0.36px]'>{insight.details}</p>
                            </div>

                            <div className="relative h-screen max-h-[600px] lg:max-h-[750px] flex items-end px-4 sm:px-[7%] py-12 mt-20 overflow-hidden">

                                <ReactPlayer
                                    muted
                                    loop={true}
                                    controls={false}
                                    className="home-hero-video scale-[3.8] sm:scale-[2] lg:scale-[1.5] 3xl:scale-[2] -z-[1] pointer-events-none mt-[400px]"
                                    playing={true}
                                    url={insight.videoUrl}
                                    style={{backgroundPosition:"center", backgroundSize:"cover"}}
                                />
                                {/* <img
                                    src={homeHero}
                                    alt=""
                                    className="w-full absolute inset-0 min-h-full object-cover -z-[2]"
                                /> */}
                            </div>
                        </div>
                    </section>
                ):(
                    <ErrorPage />
                )}

            </PagesContainer>
        </Fragment>
    )
}
