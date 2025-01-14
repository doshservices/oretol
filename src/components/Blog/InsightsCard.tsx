import { Link } from "react-router-dom"
import { IInsights } from "../../utils/interface";

export const InsightCard = ({ insight }: IInsights) => {

    return (
        <article>
            <Link to={"/insight/"+insight.insightLink}>
                <figure>
                    <img className="w-full" src={insight?.img} alt={insight?.title} />
                </figure>
                <p className="uppercase texr-[#36383D] text-xs mt-5">{insight.category}</p>
                <p className="text-Primary font-medium text-base sm:text-lg mt-1">{insight.title}</p>
                <p className="text-[#2D2D2DCC] text-sm mt-2">{insight.date}</p>
            </Link>
        </article>
    )
}