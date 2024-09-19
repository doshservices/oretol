import { useState } from "react"
import { InsightCard } from "../components/Blog/InsightsCard"
import { PagesContainer } from "../components/PagesContainer"
import { insights } from "../data/blog/insights"
import { CollaboratorContact } from "../components/CollaboratorContact"
import { TopWatermark } from "../components/watermark"

const Insight = () => {
    const [visionType, setVisionType] = useState<string>('dredging')
    return (
        <PagesContainer>
            <section className="px-4 sm:px-[7%] py-12">
                <h2 className='line-heading font-medium text-2xl md:text-[2.8rem] max-w-[710px] leading-[1.35] text-Primary'>Insights</h2>
            </section>
            <section className="px-4 sm:px-[7%] py-12 bg-white relative z-10">
                <TopWatermark />
                <div className='flex items-center flex-wrap gap-x-8 gap-y-4 mb-8'>
                    <button className={`text-base py-1 ssm:text-lg ${visionType === 'dredging' ? 'border-b-2 border-b-Secondary text-Secondary' : 'border-b-2 border-b-transparent text-dark200'}`} onClick={() => setVisionType('dredging')}>Latest</button>
                    <button className={`text-base py-1 ssm:text-lg ${visionType === 'real-estate' ? 'border-b-2 border-b-Secondary text-Secondary' : 'border-b-2 border-b-transparent text-dark200'}`} onClick={() => setVisionType('real-estate')}>Sustainability</button>
                    <button className={`text-base py-1 ssm:text-lg ${visionType === 'construction' ? 'border-b-2 border-b-Secondary text-Secondary' : 'border-b-2 border-b-transparent text-dark200'}`} onClick={() => setVisionType('construction')}>Market insight</button>
                    <button className={`text-base py-1 ssm:text-lg ${visionType === 'land-reclaim' ? 'border-b-2 border-b-Secondary text-Secondary' : 'border-b-2 border-b-transparent text-dark200'}`} onClick={() => setVisionType('land-reclaim')}>Partnership</button>
                </div>
                <h3 className="text-Primary font-medium text-xl md:text-[1.6rem] mb-6">Latest</h3>
                <div className="grid ssm:grid-cols-2 max-w-[1500px] mx-auto gap-4 sm:gap-6">
                    {insights.slice(0, 2).map((insight, index: number) =>
                        <InsightCard
                            key={index}
                            insight={insight}
                        />
                    )}
                </div>
                <div className="grid ssm:grid-cols-2 md:grid-cols-3 max-w-[1500px] mx-auto gap-4 sm:gap-6 mt-4 sm:mt-6">
                    {insights.slice(1, 4).map((insight, index: number) =>
                        <InsightCard
                            key={index}
                            insight={insight}
                        />
                    )}
                </div>
            </section>
            <CollaboratorContact />
        </PagesContainer>
    )
}

export default Insight